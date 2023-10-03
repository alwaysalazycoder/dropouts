import Dashboard from "./views/dashboard/Dashboard";
import DistrictWiseAnalysis from "./views/dashboard/DistrictWiseAnalysis";
import Profile from "./views/dashboard/Profile";
import Home from "./views/home/Home";
import SignOut from "./views/dashboard/SignOut";
import SchoolSignUp from "./views/auth/SchoolSignUp";
import SchoolSignIn from "./views/auth/SchoolSignIn";
import SignIn from "./views/auth/SignIn";

// icons
import {DiGoogleAnalytics} from "react-icons/di"
import {BsFillPersonFill} from "react-icons/bs"
import {BiSolidHome} from "react-icons/bi"
import {BiSolidUserPlus} from "react-icons/bi"
import {MdLogout} from "react-icons/md"

 const routes = [
    {
        name:"Home Page",
        layout:"home",
        path:"default",
        icon:"",
        component:<Home/>

    },
    {
        name:"Dashboard",
        layout:"dashboard",
        path:"main",
        icon:<BiSolidHome className="w-6 h-6"/>,
        component:<Dashboard/>

    },
    {
        name:"Analytics",
        layout:"dashboard",
        path:"analysis",
        icon:<DiGoogleAnalytics className="w-6 h-6"/>,
        component:<DistrictWiseAnalysis/>

    },
    {
        name:"Register User",
        layout:"dashboard",
        path:"register-user",
        icon:<BiSolidUserPlus className="w-6 h-6"/>,
        component:<DistrictWiseAnalysis/>

    },
    
    {
        name:"Profile",
        layout:"dashboard",
        path:"profile",
        icon:<BsFillPersonFill className="w-6 h-6"/>,
        component:<Profile/>
    },
    ,
    {
        name:"SignOut",
        layout:"dashboard",
        path:"signout",
        icon:<MdLogout className="w-6 h-6"/>,
        component:<SignOut/>
    },

    // 🔥 auth routes
    {
        name:"SignIN",
        layout:"auth",
        path:"sign-in",
        icon:"",
        component:<SignIn/>
    },
    
    {
        name:"School SignIn",
        layout:"auth",
        path:"school-sign-in",
        icon:"",
        component:<SchoolSignIn/>
    },
    {
        name:"School SignUp",
        layout:"auth",
        path:"school-register",
        icon:"",
        component:<SchoolSignUp/>
    },
    
]

export default routes;