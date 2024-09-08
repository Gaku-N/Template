type ImageProps = {
    src: string;
    size: Size;
    objectFit: FitName;
    alt: string;
}
type Size = {
    x: number;
    y: number;
}
type FitName = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

export const ImageFlame = (props: ImageProps) => {
    const {src, size, objectFit, alt} = props;
    return (
        <img src={src} width={size.x} height={size.y}  alt={alt} object-fit={objectFit} />
    )
}