import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddTask = () => {
  const {user} = useAuth()
 const navigate = useNavigate()
  const { register, handleSubmit,reset  } = useForm();
  const onSubmit = (data) => {
    // console.log(data)
    const taskData ={...data, email: user?.email}
    axios.post('http://localhost:5000/tasks', taskData)
    .then(res=>{
      console.log('res.data ',res.data)
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        reset()
        navigate('/')
      }
    })
  };
  return (
    <div>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task Title</span>
                </label>
                <input
                  {...register("title", { required: true, maxLength: 50 })}
                  type="text"
                  placeholder="Task Title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task Description</span>
                </label>
                <input
                  {...register("description", {
                    required: false,
                    maxLength: 200,
                  })}
                  type="text"
                  placeholder="Task Description"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                 
                  type="text"
                  defaultValue={user?.email}
                 
                  className="input input-bordered"
                  disabled
                />
              </div>

              <label className="label">
                <span className="label-text">Task Category</span>
              </label>
              <select
                {...register("task")}
                required
                className="select select-info w-full max-w-xs"
              >
                <option value="todo">To-Do</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
              </select>

              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
