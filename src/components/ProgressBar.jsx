"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ProgressBar() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const initialLoad = useRef(true);

  useEffect(() => {
    // Skip progress bar on initial page load
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }

    let progressTimer;
    let completeTimer;
    const handleStart = () => {
      setLoading(true);
      setProgress(10);

      // Fast progress simulation
      progressTimer = setInterval(() => {
        setProgress((prev) => Math.min(90, prev + Math.random() * 15));
      }, 100);
    };

    const handleComplete = () => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 200);
      if (progressTimer) {
        clearInterval(progressTimer);
      }
    };

    // Start progress on pathname change (but not initial load)
    handleStart();

    // Complete progress quickly
    completeTimer = setTimeout(() => {
      handleComplete();
    }, 300);

    // Cleanup
    return () => {
      if (progressTimer) {
        clearInterval(progressTimer);
      }
      if (completeTimer) {
        clearTimeout(completeTimer);
      }
    };
  }, [pathname]);

  if (!loading) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-200">
      <div
        className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow: progress > 0 ? "0 0 8px rgba(234, 179, 8, 0.4)" : "none",
        }}
      />
    </div>
  );
}
