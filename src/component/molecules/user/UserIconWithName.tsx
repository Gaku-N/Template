import styled from 'styled-components';
import { ImageIcon } from '../../atom/ImageIcon';

export const UserIconWithName = (props: {
  name: string;
  diagram: number;
  imgPath: string;
}) => {
  const { name, diagram, imgPath } = props;
  return (
    <SDiv>
      <ImageIcon
        diagram={diagram}
        imgPath={imgPath}
      />
      <SP>{name}</SP>
    </SDiv>
  );
};

const SDiv = styled.div`
  text-align: center;
`;

const SP = styled.p`
  margin: 0;
  font-weight: bold;
`;
