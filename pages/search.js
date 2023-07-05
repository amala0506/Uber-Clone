import React, { useState } from "react";
import tw from "tailwind-styled-components";
import BackButton from "./Search_Page_Components/BackButton";
import ConfirmButton from "./Search_Page_Components/ConfirmButton";
import SavedPlaces from "./Search_Page_Components/SavedPlaces";
import TravelInfoPane from "./Search_Page_Components/TravelInfoPane";
const Search = () => {
  const [pickupAddress, setPickupAddress] = useState("");
  const [droppingAddress, setDroppingAddress] = useState("");
  const handleDroppingChange = (e) => {
    setDroppingAddress(e.target.value);
  };
  const handlePickupChange = (e) => {
    setPickupAddress(e.target.value);
  };
  return (
    <Wrapper>
      <BackButton />
      <TravelInfoPane
        handleDroppingChange={handleDroppingChange}
        handlePickupChange={handlePickupChange}
      />
      <SavedPlaces />
      <ConfirmButton
        pickupAddress={pickupAddress}
        droppingAddress={droppingAddress}
      />
    </Wrapper>
  );
};
const Wrapper = tw.div`
    bg-gray-200
    h-screen
`;
export default Search;
