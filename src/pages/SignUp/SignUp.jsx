import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser, userUpdateProfile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPubic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const profile = { displayName: data.name, photoURL: data.photo };
    createUser(data.email, data.password).then((result) => {
      setUser(result.user);
      const user = {
        email: data.email,
        name: data.name,
      };
      userUpdateProfile(profile).then(() => {
        axiosPubic.post("/users", user)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            toast.success('user successfully added')
            navigate("/");
          }
        })
      });
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo url"
                {...register("photo", { required: true })}
                className="input input-bordered"
              />
              {errors.photo && (
                <span className="text-red-600">Photo Url is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", { required: true, minLength: 6 })}
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <p>
              <small>
                Already have an account <Link to="/login">Login Now</Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
