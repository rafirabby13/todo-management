/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import moment from "moment";
import Swal from "sweetalert2";
import axios from "axios";
import { useForm } from "react-hook-form";
import useGetTasks from "../../hooks/useGetTasks";

const UpdateTask = () => {
  const [task, setTask] = useState([]);
  const { user } = useAuth();
  const [tasks, isLoading, refetch] = useGetTasks();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://todo-server-assignment.vercel.app/task/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setTask(res);
        console.log(res);
      });
  }, [id]);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // console.log(moment().format('llll'))
    const time = moment().format("llll");
    const taskData = { ...data, email: user?.email, time };
    axios.put(`https://todo-server-assignment.vercel.app/PUT/tasks/${id}`, taskData).then((res) => {
      console.log("res.data ", res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate("/");
      }
    });
  };
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-[#DCD7C9]  w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task Title</span>
                </label>
                <input
                  {...register("title", { required: true, maxLength: 50 })}
                  type="text"
                  placeholder="Task Title"
                  defaultValue={task?.title}
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
                    required: true,
                    maxLength: 200,
                  })}
                  type="text"
                  defaultValue={task?.description}
                  placeholder="Task Description"
                  className="input input-bordered"
                  required
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
                {...register("status")}
                required
                className="select select-info w-full max-w-xs"
              >
                <option value="todo">To-Do</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
              </select>

              <div className="form-control mt-6 flex justify-between">
                <button className="btn bg-[#2C3930] text-[#DCD7C9]" type="submit">
                  Update
                </button>
                <Link className="btn bg-[#2C3930] text-[#DCD7C9]" to={'/'}>Home</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
