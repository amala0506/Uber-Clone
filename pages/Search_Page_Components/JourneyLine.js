import tw from "tailwind-styled-components";
const JourneyLine = ()=>{
    return(<Wrapper>
        <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
        <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"></Line>
        <Square src="https://img.icons8.com/windows/50/000000/square-full.png"/>
    </Wrapper>)
}

const Wrapper = tw.div`
flex
flex-col
justify-center
items-center
`;
const Circle = tw.img`
h-3
w-3
`;
const Line = tw.img`

`;
const Square = tw.img`
h-3.5
w-3.5
`;
export default JourneyLine
