import Image from "next/image";
import { join } from "node:path";
import sharp from "sharp";

export async function Figure({ src, alt }: { src: string; alt: string }) {
  const { width = 1200, height = 675 } = await sharp(join(process.cwd(), "public", src)).metadata();
  return (
    <figure>
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 768px) 720px, 100vw" loading="lazy" />
    </figure>
  );
}
