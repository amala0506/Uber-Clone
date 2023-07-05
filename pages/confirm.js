import tw from "tailwind-styled-components";
import VehicleList from "./Confirm_Page_Components/VehilcleList";
import Map from "./Index_Page_Components/Map";
import ConfirmArea from "./Confirm_Page_Components/ConfirmArea";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
const Confirm = () => {
    const { query } = useRouter();
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [pickupCords,setPickupCords] = useState();
    const [dropCords,setDropCords] = useState();
    const [choosenCar,setChoosenCar] = useState();
    const chosenCar = (car)=>{setChoosenCar(car)};
    const getLocation = (place, type) => {
        axios
            .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`, {
                params: {
                    proximity: "81.7075787,16.751228",
                    limit: 1,
                    access_token:
                        "pk.eyJ1IjoidGhlLWFyY2hpdGVjdCIsImEiOiJjbDM5dWQ2eDgwZGg0M2JuM3U1dHFpOG5oIn0.9ZaM8FaBogA6tXvH-MXajw",
                },
            })
            .then((res) => {
                if(type == "start"){
                    setStart(res.data.features[0].center)
                    setPickupCords(res.data.features[0].center);
                }
                    else{
                        setEnd(res.data.features[0].center)
                        setDropCords(res.data.features[0].center);
                    };
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        if (query.pickupAddress && query.droppingAddress) {
            if (query.pickupAddress == "myLocation") {
                setStart("myLocation");
            } else {
                getLocation(query.pickupAddress, "start");
            }
            if (query.droppingAddress == "myLocation") {
                setEnd("myLocation");
            } else {
                getLocation(query.droppingAddress, "end");
            }
        }
    }, [query.pickupAddress, query.droppingAddress]);
    const getMyLoc = (myLoc,type)=>{
        if(type=="start")
        {
            setPickupCords(myLoc);
        }
        else{
            setDropCords(myLoc);
        }
    };
    return (
        <Wrapper>
    
            <Link href="/search">
                <Button>
                    <Back src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </Button>

            </Link>
    
            <Map start={start} end={end} getMyLoc={getMyLoc}/>
            <VehicleList start={pickupCords} end={dropCords} chosenCar={chosenCar}/>
            <ConfirmArea selectedCar={choosenCar} />
        </Wrapper>
    );
};
export default Confirm;
const Back = tw.img`
scale-50
`;
const Button = tw.div`
absolute
z-10
bg-white
rounded-full
scale-75
m-2
hover:cursor-pointer
`
;const Wrapper = tw.div`
    flex
    flex-col
    h-screen
`;
