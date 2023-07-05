import tw from "tailwind-styled-components";
import InputBox from "./InputBox";
import AddButton from "./AddButton";
import JourneyLine from "./JourneyLine";
const TravelInfoPane = ({ handlePickupChange, handleDroppingChange }) => {
  return (
    <Wrapper>
      <JourneyLine />
      <StartDestContainer>
        <InputBox
          name="start"
          placeholder="Enter pickup location"
          handleChange={handlePickupChange}
        />
        <InputBox
          name="destination"
          placeholder="Where to?"
          handleChange={handleDroppingChange}
        />
      </StartDestContainer>
      <AddButton />
    </Wrapper>
  );
};
const Wrapper = tw.div`
flex
bg-white
justify-between
items-center
h-26
pt-0
mt-0
pl-2
pr-4
`;
const Line = tw.img`

`;
const StartDestContainer = tw.div`
flex
flex-col
flex-1
justify-between
`;
const Add = tw.img`
h-10
`;

export default TravelInfoPane;
