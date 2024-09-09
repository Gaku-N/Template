import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SimpleHeader = (props: {
  links: Array<{ path: string; title: string }>;
  height?: number;
  baseColor?: string;
}) => {
  const { links } = props;
  const height = props.height || 50;
  const baseColor = props.baseColor || 'lightBlue';
  const style = { height: height, backgroundColor: baseColor };
  // links.forEach((link) => {});
  return (
    <>
      <SHeader style={style}>
        {links.map((link) => {
          return <SLink to={link.path}>{link.title}</SLink>;
        })}
      </SHeader>
    </>
  );
};
const SHeader = styled.div`
  text-align: center;
`;

const SLink = styled(Link)`
  margin-left: 20px;
  line-height: 50px;
`;
