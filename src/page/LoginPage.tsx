import { useState } from 'react';
import { Header } from '../components/common';
import styled from 'styled-components';
import {
  Login,
  Join,
  FindId,
  FindPassword,
  ResultFindId,
  ModifyPassword,
  SocialLogin,
} from '../components/login';

function LoginPage() {
  const [title, setTitle] = useState('로그인');
  const [pageState, setPageState] = useState(<SocialLogin />);

  return (
    <Wrap>
      <Header title={title} />
      {pageState}
    </Wrap>
  );
}
export default LoginPage;

const Wrap = styled.div`
  width: 100%;
`;
