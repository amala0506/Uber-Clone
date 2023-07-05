import tw from "tailwind-styled-components";
const ConfirmArea = ({selectedCar})=>{
    return(
        <Wrapper>
            <Button>{(selectedCar==undefined)?"Choose a Ride":`Confirm ${selectedCar}`}</Button>
        </Wrapper>
    )
};
const Wrapper = tw.div`
flex
flex-col
justify-center
items-center
p-3
border

`;
const Button = tw.div`
flex
bg-black
justify-center
items-center
text-white
p-4
w-80
rounded
hover:cursor-pointer
`;
export default ConfirmArea;