import React,{useEffect,useState} from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Info from "./pages/Info";

export default function App(){
 const [page,setPage]=useState("landing");
 const [theme,setTheme]=useState(()=>localStorage.getItem("yatra-theme")||"light");
 const [logged,setLogged]=useState(()=>localStorage.getItem("yatra-login")==="true");
 const [selected,setSelected]=useState(null);
 useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem("yatra-theme",theme)},[theme]);
 const nav=(p)=>{setPage(p);window.scrollTo({top:0,behavior:"smooth"})};
 const requireLogin=(p)=>{if(!logged)nav("login");else nav(p)};
 const login=()=>{setLogged(true);localStorage.setItem("yatra-login","true");nav("dashboard")};
 const logout=()=>{setLogged(false);localStorage.removeItem("yatra-login");nav("landing")};
 const common={theme,setTheme,nav,logged,logout,selected,setSelected};
 if(page==="login")return <Login {...common} onLogin={login}/>;
 if(page==="explore")return <Explore {...common}/>;
 if(page==="booking")return <Booking {...common}/>;
 if(page==="dashboard")return <Dashboard {...common}/>;
 if(page==="profile")return <Profile {...common}/>;
 if(page==="settings")return <Settings {...common}/>;
 if(["contact","careers","help","cancellation","safety"].includes(page))return <Info {...common} topic={page}/>;
 return <Landing {...common}/>;
}