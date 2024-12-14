import { useContext } from "react";
import AuthContext from "../Context/AuthContext"
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <span className="loading loading-ring loading-lg text-blue-800"></span>;
    }
    if(user){
        return children;
    }
    return <Navigate to="/signIn" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;