import { useState } from 'react';
import { Header } from '../components/common';

function LoginPage() {
  const [title, setTitle] = useState('로그인');
  return (
    <div>
      <Header title={title} />
      Login
    </div>
  );
}
export default LoginPage;
