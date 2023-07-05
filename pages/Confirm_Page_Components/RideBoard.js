import tw from "tailwind-styled-components";
import { useEffect, useState } from "react";
import RidePanel from "./RidePanel";
import { carList } from "../../public/carList";
import uuid from 'react-uuid';
const RideBoard = ({time,chooseCar}) => {
    const [cost,setCost] = useState();
    const getCar = (car)=>{chooseCar(car)};
    useEffect(()=>{
        if(time!==undefined)
        {
            setCost((time*33)/3600);
        }
        
    },[time])

  return (
    <Wrapper>
      {carList.map((car) => {
        return (
          <RidePanel
      
            key={uuid()}
            img={car.imgUrl}
            title={car.service}
            cost={(cost==undefined)?`Loading...`:`$${(cost * car.multiplier).toFixed(2)}`}
            status="5 min away"
            chooseCar ={getCar}
          />
        );
      })}
    </Wrapper>
  );
};
const Wrapper = tw.div`
flex
flex-col
h-80
overflow-y-scroll
`;
export default RideBoard;
