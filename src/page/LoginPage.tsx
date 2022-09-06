import { useState } from 'react';
import { Header } from '../components/common';
import styled from 'styled-components';
import { Login } from '../components/login';

function LoginPage() {
  const [title, setTitle] = useState('로그인');
  const [pageState, setPageState] = useState(<Login />);

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
