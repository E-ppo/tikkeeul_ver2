import styled from 'styled-components';
import { NoticeHandBig } from '../styles/assets/svg';

function Notice() {
  return (
    <>
      <Wrap>
        <div>
          <NoticeHandBig />
          <span>
            티끌이 리뉴얼 중이에요
            <br />
            <span>좋은 모습으로 "금방" 찾아뵐게요 :D</span>
          </span>
        </div>
      </Wrap>
    </>
  );
}
export default Notice;

const Wrap = styled.div`
  max-width: 1920px;
  min-height: 1080px;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #ddfff5;

  div {
    margin-top: 5%;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      text-align: center;
      color: ${(props) => props.theme.mainMintColor};
      font-size: 2rem;
      margin-top: 10%;
      font-family: 'SEBANG_Gothic_Regular';
      span {
        font-size: 1rem;
      }
    }
  }
`;
