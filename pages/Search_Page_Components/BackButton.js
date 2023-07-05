import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
const BackButton = ()=>{
    return(
        <Wrapper>
        <Link href="/">
            <Button src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
            </Link>
        </Wrapper>
    );
};
const Wrapper = tw.div`
bg-white px-3
md-0
`;
const Button = tw.img`
hover:cursor-pointer
h-12
`;
export default BackButton;