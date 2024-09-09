import styled from 'styled-components';

export const ImageIcon = (props: { diagram: number; imgPath: string }) => {
  const { diagram, imgPath } = props;
  return (
    <SImg
      src={imgPath}
      width={diagram}
      height={diagram}
    />
  );
};

const SImg = styled.img`
  object-fit: cover;
  border-radius: 50%;
`;
