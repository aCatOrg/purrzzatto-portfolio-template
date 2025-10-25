import fs from "node:fs";
import path from "node:path";

export interface GalleryImage {
  src: string;
  alt: string;
  orientation: "horizontal" | "vertical";
}

/**
 * Derives image orientation based on file name
 * @param filename - The name of the image file. Add hints like 'horizontal' or 'vertical' in the filename.
 * wide, tall, landscape, portrait can also be used as hints.
 * @returns "horizontal" | "vertical"
 */
function detectOrientation(filename: string): "horizontal" | "vertical" {
  const lower = filename.toLowerCase();
  if (lower.includes("horizontal") || lower.includes("wide") || lower.includes("landscape")) {
    return "horizontal";
  }
  if (lower.includes("vertical") || lower.includes("tall") || lower.includes("portrait")) {
    return "vertical";
  }

  // Default to vertical if no hints found
  return "vertical";
}

export function loadGalleryImages(): GalleryImage[] {
  const galleryPath = path.join(process.cwd(), "public", "images", "gallery");

  try {
    const files = fs
      .readdirSync(galleryPath)
      .filter((file: string) => /\.(jpg|jpeg|png|gif|webp|mp4)$/i.test(file))
      .map((file: string) => `/images/gallery/${file}`);

    return files.map((src: string) => ({
      src,
      alt: "Gallery image",
      orientation: detectOrientation(path.basename(src)),
    }));
  } catch (error) {
    console.error("Error loading gallery images:", error);
    return [];
  }
}
