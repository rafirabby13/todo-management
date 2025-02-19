import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const Login = () => {
  const {loginWithGoogle} = useAuth()
  const navigate = useNavigate()
  const handleLogin=()=>{
    loginWithGoogle()
    .then((res) => {
      console.log(res.user)
      navigate('/')
    })
    .catch(err=>{
      console.log(err.message)
    })
  }
  return (
    <div className="flex items-center gap-4 justify-center">
      <button className="btn" onClick={handleLogin}>

        <FaGoogle /> Login With Google
      </button>
    </div>
  );
};

export default Login;
