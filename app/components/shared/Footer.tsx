"use client";

import Link from "next/link";
import { Facebook, Instagram, Music, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";
import { contactLists, socialLinks } from "@/constants";

export default function Footer() {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";

  const footerSections = [
    // {
    //   title: "Shop & Learn",
    //   links: ["Store", "Men", "Women", "Kids", "Collections", "New Arrivals"],
    // },
    // {
    //   title: "Shopping",
    //   links: [
    //     "Size Charts",
    //     "Retail Store",
    //     "Track Order",
    //     "Returns",
    //     "Shipping Info",
    //   ],
    // },
    // {
    //   title: "Account",
    //   links: [
    //     "Manage Account",
    //     "My Orders",
    //     "Wishlist",
    //     "Gift Cards",
    //     "Loyalty Program",
    //   ],
    // },
    // {
    //   title: "About Zuvara",
    //   links: [
    //     "Our Story",
    //     "Our Difference",
    //     "Sustainability",
    //     "Newsroom",
    //     "Careers",
    //   ],
    // },
    // {
    //   title: "Customer Care",
    //   links: ["Contact Us", "FAQ", "Live Chat", "Email Support", "Call Us"],
    // },
    // {
    //   title: "Company",
    //   links: [
    //     "About Us",
    //     "Blog",
    //     "Privacy Policy",
    //     "Terms & Conditions",
    //     "Contact",
    //   ],
    // },
    {
      title: "Links",
      links: [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "Baby Products",
          href: "/babyCareProduct",
        },
        {
          label: "Baby Gear",
          href: "/clothing",
        },
        // {
        //   label: "Blogs",
        //   href: "/blogs",
        // },
        {
          label: "Contact Us",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <footer>
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl pt-8 pb-8 lg:pb-0 lg:pt-16">
        {/* Section Switcher */}
        <div className="flex justify-center my-8">
          <Link
            href={!isPersonal ? "/personalCare" : "/babyCare"}
            className={cn(
              "group flex items-center gap-4 p-3 pr-6 rounded-2xl transition-all duration-300 border bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-lg hover:-translate-y-1",
              isPersonal ? "border-personalCare/50" : "border-babyCare/50",
            )}
          >
            <div
              className={cn(
                "size-12 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-sm",
                isPersonal ? "bg-personalCare" : "bg-babyCare",
              )}
            >
              <Icon
                icon={
                  !isPersonal
                    ? "material-symbols:face-retouching-natural-rounded"
                    : "mingcute:baby-fill"
                }
                width="28"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-zinc-900">
                Switch to {!isPersonal ? "Personal Care" : "Baby Care"}
              </p>
              <p className="text-xs text-zinc-600 font-medium">
                Browse {!isPersonal ? "Skin & Health" : "Baby"} products
              </p>
            </div>
            <Icon
              icon="icon-park-outline:switch"
              className="text-zinc-500 group-hover:translate-x-1 transition-transform"
              width={24}
            />
          </Link>
        </div>

        <div
          className={cn(
            "flex flex-col gap-2 text-center md:text-left md:flex-row items-center justify-between rounded-lg md:rounded-full p-4 md:p-2",
            isPersonal
              ? "bg-ternary text-zinc-200"
              : "bg-linear-to-l from-foreground to-secondary text-white",
          )}
        >
          <h3 className="text-xl md:pl-4">
            Zuvara would be the perfect choice for your baby care needs!
          </h3>
          <Link
            href="/shop"
            className={cn(
              "bg-white px-4 py-2 rounded-full font-semibold hover:text-white! transition flex items-center gap-2",
              isPersonal
                ? "text-personalCare! hover:bg-personalCare"
                : "text-foreground! hover:bg-secondary",
            )}
          >
            <Icon icon="bitcoin-icons:cart-filled" width="24" height="24" />
            Shop Now
          </Link>
        </div>

        {/* Newsletter & Contact Section */}
        <div className="py-8 grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* quick links */}
          <div className="">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3
                  className={cn(
                    "text-sm lg:text-base font-semibold mb-2 lg:mb-4",
                    isPersonal ? "text-personalCare" : "text-foreground",
                  )}
                >
                  {section.title}
                </h3>
                <ul className="space-y-1 lg:space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-sm lg:text-base hover:text-foreground! hover:underline! transition whitespace-nowrap",
                          isPersonal ? "text-zinc-600!" : "text-zinc-600!",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Visit Us */}
          <div>
            <h3
              className={cn(
                "text-sm lg:text-base font-semibold mb-2 lg:mb-4",
                isPersonal ? "text-personalCare" : "text-foreground",
              )}
            >
              Visit Us
            </h3>
            <div className="space-y-3">
              {contactLists.slice(0, 2).map((contact) => (
                <div key={contact.id} className="">
                  <p>{contact.title}</p>
                  <Link href={contact.link}>
                    <p className="text-sm hover:underline">{contact.desc}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* </div> */}

          {/* Social Media */}
          {/* <div>
            <h3 className="text-sm font-semibold mb-2 lg:mb-4 text-[#8cd700]!">
              Follow Us
            </h3>
            <p className="text-sm text-zinc-500 mb-4">
              Connect with us on social media for exclusive updates and offers.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-zinc-600 hover:text-teal-600 transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-zinc-600 hover:text-teal-600 transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-zinc-600 hover:text-teal-600 transition"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
              <a
                href="#"
                className="text-zinc-600 hover:text-teal-600 transition"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div> */}

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/logo.png" alt="Zuvara Logo" width={90} height={90} />
            </Link>
            <p className="text-sm text-zinc-700">
              Subscribe to get special offers and updates on new arrivals.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className={cn(
                  "w-full px-3 py-2 border border-zinc-200 text-sm focus:outline-none rounded-full",
                  isPersonal
                    ? "focus:border-personalCare"
                    : "focus:border-foreground",
                )}
              />
              <button
                className={cn(
                  "absolute top-1/2 -translate-y-1/2 right-1 rounded-full text-white transition",
                  isPersonal ? "bg-personalCare" : "bg-foreground",
                )}
              >
                <Icon icon="iconamoon:arrow-right-2-light" className="size-8" />
              </button>
            </div>

            <div className="flex justify-center lg:justify-start items-center gap-8">
              {socialLinks.map((social) => (
                <Link href={social.link} key={social.id} className="">
                  {/* <Icon icon={social.icon} width={32} height={32} /> */}
                  <Icon
                    icon={social.icon}
                    className="size-6 cursor-pointer scale-100 hover:scale-[1.4] transition-all duration-500"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-200 py-3 lg:py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-zinc-700 group">
          <p>
            &copy; Copyright {new Date().getFullYear()}{" "}
            <span className="font-semibold text-foreground">ZUVARA</span>
            <span className="ml-2">All rights reserved.</span>
          </p>

          <div className="flex items-center gap-2">
            Design and Developed by
            <Link
              href="https://webxnepal.com/"
              target="_blank"
              className="hover:text-zinc-900 transition flex gap-2 items-center"
            >
              <Image
                src="/webx.png"
                alt="WebX Nepal Logo"
                width={50}
                height={90}
                className="font-semibold group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
