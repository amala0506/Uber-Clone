import tw from "tailwind-styled-components";
import {auth} from '../../firebase'
import { onAuthStateChanged ,signOut} from "firebase/auth";
import {useRouter}  from 'next/router';
import { useEffect, useState } from "react";
const Header = () => {
  const [user,setUser] = useState(null);
  const router = useRouter();
  useEffect(()=>{
    return onAuthStateChanged(auth, (user)=>{
      if(user){
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      }else{
        setUser(null)
        router.push('/login');
      }
    })
  },[]);
  const namePicker  = ()=>{
    let max = 0;
    let nameTaken = "";
    (user.name).split(' ').forEach((part)=>{
      if(part.length>max)
      {
        max= part.length;
        nameTaken = part;
      }
    })
    return nameTaken;
  }
  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
      <Profile>
        <Name>{user&& namePicker()}</Name>
        <UsrImg src={user&&user.photoUrl} onClick = {()=>{signOut(auth)}}/>
      </Profile>
    </Wrapper>
  );
};
const Wrapper = tw.div`
  flex
  justify-between
  items-center
`;
const UberLogo = tw.img`
  h-28
`;
const Profile = tw.div`
flex
items-center
`;
const Name = tw.div`
font-medium
w-20
mr-1
`;

const UsrImg = tw.img`
h-12
rounded-full
border
border-gray-200
p-px
hover:cursor-pointer
`;
export default Header;
