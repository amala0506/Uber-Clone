import tw from "tailwind-styled-components";
import RideBoard from "./RideBoard";
import axios from "axios";
import { useState ,useEffect} from "react";
const VehicleList = ({start,end,chosenCar})=>{
    const [rideDuration, setRideDuration] = useState();
    const transform = (ele)=>{
        if(ele.long!==undefined)
        {
            return [ele.long,ele.lat];
        }
        else{
            return ele;
        }
    };
    useEffect(()=>{
        if((start&&end)){
            start= transform(start);
            end = transform(end);
        
        axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}`,{params:{
           access_token:"pk.eyJ1IjoidGhlLWFyY2hpdGVjdCIsImEiOiJjbDM5dWQ2eDgwZGg0M2JuM3U1dHFpOG5oIn0.9ZaM8FaBogA6tXvH-MXajw"
        }}).then((res)=>{setRideDuration(res.data.routes[0].duration)}).catch((err)=>{console.log(err)})}
    },[start,end]);
    const getCar = (car)=>{chosenCar(car)};
    return(
        <Wrapper>
            <Head>Choose a ride or swipe up for more</Head>
            <RideBoard time={rideDuration} chooseCar={getCar}/>
        </Wrapper>
    );
};
const Wrapper = tw.div`
flex-1
`;
const Head = tw.div`
flex
justify-center
p-2
bg-gray-50
text-sm
text-slate-500
border
`;
export default VehicleList;