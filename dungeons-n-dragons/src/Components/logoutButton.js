import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const LoginButton = ()=>{
     const {logout} = useAuth0();
     return <button onClick={()=>logout({returnTo:process.env.MONGODB_URI || `https://localhost:3000`})} >Log out</button>;
}

export default LoginButton;