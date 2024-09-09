import styled from 'styled-components';

export const Input = (props: { placeholder: string }) => {
  const { placeholder } = props;
  return (
    <SInput
      type='text'
      placeholder={placeholder}
    />
  );
};

const SInput = styled.input`
  background-color: #eee;
  border: none;
  padding: 8px 12px;
  border-radius: 9999px;
`;
