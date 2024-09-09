import styled from 'styled-components';

export const Profile = (props: {
  email: string;
  web: string;
  phone: string;
}) => {
  const { email, web, phone } = props;
  return (
    <SProfile>
      <dt>email</dt>
      <dd>{email}</dd>
      <dt>web</dt>
      <dd>{web}</dd>
      <dt>phone</dt>
      <dd>{phone}</dd>
    </SProfile>
  );
};

const SProfile = styled.dl`
  dt {
    float: left;
  }
  dd {
    margin-left: 60px;
  }
`;
