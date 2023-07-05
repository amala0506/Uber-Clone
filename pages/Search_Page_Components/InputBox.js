import tw from "tailwind-styled-components";
const InputBox= ({placeholder,name,handleChange})=>{
    return <TextInput placeholder={placeholder} name={name} onChange={handleChange} />;
}
const TextInput = tw.input`
bg-gray-200
flex-1
my-1.5
p-2
rounded
`;
export default InputBox;