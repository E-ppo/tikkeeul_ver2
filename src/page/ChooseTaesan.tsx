import styled from 'styled-components';
import Header from '../components/common/Header';

function ChooseTaesan() {
  return (
    <>
      <Header title={'태산 정하기'} />
      <MyTikkeul>
        내가 모은 티끌 <span>10,000원</span>
      </MyTikkeul>
      <MainTaesan>
        <TaesanImg />
        <TSTitle>
          어쩌구 저쩌구 <span>50%</span>
          <TSPrice>1,234,567원</TSPrice>
        </TSTitle>
      </MainTaesan>
      <TaesanList>
        <TaesanImg />
        <TSTitle>
          어쩌구 저쩌구 <span>50%</span>
        </TSTitle>
      </TaesanList>
      <hr />
      <TaesanList>
        <TaesanImg />
        <TSTitle>
          어쩌구 저쩌구 <span>50%</span>
        </TSTitle>
      </TaesanList>
      <TaesanList>
        <TaesanImg />
        <TSTitle>
          어쩌구 저쩌구 <span>50%</span>
        </TSTitle>
      </TaesanList>
      <TaesanList>
        <TaesanImg />
        <TSTitle>
          어쩌구 저쩌구 <span>50%</span>
        </TSTitle>
      </TaesanList>
      <TaesanList>
        <TaesanImg />
        <TSTitle>
          어쩌구 저쩌구 <span>50%</span>
        </TSTitle>
      </TaesanList>
      <TaesanList>
        <TaesanImg />
        <TSTitle>
          어쩌구 저쩌구 <span>50%</span>
        </TSTitle>
      </TaesanList>
    </>
  );
}

const MyTikkeul = styled.div`
  text-align: right;
  margin: 12px 30px;
  span {
    color: ${(props) => props.theme.pointBlueColor};
  }
`;

const TaesanImg = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: aliceblue;
`;

const TSTitle = styled.div`
  display: flex;
  flex-direction: column;

  align-self: center;
  font-weight: 400;
  font-size: 20px;
  span {
    margin-top: 10px;
  }
`;

const TSPrice = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
`;

const TaesanList = styled.div`
  padding: 12px 30px;
  position: relative;
  display: flex;
  gap: 14px;
`;

const MainTaesan = styled(TaesanList)`
  padding: 20px 30px;
  background-color: ${(props) => props.theme.mainMintColor};

  ${TSTitle} {
    font-weight: 700;
    font-size: 20px;
    span {
      font-size: 50px;
    }
  }
`;

export default ChooseTaesan;
