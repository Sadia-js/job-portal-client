import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className="m-8">
            <div className="divider">OR</div>
            <div className="flex justify-center">
                <button className="btn" onClick={handleGoogleSignIn}>Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;