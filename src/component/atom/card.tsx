import styled from 'styled-components';

export const Card = (props: { children: any }) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};
const SCard = styled.div`
  padding: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px #888;
`;
