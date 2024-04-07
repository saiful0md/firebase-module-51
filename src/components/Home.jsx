import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext)
    return (
        <div>
            {
                authInfo.name
            }
        </div>
    );
};

export default Home;