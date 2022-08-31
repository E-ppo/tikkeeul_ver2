import styled from 'styled-components';
import { TikkeeulData } from '../data';
import { Header, TotalTikkeeulPrice } from '../components/common';
import { DayTikkeeulList, Teasan } from '../components/tikkeeul';
import { MainAddButton } from '../styles/assets/svg/common';

function DailyTikkeeul() {
  const addMenu = () => {};
  return (
    <Wrap>
      <Header title={'데일리 티끌'} />
      <Teasan />
      <TotalTikkeeulPrice
        totalPrice={TikkeeulData.totalPrice} //꼭 있어야하는 필수 프로퍼티
        fontSize={'1.2'} // 없어도 되는거 (없으면 1rem)
        divHight={'50'} // 없어도 되는거(px)
      />
      <DayTikkeeulList />
      <ButtonFixed
        onClick={() => {
          addMenu();
        }}>
        <MainAddButton />
      </ButtonFixed>
    </Wrap>
  );
}
export default DailyTikkeeul;

const Wrap = styled.div`
  width: 100%;
`;

const ButtonFixed = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
`;
