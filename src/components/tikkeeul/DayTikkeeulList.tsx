import styled from "styled-components";
import {LeftArrowBlack, RightArrowBlack} from "../../styles/assets/svg"


const DayTikkeeulList = () =>{
  const today = new Date().toJSON().split('T',1);

  return (
    <Wrap>

      <LeftArrowBlack/>
      <span>{today}</span>
      <RightArrowBlack/>
    
    </Wrap>)
}
export default DayTikkeeulList;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 30px;
  justify-content: space-between;

  span{

    font-size: 1rem;
    font-weight: 500;
        
  }
`;

