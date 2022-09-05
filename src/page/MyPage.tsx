import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';

function MyPage() {
  const [title, setTitle] = useState('MY');
  return (
    <>
      <Header title={title} />
      <ProfileWrap>
        <ProfileImg />
        <div>
          <span>지철</span>님<br /> 환영합니다!
        </div>
      </ProfileWrap>
      <div>프로필 편집</div>
      <div>로그아웃</div>
      <div>즐겨찾기</div>
    </>
  );
}
const ProfileWrap = styled.div`
  margin: 10px 30px;
  text-align: center;
  font-family: 'SEBANG_Gothic_Regular';
  font-size: 1.5rem;
  line-height: 36px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  span {
    color: ${(props) => props.theme.mainMintColor};
  }
`;
const ProfileImg = styled.div`
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: gray;
`;
export default MyPage;
