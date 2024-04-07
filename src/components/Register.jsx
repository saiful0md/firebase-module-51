import { Link } from "react-router-dom";

const Register = () => {
    const handleRegiser = e => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password);
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center w-2/3">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegiser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">REGISTER</button>
                        </div>
                        <p>Alrady have account? Please <Link to={'/login'} className="link link-info">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;