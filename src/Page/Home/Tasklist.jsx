/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import update from 'immutability-helper'
import axios from "axios";
import useGetTasks from "../../hooks/useGetTasks";
import TaskCard from "./TaskCard";

import { useDrop } from "react-dnd";
import { useCallback, useEffect, useState } from "react";
const Tasklist = ({ column }) => {
  const [tasks, isLoading, refetch] = useGetTasks();
  const [task, setTask] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addItemToSection = (id) => {
    // console.log(column.id, " ", id, "isover", isOver);
    const data = { status: column.id, taskId: id };

    axios
      .post("https://todo-server-assignment.vercel.app/task/updateStatus", data)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          // console.log(res.data);
        }
      });
    refetch();
  };
  useEffect(() => {
    if (!isLoading && tasks) {
      setTask(tasks.filter((t) => t.status === column.id));
    }
  }, [tasks, column.id, isLoading]);



  // drag drop








  // drag drop

  return (
    <div className="w-full ">
      <div className="bg-[#2C3930]   min-h-full " ref={drop}>
        <h1 className="text-center  bg-[#DCD7C9] text-[#2C3930] shadow shadow-[#2C3930] py-3 mb-4 font-bold text-xl">
          {column?.title}
        </h1>
        <div className="flex flex-col w-[90%] mx-auto gap-5 pt-10 pb-30  ">
          {task?.length == 0
            ? <p className='text-xl text-[#DCD7C9] font-bold'>No card to show</p>
            : task?.map((ts, i) => <TaskCard key={ts._id} 
            ts={ts} />)}
        </div>
      </div>
    </div>
  );
};

export default Tasklist;
