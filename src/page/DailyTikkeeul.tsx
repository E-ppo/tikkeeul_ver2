import styled from 'styled-components';
import { Header, TotalTikkeeulPrice } from '../components/common';
import { DayTikkeeulList, Teasan } from '../components/tikkeeul';

function DailyTikkeeul() {
  return (
    <Wrap>
      <Header title={'데일리 티끌'} />
      <Teasan />
      <TotalTikkeeulPrice fontSize={'1.2'} />
      <DayTikkeeulList />
    </Wrap>
  );
}
export default DailyTikkeeul;

const Wrap = styled.div`
  width: 100%;
`;
