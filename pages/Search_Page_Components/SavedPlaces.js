import tw from "tailwind-styled-components";
const SavedPlaces = ()=>{
    return(
        <Wrapper>
        <ImgContainer>
        <Star src=" https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
        </ImgContainer>
            Saved Places
        </Wrapper>
    );
}
const Wrapper = tw.div`
flex
bg-white
items-center
font-medium
p-2
mt-1.5
`;
const Star = tw.img`
h-5
`;
const ImgContainer = tw.div`
rounded-full
h-8 w-8
p-1
flex
justify-center
items-center
bg-gray-400
mr-1
`;
export default SavedPlaces;