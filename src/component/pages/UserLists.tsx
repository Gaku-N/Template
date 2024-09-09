import { User } from '../../repository/User';
import { Search } from '../molecules/Search';
import { UserCard } from '../organisms/UserCard';
import { SimpleHeader } from '../organisms/SimpleHeader';
import styled from 'styled-components';
import { PrimaryColor } from './Settings';

export const UserLists = () => {
  const users: User[] = [];
  for (let i = 0; i < 10; i++) {
    const user = new User(
      `aabb${i}`,
      'aabb@gmail.com',
      'aaa',
      '090-1111-2222',
      'https://aabb.com',
      'https://images.unsplash.com/photo-1468233748640-b31327627610?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    );
    users.push(user);
  }
  console.log(users);

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
      <Search></Search>
      <SLists>
        {users.map((user) => {
          return <UserCard user={user}></UserCard>;
        })}
      </SLists>
    </>
  );
};

const SLists = styled.div`
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 10px;
`;
