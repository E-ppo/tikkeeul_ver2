import { useState } from 'react';
import { Header } from '../components/common';

function MyPage() {
  const [title, setTitle] = useState('MY');
  return (
    <div>
      <Header title={title} />
      MyPage
    </div>
  );
}
export default MyPage;
