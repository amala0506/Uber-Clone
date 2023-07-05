import tw from "tailwind-styled-components";
const AddButton = ()=>{
    return (
        <Wrapper>
        <Add src="https://img.icons8.com/ios/50/000000/plus-math.png"></Add>
    </Wrapper>
    );
};

const Wrapper = tw.div`
bg-gray-200
rounded-full
ml-2
p-0.5
flex
items-center
justify-center
`;
const Add= tw.img`
h-8
saturate-0

`;
export default AddButton;