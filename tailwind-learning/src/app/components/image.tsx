import Image from "next/image";

interface ImageComponentProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="eager"
    />
  );  
};

export default ImageComponent;
