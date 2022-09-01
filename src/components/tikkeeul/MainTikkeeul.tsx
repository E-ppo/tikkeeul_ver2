import { useState } from 'react';
import styled from 'styled-components';
import { TotalTikkeeulPrice } from '../common';
import { DayTikkeeulList, Teasan } from '../tikkeeul';
import { TikkeeulData } from '../../data';

const MainTikkeeul = () => {
  return (
    <div>
      <Teasan />
      <TotalTikkeeulPrice
        totalPrice={TikkeeulData.totalPrice} //꼭 있어야하는 필수 프로퍼티
        fontSize={'1.2'} // 없어도 되는거 (없으면 1rem)
        divHight={'50'} // 없어도 되는거(px)
      />
      <DayTikkeeulList />
    </div>
  );
};
export default MainTikkeeul;
