import { NextResponse } from "next/server";
import { loadGalleryImages } from "@/utils/galleryLoader";

export async function GET() {
  try {
    const images = loadGalleryImages();
    return NextResponse.json(images);
  } catch (error) {
    console.error("Error loading gallery images:", error);
    return NextResponse.json({ error: "Failed to load gallery images" }, { status: 500 });
  }
}
