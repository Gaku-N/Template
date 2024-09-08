import { useState } from "react";
import styled from "styled-components";

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

export const Image = (props: ImageProps) => {
    const {src, size, objectFit, alt} = props;
    const [isOpen, setIsOpen] = useState(false);
    const mordalOpen = () => {setIsOpen(true)};
    const mordalClose = () => {setIsOpen(false)};
    return (
        <>
        <img src={src} width={size.x} height={size.y} onClick={mordalOpen} alt={alt} style={{ objectFit: objectFit }} />
        {isOpen && (
            <ImageModalDiv onClick={mordalClose}>
                <ImageContent>
                    <SImg src={src} alt={alt} />
                </ImageContent>
            </ImageModalDiv>
        )}
        </>
    )
}

const ImageModalDiv = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
z-index: 1;
`;

const ImageContent = styled.div `
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SImg = styled.img `
    max-width: 100vw;
    max-height: 100vh;
`
