import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
const PriveteRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>;
};
PriveteRoute.propTypes ={
    children: PropTypes.node
}
export default PriveteRoute;