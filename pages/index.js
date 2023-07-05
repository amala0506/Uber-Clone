import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./Index_Page_Components/Map";
import Header from "./Index_Page_Components/Header";
import ActionButton from "./Index_Page_Components/ActionButton";
import WhereToButton from "./Index_Page_Components/WhereToButton";

const Home = () => {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header />
        
        <ActionButtons>
        
            <ActionButton
              src="https://i.ibb.co/YDYMKny/uberxl.png"
              type="Ride"
            />

          <ActionButton
            src="https://i.ibb.co/YDYMKny/uberxl.png"
            type="Wheels"
          />
          <ActionButton
            src="https://i.ibb.co/YDYMKny/uberxl.png"
            type="Reserve"
          />
        </ActionButtons>
        
        <WhereToButton />
      </ActionItems>
      
    </Wrapper>
  );
};

const Wrapper = tw.div`
        flex 
        flex-col  
        h-screen
      `;
const ActionItems = tw.div`
    flex-1
    p-5
    
  `;
const ActionButtons = tw.div`
flex
justify-between
`;

export default Home;
