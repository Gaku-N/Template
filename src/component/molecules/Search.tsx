import { styled } from 'styled-components';
import { Input } from '../atom/Input';
import { PrimaryButton } from '../atom/PrimaryButton';

export const Search = () => {
  return (
    <SSearch>
      <Input placeholder='検索ワードを入力'></Input>
      <PrimaryButton>検索</PrimaryButton>
    </SSearch>
  );
};

const SSearch = styled.div`
  display: flex;
  margin: 10px;
  gap: 10px;
  text-align: end;
`;
