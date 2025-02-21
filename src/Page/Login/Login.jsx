import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import axios from "axios";
// import moment from "moment";

const Login = () => {
  const {loginWithGoogle} = useAuth()
  const navigate = useNavigate()
  // console.log(moment().format('llll'))
  const handleLogin=()=>{
    loginWithGoogle()
    .then((res) => {
      const userData = {
        name: res.user.displayName,
        email: res.user.email,
        
      }
      axios.post('http://localhost:5000/users', userData)
      .then(res=>{
        console.log(res.data)
      })
      console.log(userData)
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
