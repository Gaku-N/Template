import { SimpleFooter } from '../organisms/SimpleFooter';
import { SimpleHeader } from '../organisms/SimpleHeader';
import { PrimaryColor } from './Settings';

export const Home = () => {
  const links = [
    { path: '/', title: 'ホーム' },
    { path: '/UserLists', title: 'ユーザー一覧' },
  ];
  return (
    <>
      <SimpleHeader
        links={links}
        height={150}
        baseColor={PrimaryColor}
      ></SimpleHeader>
      <p>ホーム画面</p>
      <SimpleFooter copyWrite={'Copywrite 2024'} baseColor={PrimaryColor}></SimpleFooter>
    </>
  );
};
