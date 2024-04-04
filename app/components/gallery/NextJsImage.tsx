import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div
      className="overflow-hidden"
      style={{ ...wrapperStyle, position: "relative" }}
    >
      <Image
        className="
          hover:opacity-70
          transition
          hover:scale-110
          ease-in
          duration-300
        "
        fill
        src={photo.src}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, onClick }}
      />
    </div>
  );
}
