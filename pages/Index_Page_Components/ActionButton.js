import tw from "tailwind-styled-components";
import Link from "next/link";
const ActionButton = ({ src, type }) => {
  return (
      <Link href="/search">
    <Wrapper>
      <ActionImg src={src} />
      <ActionDes>{type}</ActionDes>
    </Wrapper>
    </Link>
  );
};
const Wrapper = tw.div`
flex
flex-col
flex-1
w-36
bg-gray-200
rounded
p-1
m-1.5
items-center
hover:scale-105 transition text-xl
hover:cursor-pointer
`;
const ActionImg = tw.img`
object-contain
h-24
m-0
p-0
`;
const ActionDes = tw.div`
m-0
flex
font-medium
justify-center
`;
export default ActionButton;
