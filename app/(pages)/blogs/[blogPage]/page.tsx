"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSection } from "@/app/providers/SectionProvider";
import { ArrowLeft, ChevronRight } from "lucide-react";
import DOMPurify from "dompurify";
import { useBlogBySlug, useBlogs } from "@/hooks/useBlog";

const formatDate = (isoString: string) => {
  try {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Recent";
  }
};

const BlogDetailPage = () => {
  const params = useParams();
  const blogPage = params?.blogPage;
  const slug = Array.isArray(blogPage) ? blogPage[0] : blogPage;
  
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";

  const { data: blog, isLoading: isBlogLoading } = useBlogBySlug(slug || "");
  const { data: allBlogsData } = useBlogs();

  const relatedBlogs = useMemo(() => {
    if (!blog || !allBlogsData?.blogs) return [];
    
    const matches = allBlogsData.blogs.filter(
      (b) => b.id !== blog.id && b.portal?.slug === blog.portal?.slug
    );
    
    const candidates = matches.length > 0 
      ? matches 
      : allBlogsData.blogs.filter((b) => b.id !== blog.id);

    return candidates.slice(0, 3).map((item) => {
      const authorName = "Zuvara Team";
      return {
        id: item.id,
        slug: item.slug,
        title: item.title,
        desc: item.excerpt,
        image: item.coverImage?.[0] || "/images/placeholder.png",
        category: item.portal?.name || "General",
        author: authorName,
        date: formatDate(item.createdAt),
      };
    });
  }, [blog, allBlogsData]);

  if (isBlogLoading) {
    return (
      <div className="min-h-screen bg-zinc-50 lg:mt-5 animate-pulse">
        {/* Hero Section Skeleton */}
        <section className="px-4 pb-6 pt-4 sm:px-6 lg:px-0 lg:pb-10">
          <div className="container mx-auto max-w-7xl">
            <div className="relative h-[62vh] rounded-4xl bg-zinc-200 lg:h-[74vh] flex items-end p-5 sm:p-8 lg:p-10">
              <div className="w-full max-w-4xl space-y-4">
                {/* Breadcrumbs */}
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-zinc-300 rounded-full" />
                  <div className="h-6 w-16 bg-zinc-300 rounded-full" />
                  <div className="h-6 w-32 bg-zinc-300 rounded-full" />
                </div>
                {/* Category tag */}
                <div className="h-7 w-24 bg-zinc-300 rounded-full" />
                {/* Title lines */}
                <div className="h-10 bg-zinc-300 rounded-xl w-3/4 sm:h-12" />
                <div className="h-10 bg-zinc-300 rounded-xl w-1/2 sm:h-12" />
                {/* Author info */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="size-10 rounded-full bg-zinc-300 lg:size-12" />
                  <div className="space-y-2">
                    <div className="h-3 w-16 bg-zinc-300 rounded" />
                    <div className="h-4 w-28 bg-zinc-300 rounded" />
                  </div>
                  <div className="h-8 w-px bg-zinc-300 mx-2" />
                  <div className="space-y-2">
                    <div className="h-3 w-20 bg-zinc-300 rounded" />
                    <div className="h-4 w-24 bg-zinc-300 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section Skeleton */}
        <section className="bg-white pb-12 pt-6 lg:pb-16 lg:pt-10">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-0 space-y-6">
            <div className="border-b border-zinc-200 pb-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-zinc-200" />
                <div className="space-y-1.5">
                  <div className="h-4 w-24 bg-zinc-200 rounded" />
                  <div className="h-3 w-16 bg-zinc-200 rounded" />
                </div>
              </div>
              <div className="h-4 w-16 bg-zinc-200 rounded" />
            </div>
            
            {/* Paragraph lines */}
            <div className="space-y-3">
              <div className="h-4 bg-zinc-200 rounded w-full" />
              <div className="h-4 bg-zinc-200 rounded w-full" />
              <div className="h-4 bg-zinc-200 rounded w-11/12" />
              <div className="h-4 bg-zinc-200 rounded w-5/6" />
            </div>

            <div className="h-8 bg-zinc-200 rounded w-1/3 mt-8" />
            
            <div className="space-y-3">
              <div className="h-4 bg-zinc-200 rounded w-full" />
              <div className="h-4 bg-zinc-200 rounded w-full" />
              <div className="h-4 bg-zinc-200 rounded w-4/5" />
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <Link href="/blogs" className="text-foreground hover:underline">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const authorName = "Zuvara Team";
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
    authorName,
  )}&top=straight01&hairColor=724133&facialHairProbability=0&mouth=smile&clothing=blazerAndShirt`;

  const coverImg = Array.isArray(blog.coverImage)
    ? (blog.coverImage[0] || "/images/placeholder.png")
    : (blog.coverImage || "/images/placeholder.png");

  return (
    <div className="min-h-screen bg-zinc-50 lg:mt-5">
      {/* Hero Section */}
      <section className="px-4 pb-6 pt-4 sm:px-6 lg:px-0 lg:pb-10">
        <div className="container mx-auto max-w-7xl">
          <div className="relative h-[62vh] overflow-hidden rounded-4xl border border-white/20 shadow-2xl lg:h-[74vh]">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={coverImg}
                alt={blog.title}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/45 to-black/30" />
            </motion.div>

            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-5 sm:p-8 lg:p-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.8 }}
                  className="max-w-4xl"
                >
                  <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-white/85 sm:text-sm">
                    <Link
                      href="/"
                      className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm"
                    >
                      Home
                    </Link>
                    <ChevronRight size={14} />
                    <Link
                      href="/blogs"
                      className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm"
                    >
                      Blogs
                    </Link>
                    <ChevronRight size={14} />
                    <span className="max-w-56 truncate rounded-full bg-white/10 px-3 py-1 text-white/90 backdrop-blur-sm sm:max-w-none">
                      {blog.title}
                    </span>
                  </nav>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-md text-white",
                          isPersonal
                            ? "border-personalCare/35 bg-personalCare/65"
                            : "border-babyCare/40 bg-babyCare/65",
                        )}
                      >
                        {blog.portal?.name || "General"}
                      </span>
                    </div>

                    <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                      {blog.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-white/90">
                      <div className="flex items-center gap-3">
                        <div className="relative size-10 overflow-hidden rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm lg:size-12">
                          <Image
                            src={avatarUrl}
                            alt={authorName}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold uppercase tracking-widest opacity-65">
                            Written by
                          </span>
                          <span className="text-sm font-bold lg:text-base">
                            {authorName}
                          </span>
                        </div>
                      </div>

                      <div className="hidden h-10 w-px bg-white/20 sm:block" />

                      <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-widest opacity-65">
                          Published on
                        </span>
                        <span className="text-sm font-bold lg:text-base">
                          {formatDate(blog.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white pb-12 pt-6 lg:pb-16 lg:pt-10">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="mb-8 flex items-center justify-between border-b border-zinc-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="relative size-10 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100">
                  <Image
                    src={avatarUrl}
                    alt={authorName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    {authorName}
                  </p>
                  <p className="text-xs text-zinc-500">{formatDate(blog.createdAt)}</p>
                </div>
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {blog.portal?.name || "General"}
              </span>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.content || "") || "",
              }}
              className={cn(
                "text-[1.12rem] leading-8 text-foreground font-medium",
                "[&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-[1.95rem] [&_h2]:font-semibold [&_h2]:leading-tight",
                isPersonal
                  ? "[&_h2]:text-personalCare"
                  : "[&_h2]:text-foreground",
                "[&_p]:mb-7 [&_p]:leading-8",
                "[&_ul]:mb-7 [&_ul]:list-disc [&_ul]:pl-6",
                "[&_ol]:mb-7 [&_ol]:list-decimal [&_ol]:pl-6",
                "[&_li]:mb-2 [&_li]:leading-8",
                "[&_strong]:font-bold",
                isPersonal
                  ? "[&_strong]:text-personalCare"
                  : "[&_strong]:text-zinc-900",
              )}
            />
            <footer className="mt-12 border-t border-zinc-200 pt-8">
              <Link
                href="/blogs"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition-colors hover:text-zinc-900"
              >
                <ArrowLeft
                  size={18}
                  className="transition-transform group-hover:-translate-x-1"
                />
                Back to all articles
              </Link>
            </footer>
          </motion.div>
        </div>
      </section>

      {/* Related Blogs Section */}
      <section
        className={cn(
          "border-t border-zinc-200 bg-white py-10 lg:py-14",
          isPersonal ? "bg-personalCare/0" : "bg-white",
        )}
      >
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              More from Zuvara Blog
            </h2>
          </div>

          <div className="space-y-6">
            {relatedBlogs.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border-b border-zinc-200 pb-6 last:border-0 last:pb-0"
              >
                <Link
                  href={`/blogs/${item.slug}`}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-200 sm:w-28">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0 space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                      {item.category}
                    </p>
                    <h3
                      className={cn(
                        "line-clamp-2 text-xl font-semibold leading-[1.25] text-zinc-900 transition-colors group-hover:underline",
                        isPersonal
                          ? "group-hover:text-personalCare"
                          : "group-hover:text-zinc-900",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600">
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span className="font-semibold text-zinc-700">
                        {item.author}
                      </span>
                      <span className="size-1 rounded-full bg-zinc-300" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
