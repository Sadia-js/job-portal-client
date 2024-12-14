import Lottie from "lottie-react";
import lottieRegisterAnimation from "../assets/lottie/register.json"
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import SocialLogin from "../Shared/SocialLogin";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegisterForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-2/6">
                    <Lottie animationData={lottieRegisterAnimation} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-4xl ml-8 mt-4 font-bold">Register now!</h1>
                    <form className="card-body" onSubmit={handleRegisterForm}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;