"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// ============================================================================
// CONFIGURATION: EXACT ASSETS FROM /cream-tub FOLDER (80 FRAMES)
// ============================================================================
const TOTAL_FRAMES = 80;
const FRAME_DIRECTORY = "/cream-tub";
const FRAME_PREFIX = "ezgif-frame-";
const FRAME_EXTENSION = ".jpg";
const BG_COLOR = "#000000";

// Programmatic frame path generator matching ezgif-frame-001.jpg ... ezgif-frame-040.jpg
function getFramePath(index: number): string {
  const paddedIndex = String(index + 1).padStart(3, "0");
  return `${FRAME_DIRECTORY}/${FRAME_PREFIX}${paddedIndex}${FRAME_EXTENSION}`;
}

interface ProductScrollCanvasProps {
  onLoaded?: () => void;
}

export const ProductScrollCanvas: React.FC<ProductScrollCanvasProps> = ({ onLoaded }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // References for zero-latency 60fps rendering without React re-renders
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const lastRenderedFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);
  const isReducedMotionRef = useRef<boolean>(false);

  // Minimal UI states
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);

  // Framer Motion scroll progress (0.0 to 1.0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --------------------------------------------------------------------------
  // EDITORIAL TEXT OVERLAY TIMELINES
  // --------------------------------------------------------------------------
  // Phase 1: 0% - 15% (Intro - Centered, Closed Product)
  const introOpacity = useTransform(scrollYProgress, [0, 0.08, 0.15, 0.19], [1, 1, 0, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.15], [0, -25]);

  // Phase 2: 22% - 42% (Opening - Left Aligned, Lid begins separating)
  const openingOpacity = useTransform(scrollYProgress, [0.20, 0.26, 0.38, 0.44], [0, 1, 1, 0]);
  const openingY = useTransform(scrollYProgress, [0.20, 0.26, 0.38, 0.44], [20, 0, 0, -20]);

  // Phase 3: 48% - 68% (Reveal - Right Aligned, Cream & Internal Seal Reveal)
  const revealOpacity = useTransform(scrollYProgress, [0.46, 0.52, 0.64, 0.70], [0, 1, 1, 0]);
  const revealY = useTransform(scrollYProgress, [0.46, 0.52, 0.64, 0.70], [20, 0, 0, -20]);

  // Phase 4: 72% - 84% (Full Reveal / Climax - Minimal Text, Maximum Separation)
  const explodedOpacity = useTransform(scrollYProgress, [0.72, 0.76, 0.82, 0.86], [0, 1, 1, 0]);

  // Phase 5: 88% - 100% (Final State & CTA - Centered)
  const ctaOpacity = useTransform(scrollYProgress, [0.86, 0.92, 1], [0, 1, 1]);
  const ctaY = useTransform(scrollYProgress, [0.86, 0.94], [25, 0]);

  // --------------------------------------------------------------------------
  // CANVAS RENDER PASS (devicePixelRatio + Contain Fit + Zero Seam)
  // --------------------------------------------------------------------------
  const renderCurrentFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length === 0) return;

    const frameIdx = currentFrameRef.current;
    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    // Scale canvas buffer to physical pixels for crystal retina clarity
    const targetWidth = Math.round(rect.width * dpr);
    const targetHeight = Math.round(rect.height * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    // High quality downscaling / smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Fill background with exact matching black
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Calculate strict "contain" aspect-ratio dimensions
    const sourceW = img.naturalWidth;
    const sourceH = img.naturalHeight;

    const hRatio = canvas.width / sourceW;
    const vRatio = canvas.height / sourceH;
    const ratio = Math.min(hRatio, vRatio);

    const drawW = sourceW * ratio;
    const drawH = sourceH * ratio;
    const drawX = (canvas.width - drawW) / 2;
    const drawY = (canvas.height - drawH) / 2;

    // Direct draw of source photographic frame (zero distortion, zero filter)
    ctx.drawImage(img, 0, 0, sourceW, sourceH, drawX, drawY, drawW, drawH);

    lastRenderedFrameRef.current = frameIdx;
  }, []);

  // --------------------------------------------------------------------------
  // PRELOAD THE 40 FRAMES ASYNCHRONOUSLY
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (typeof window !== "undefined") {
      isReducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    let isMounted = true;
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const loadAllFrames = async () => {
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = getFramePath(i);

        img.onload = () => {
          if (!isMounted) return;
          loadedImages[i] = img;
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));

          if (loadedCount >= TOTAL_FRAMES) {
            imagesRef.current = loadedImages;
            setIsReady(true);
            if (onLoaded) onLoaded();
          }
        };

        img.onerror = () => {
          if (!isMounted) return;
          loadedCount++;
          if (loadedCount >= TOTAL_FRAMES) {
            imagesRef.current = loadedImages;
            setIsReady(true);
            if (onLoaded) onLoaded();
          }
        };
      }
    };

    loadAllFrames();

    return () => {
      isMounted = false;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [onLoaded]);

  // --------------------------------------------------------------------------
  // MAP SCROLL PROGRESS DIRECTLY TO FRAME INDEX
  // --------------------------------------------------------------------------
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      if (!isReady || imagesRef.current.length === 0) return;

      if (isReducedMotionRef.current) {
        currentFrameRef.current = 0;
      } else {
        // Map 0.0 -> 1.0 to Frame 0 -> TOTAL_FRAMES - 1
        const clamped = Math.max(0, Math.min(1, progress));
        const targetFrame = Math.round(clamped * (imagesRef.current.length - 1));
        currentFrameRef.current = targetFrame;
      }

      // Render only when frame index changes (60fps optimal)
      if (currentFrameRef.current !== lastRenderedFrameRef.current) {
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = requestAnimationFrame(renderCurrentFrame);
      }
    });

    return () => {
      unsubscribe();
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [scrollYProgress, isReady, renderCurrentFrame]);

  // Handle browser window resize
  useEffect(() => {
    const handleResize = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(renderCurrentFrame);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderCurrentFrame]);

  // Draw initial frame once images are preloaded
  useEffect(() => {
    if (isReady) {
      renderCurrentFrame();
    }
  }, [isReady, renderCurrentFrame]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[400vh] bg-[#000000] select-none"
    >
      {/* --------------------------------------------------------------------
          MINIMAL EDITORIAL PRELOADER OVERLAY
      ---------------------------------------------------------------------- */}
      <AnimatePresence>
        {!isReady && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000] text-white"
          >
            <div className="flex flex-col items-center max-w-xs w-full px-6 text-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-light mb-3">
                SUWANI HAUTE BEAUTÉ
              </span>
              <h2 className="text-xl font-light tracking-tight text-white/90 mb-8">
                Preparing Presentation
              </h2>

              {/* Minimal hairline progress indicator */}
              <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-white/30 via-[#c9a86a] to-white transition-all duration-150"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>

              <div className="flex items-center justify-between w-full text-[10px] tracking-widest text-white/40 font-mono">
                <span>LOADING SEQUENCE</span>
                <span>{loadProgress}%</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --------------------------------------------------------------------
          STICKY FULL-VIEWPORT STAGE
      ---------------------------------------------------------------------- */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
        {/* The single HTML5 Canvas rendering the uploaded cream-tub sequence */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain pointer-events-none"
          style={{ backgroundColor: BG_COLOR }}
        />

        {/* ------------------------------------------------------------------
            SCROLL STORY: RESTRAINED LUXURY TEXT OVERLAYS
        -------------------------------------------------------------------- */}

        {/* PHASE 1: 0–15% — INTRO (Top Bar & Bottom Scroll, Center is 100% Unobstructed) */}
        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="absolute inset-x-6 top-20 md:top-24 flex flex-col items-center text-center max-w-3xl mx-auto pointer-events-none z-20"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-medium mb-2">
            Haute Cellular Restorative
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white/95 tracking-tight leading-[1.08]">
            Suwani Crème d&apos;Or
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-white/60 font-light max-w-md leading-relaxed">
            Housed in a 24K gilded architectural vessel.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: introOpacity }}
          className="absolute inset-x-0 bottom-8 md:bottom-12 flex flex-col items-center text-center pointer-events-none z-20"
        >
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a] animate-pulse" />
            <span>Scroll Down to Unseal Vessel</span>
          </div>
        </motion.div>

        {/* PHASE 2: 22–42% — OPENING (Lower-Left Marginal Rail, Tub is Unobstructed) */}
        <motion.div
          style={{ opacity: openingOpacity, y: openingY }}
          className="absolute left-6 sm:left-12 md:left-16 bottom-12 md:bottom-20 max-w-xs sm:max-w-sm pointer-events-none z-20"
        >
          <span className="font-mono text-[10px] tracking-widest text-[#c9a86a] block mb-1.5">
            01 / GILDED ELEVATION
          </span>
          <h2 className="text-xl sm:text-2xl font-light text-white/90 tracking-tight leading-snug">
            Precision Axial Decoupling
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/60 font-light leading-relaxed">
            The weighted brushed gold cap lifts smoothly along the vertical axis,
            releasing atmospheric seal pressure without disturbing the cream surface.
          </p>
          <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-white/40 tracking-wider font-mono">
            • Calibrated micro-pitch gold thread
          </div>
        </motion.div>

        {/* PHASE 3: 48–68% — REVEAL (Lower-Right Marginal Rail, Tub is Unobstructed) */}
        <motion.div
          style={{ opacity: revealOpacity, y: revealY }}
          className="absolute right-6 sm:right-12 md:right-16 bottom-12 md:bottom-20 max-w-xs sm:max-w-sm text-right pointer-events-none z-20"
        >
          <span className="font-mono text-[10px] tracking-widest text-[#c9a86a] block mb-1.5">
            02 / CORE EXPOSURE
          </span>
          <h2 className="text-xl sm:text-2xl font-light text-white/90 tracking-tight leading-snug">
            Whipped Peak &amp; Gilded Disc
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/60 font-light leading-relaxed">
            The internal hermetic gold disc levitates above the fresh whipped cream peak,
            protecting cellular botanicals until the moment of application.
          </p>
          <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-white/40 tracking-wider font-mono">
            • Cold-extracted cellular phyto-lipids
          </div>
        </motion.div>

        {/* PHASE 4: 72–84% — FULL REVEAL / CLIMAX (Subtle Bottom HUD) */}
        <motion.div
          style={{ opacity: explodedOpacity }}
          className="absolute inset-x-0 bottom-8 flex flex-col items-center text-center pointer-events-none z-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a86a] font-mono bg-black/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
            03 / Disassembled Architecture • 100% Exploded View
          </span>
        </motion.div>

        {/* PHASE 5: 88–100% — FINAL STATE & CTA (Top Header & Bottom Button, Center Unobstructed) */}
        <motion.div
          style={{ opacity: ctaOpacity, y: ctaY }}
          className="absolute inset-x-6 top-20 md:top-24 flex flex-col items-center text-center max-w-2xl mx-auto pointer-events-none z-20"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a86a] font-medium mb-1.5">
            The Climax of Form &amp; Formulation
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white/95 tracking-tight leading-tight">
            Suwani Crème d&apos;Or
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/60 font-light max-w-sm leading-relaxed">
            Housed in 24K gilded architectural porcelain.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: ctaOpacity }}
          className="absolute inset-x-6 bottom-8 md:bottom-12 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto z-20"
        >
          <a
            href="/products/suwani-creme-dor"
            className="px-8 py-3.5 rounded-full bg-white text-[#000000] hover:bg-[#c9a86a] hover:text-[#000000] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 shadow-xl active:scale-95"
          >
            Explore Product Details
          </a>
          <a
            href="#collection"
            className="px-6 py-3.5 rounded-full border border-white/20 hover:border-white/60 text-white/80 hover:text-white text-xs uppercase tracking-[0.2em] font-light transition-colors"
          >
            View Full Collection
          </a>
        </motion.div>
      </div>
    </div>
  );
};
