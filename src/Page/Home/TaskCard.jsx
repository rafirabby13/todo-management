/* eslint-disable react/prop-types */

import { useDrag } from "react-dnd";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useGetTasks from "../../hooks/useGetTasks";

const TaskCard = ({ ts  }) => {
  // console.log(ts);
  const { user } = useAuth();
  const [tasks, isLoading, refetch] = useGetTasks();

// handilging drag drop eithing a column



// const ref = useRef(null)
// const [{ handlerId }, drop] = useDrop({
//   accept: 'task',
//   collect(monitor) {
//     return {
//       handlerId: monitor.getHandlerId(),
//     }
//   },
//   hover(item, monitor) {
//     if (!ref.current) {
//       return
//     }
//     const dragIndex = item.index
//     const hoverIndex = index
//     // Don't replace items with themselves
//     if (dragIndex === hoverIndex) {
//       return
//     }
//     // Determine rectangle on screen
//     const hoverBoundingRect = ref.current?.getBoundingClientRect()
//     // Get vertical middle
//     const hoverMiddleY =
//       (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
//     // Determine mouse position
//     const clientOffset = monitor.getClientOffset()
//     // Get pixels to the top
//     const hoverClientY = clientOffset.y - hoverBoundingRect.top
//     // Only perform the move when the mouse has crossed half of the items height
//     // When dragging downwards, only move when the cursor is below 50%
//     // When dragging upwards, only move when the cursor is above 50%
//     // Dragging downwards
//     if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
//       return
//     }
//     // Dragging upwards
//     if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
//       return
//     }
//     // Time to actually perform the action
//     moveCard(dragIndex, hoverIndex)
//     // Note: we're mutating the monitor item here!
//     // Generally it's better to avoid mutations,
//     // but it's good here for the sake of performance
//     // to avoid expensive index searches.
//     item.index = hoverIndex
//   },
// })









// handilging drag drop eithing a column













  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: ts._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        console.log("Dropped:", item), isDragging;
    refetch()
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
          axios.delete(`https://todo-server-assignment.vercel.app/DELETE/tasks/${t}`).then((res) => {
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
        } bg-[#3F4F44] text-[#DCD7C9] p-2
         md:p-4 flex flex-col md:flex-row justify-between gap-3`}
        style={{ cursor: "grab" }}
      >
        <div>
          <p className="font-bold text-sm md:text-xl">{ts.title}</p>
          <p className="text-xs md:text-lg">{ts.description}</p>
        </div>
        <div className="flex  md:flex-col gap-4">
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
