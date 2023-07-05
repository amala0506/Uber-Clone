import tw from "tailwind-styled-components";
import { useEffect } from "react";
import {useRouter} from 'next/router';
import {signInWithPopup,onAuthStateChanged} from 'firebase/auth';
import { auth,provider } from "../firebase";
const Login = ()=>{
    const router = useRouter();
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                router.push('/');
            }
        })
    },[]);
    return(
        <Wrapper>
            <UberLogo>
                <Logo src="https://i.ibb.co/n6LWQM4/Post.png"/>
            </UberLogo>
            <LoginPrompt>
                Log in to access your account
            </LoginPrompt>
            <LoginImg>
                <Img src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
            </LoginImg>
            <SignInWithGoogle onClick={()=>{signInWithPopup(auth,provider)}}>
                <SignIn>Sign in with Google</SignIn>
            </SignInWithGoogle>
        </Wrapper>
    );

}
const Wrapper = tw.div`
flex
flex-col
bg-gray-200
p-4
h-screen
`;
const UberLogo = tw.div`
p-2
mb-4
`;
const Logo = tw.img`
h-9
`;
const LoginPrompt = tw.div`
text-5xl
text-gray-500
`;
const LoginImg = tw.div`
flex
justify-center
items-center
mb-4
`;
const Img = tw.img`
object-contain
self-start
h-80
w-auto
`;
const SignInWithGoogle = tw.div`
flex
justify-center
bg-black
text-white
items-center
h-11
w-auto
rounded
mt-6
hover:cursor-pointer
`;
const SignIn = tw.div``;
export default Login;