import { Profile } from '../molecules/user/Profile';
import { UserIconWithName } from '../molecules/user/UserIconWithName';
import { User } from '../../repository/User';
import { Card } from '../atom/card';

export const UserCard = (props: { user: User; dia?: number }) => {
  const { user } = props;
  // オプションのデフォルト値設定
  const dia = props.dia || 100;
  return (
    <Card>
      <UserIconWithName
        name={user.name}
        diagram={dia}
        imgPath={user.imgPath}
      />
      <Profile
        email={user.email}
        web={user.website}
        phone={user.phone}
      />
    </Card>
  );
};
