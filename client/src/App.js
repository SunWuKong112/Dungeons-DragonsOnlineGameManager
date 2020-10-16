import React, {useEffect, useRef, useState} from "react";
import RenderPlayer from "./pages/playerContainer";
import RenderDungeon from "./pages/DmGamePage";
import {useAuth0} from "@auth0/auth0-react";
// import LogIn from "./pages/logIn";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Game from "./pages/game";
import LoginButton from "./Components/loginButton";
import LogoutButton from "./Components/logoutButton";
import Header from "./Components/Header";

function App() {
  const {user, isAuthenticated} = useAuth0();
  const [username, logIn] = useState("");
  const [isDM, changeDM] = useState(true);
  const logo = "https://www.underconsideration.com/brandnew/archives/dungeons_and_dragons_40_ampersand_detail_black.jpg";
  useEffect(() => {
    if(user){
      
      logIn(user.name);
    } else {
      logIn("");
    }
  }, [isAuthenticated])


  return (
    <div className="App table">
      <Header className="table">
        <img className="top" src={logo}  alt="logo" height={75}/>
        {isAuthenticated ? <LogoutButton className="scroll" />: <LoginButton className="scroll"/>}
      </Header>
      {isAuthenticated ? <Game isDM={isDM} user={user} />: <p></p>}
    </div>
  );
}

export default App;