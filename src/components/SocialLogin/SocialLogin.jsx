import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();

  const handleSignInWithGoogle = () => {
    signInWithGoogle().then((result) => {
    //   console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };

      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        toast.success("Login Successfull");
        navigate(from, { replace: true });
      });
    });
  };
  return (
    <div
      onClick={handleSignInWithGoogle}
      className="flex cursor-pointer items-center justify-center gap-2 border p-2 rounded-lg"
    >
      <FcGoogle />
      <span className="font-semibold">Sign with google</span>
    </div>
  );
};

export default SocialLogin;
