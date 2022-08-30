import styled from 'styled-components';
import Header from '../components/common/Header';
import {
  DayTikkeeulList,
  Teasan,
  TotalTikkeeul,
  FavoriteTag,
} from '../components/tikkeeul';

function DailyTikkeeul() {
  return (
    <Wrap>
      <Header title={'데일리 티끌'} />
      <Teasan />
      <TotalTikkeeul />
      <DayTikkeeulList />
      <FavoriteTag />
    </Wrap>
  );
}
export default DailyTikkeeul;

const Wrap = styled.div`
  width: 100%;
`;
