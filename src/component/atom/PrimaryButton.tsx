import styled from 'styled-components';

export const PrimaryButton = (props: { children: any }) => {
  const { children } = props;
  return (
    <div>
      <SButton>{children}</SButton>
    </div>
  );
};

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 4px 16px;
  border-radius: 9999px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
