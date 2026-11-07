export const DEVICE_SIZES = [640, 960, 1280, 1600, 2048];
export const IMAGE_SIZES = [256, 384];
export const IMAGE_WIDTHS = [...IMAGE_SIZES, ...DEVICE_SIZES];

const RASTER = /\.(webp|png|jpe?g)$/i;

export const variantPath = (src: string, width: number) => src.replace(RASTER, `.w${width}.$1`);

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  return src.startsWith("/") && RASTER.test(src) ? variantPath(src, width) : src;
}
