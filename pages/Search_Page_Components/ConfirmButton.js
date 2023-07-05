import tw from "tailwind-styled-components";
import Link from "next/link";
import { useState } from "react";
const ConfirmButton = ({ pickupAddress, droppingAddress }) => {
  const handleRouting = (e) => {
    if (!(pickupAddress && droppingAddress)) {
      e.preventDefault();
      alert("Give both start and destination.");
    }
  };
  return (
    <Link
      href={{
        pathname: "/confirm",
        query: {
          pickupAddress: pickupAddress,
          droppingAddress: droppingAddress,
        },
      }}
    >
      <Wrapper>
        <Button onClick={handleRouting}>Confirm Locations</Button>
      </Wrapper>
    </Link>
  );
};
const Wrapper = tw.div`
flex
justify-center
px-3
mt-3
`;
const Button = tw.div`
    bg-black
    rounded
    text-white
    flex-1
    flex
    font-medium
    justify-center
    h-10
    items-center
    hover:text-black
    hover:shadow-inner
    hover:bg-white
    hover:cursor-pointer
    duration-300
    border-slate-900

`;

export default ConfirmButton;
