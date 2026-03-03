"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../common-ui/SectionHeading";
import * as THREE from "three";
import {
  GLTFLoader,
  type GLTF,
} from "three/examples/jsm/loaders/GLTFLoader.js";

const ThreeD = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [currentModel, setCurrentModel] = useState(0);

  const models = [
    {
      id: 1,
      title: "Test Model 1",
      description: "Loading from public/3d directory",
      path: "/3d/model1.glb",
      color: "#8cd700",
    },
    {
      id: 2,
      title: "Test Model 2",
      description: "Loading from public/3d directory",
      path: "/3d/model2.glb",
      color: "#3b82f6",
    },
    {
      id: 3,
      title: "Test Model 3",
      description: "Loading from public/3d directory",
      path: "/3d/model3.glb",
      color: "#a855f7",
    },
  ];

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfafafa);
    sceneRef.current = scene;

    // Camera Setup
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 3;
    cameraRef.current = camera;

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(
      canvasRef.current.clientWidth,
      canvasRef.current.clientHeight,
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x8cd700, 0.5);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);

    // Load Model Function - ready for dynamic model loading
    const loadModelLocal = (modelPath: string) => {
      if (modelRef.current) {
        scene.remove(modelRef.current);
      }

      const loader = new GLTFLoader();
      loader.load(
        modelPath,
        (gltf: GLTF) => {
          const model = gltf.scene;

          // Auto-fit model to view
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);

          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const fov = camera.fov;
          let cameraZ = Math.abs(
            (maxDim / 2) * Math.tan((fov * Math.PI) / 360),
          );
          cameraZ *= 1.5;
          camera.position.z = cameraZ;
          camera.lookAt(model.position);

          scene.add(model);
          modelRef.current = model;

          console.log("✅ Model loaded:", modelPath);
        },
        (progress: ProgressEvent) => {
          const percent = Math.round((progress.loaded / progress.total) * 100);
          console.log(`📦 Loading: ${percent}%`);
        },
        (error: unknown) => {
          console.error("❌ Error loading model:", error);
          console.log("⚠️ File not found at:", modelPath);
          createPlaceholderCube(scene);
        },
      );
    };

    // Reference to prevent linter warning
    void loadModelLocal;

    // Placeholder Cube for when model doesn't load
    const createPlaceholderCube = (scene: THREE.Scene) => {
      const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
      const material = new THREE.MeshPhongMaterial({ color: 0x8cd700 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      modelRef.current = cube as THREE.Object3D;
    };

    // Animation Loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (modelRef.current) {
        modelRef.current.rotation.x += 0.005;
        modelRef.current.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Load first model when component mounts
    const loadTimer = setTimeout(() => {
      loadModelLocal("/3d/model1.glb");
    }, 500);

    // Handle Window Resize
    const handleResize = () => {
      if (!canvasRef.current || !containerRef.current) return;
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener("resize", handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      renderer.dispose();
    };
  }, []);

  const handleModelChange = (index: number) => {
    setCurrentModel(index);
    // Model switching ready - uncomment when GLB files are available
    // loadModelRef?.current?.(models[index].path);
  };

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <SectionHeading
            title="Our Creative"
            highlight="3D Design"
            description="Explore our innovative product designs through interactive 3D visualization"
            align="center"
          />
        </motion.div>

        {/* 3D Canvas and Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-linear-to-br from-zinc-50 to-zinc-100 rounded-2xl overflow-hidden shadow-lg"
            ref={containerRef}
          >
            <canvas
              ref={canvasRef}
              className="w-full h-96 md:h-125"
              style={{ display: "block" }}
            />
          </motion.div>

          {/* Model Selection Cards */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Available Models
            </h3>
            {models.map((model, index) => (
              <motion.button
                key={model.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleModelChange(index)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                  currentModel === index
                    ? "bg-linear-to-r from-green-50 to-green-100 border-2 border-[#8cd700] shadow-lg"
                    : "bg-zinc-100 border-2 border-transparent hover:border-zinc-300"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-3 h-3 rounded-full mt-1 shrink-0"
                    style={{ backgroundColor: model.color }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">
                      {model.title}
                    </h4>
                    <p className="text-xs text-zinc-600 mt-1">
                      {model.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg"
        >
          <h3 className="font-semibold text-foreground mb-3">
            ��� How to Use Your Blender Models:
          </h3>
          <ol className="text-sm text-zinc-700 space-y-2 list-decimal list-inside">
            <li>
              Open your .blend file in Blender (zuvy-baby-org.blend,
              zuvy-baby-with-coat-texture.blend, etc.)
            </li>
            <li>
              Export as GLB: File → Export-As → glTF Binary (.glb) → Export
            </li>
            <li>
              Save the files as: model1.glb, model2.glb, model3.glb in
              public/3d/
            </li>
            <li>
              The models will automatically load and display with rotation
            </li>
          </ol>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeD;
