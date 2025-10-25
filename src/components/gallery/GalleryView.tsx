"use client";

import { useState, useEffect } from "react";
import { Media, MasonryGrid } from "@once-ui-system/core";

interface GalleryImage {
  src: string;
  alt: string;
  orientation: "horizontal" | "vertical";
}

export default function GalleryView() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      try {
        const response = await fetch("/api/gallery");
        if (response.ok) {
          const data = await response.json();
          setImages(data);
        } else {
          console.error("Failed to load gallery images");
        }
      } catch (error) {
        console.error("Error loading gallery images:", error);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, []);

  // Show skeleton blocks while images are being fetched
  if (loading) {
    return (
      <MasonryGrid columns={2} s={{ columns: 1 }}>
        {Array.from({ length: 6 }, (_, index) => (
          <Media
            key={index}
            loading
            radius="m"
            aspectRatio={index % 2 === 0 ? "16 / 9" : "3 / 4"}
            src=""
            alt="Loading"
          />
        ))}
      </MasonryGrid>
    );
  }

  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {images.map((image, index) => (
        <Media
          enlarge
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, 50vw"
          key={image.src}
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </MasonryGrid>
  );
}
