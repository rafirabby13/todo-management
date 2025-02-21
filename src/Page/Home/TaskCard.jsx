/* eslint-disable react/prop-types */

import { useDrag } from "react-dnd";
import { useForm } from "react-hook-form";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useGetTasks from "../../hooks/useGetTasks";

const TaskCard = ({ ts }) => {
  // console.log(ts);
  const { user } = useAuth();
  const [tasks, isLoading, refetch] = useGetTasks();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: ts._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        console.log("Dropped:", item);
      } else {
        console.log("Drag canceled:", item);
      }
    },
  }));
  // console.log(ts)/task/:id
  // console.log(isDragging)

  const handleDelete = (t) => {
    console.log(t);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/DELETE/tasks/${t}`).then((res) => {
            console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        })
      };
    });
  };

  return (
    <div>
      <div
        ref={drag}
        className={`${
          isDragging ? "opacity-30" : "opacity-100"
        } bg-[#3F4F44] text-[#DCD7C9] p-4 flex justify-between gap-3`}
        style={{ cursor: "grab" }}
      >
        <div>
          <p className="font-bold text-xl">{ts.title}</p>
          <p className="">{ts.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            to={`/task/${ts?._id}`}
            className=" p-1 bg-[#2C3930] text-[#DCD7C9] rounded-lg hover:bg-[#5d956e] hover:text-[#DCD7C9] cursor-pointer"
          >
            <FaPen />
          </Link>
          <p
            onClick={() => handleDelete(ts._id)}
            className=" p-1 bg-[#2C3930] text-[#DCD7C9] rounded-lg hover:bg-[#5d956e] hover:text-[#DCD7C9] cursor-pointer"
          >
            <FaTrashAlt />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
