import Image, { type ImageProps } from "next/image";
import { blurDataURL } from "@/lib/blur";

export function Media(props: Omit<ImageProps, "placeholder" | "blurDataURL">) {
  return <Image placeholder="blur" blurDataURL={blurDataURL} {...props} />;
}
