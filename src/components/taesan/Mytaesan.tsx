import styled from 'styled-components';
import { DeleteBtn } from '../../styles/assets/svg';
import { TotalTikkeeul } from '../tikkeeul';

function MyTaesan() {
  return (
    <>
      <TotalTikkeeul />
      <Wrap>
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
          <DeleteButton />
        </TaesanList>
        <Divider />
      </Wrap>
    </>
  );
}

const Wrap = styled.div``;

const Divider = styled.div`
  border-top: 1px solid #dedede;
  margin: 0px;
`;

const DeleteButton = styled(DeleteBtn)`
  margin-left: auto;
`;

// const MyTikkeul = styled.div`
//   text-align: right;
//   margin: 12px 30px;
//   span {
//     color: ${(props) => props.theme.pointBlueColor};
//   }
// `;

const TaesanImg = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: aliceblue;
`;

const TSPrice = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
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

const TaesanList = styled.div`
  padding: 20px 30px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;

  &:first-child {
    background-color: ${(props) => props.theme.mainMintColor};
    ${TSTitle} {
      font-weight: 700;
      font-size: 20px;
      span {
        font-size: 50px;
      }
    }
  }
`;

const MainTaesan = styled(TaesanList)``;

export default MyTaesan;
