/* eslint-disable no-unused-vars */
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Tasklist from "./Tasklist";

const AllTasks = () => {
  const columns = [
    { id: "todo", title: "To Do" },
    { id: "inProgress", title: "In Progress" },
    { id: "done", title: "Done" },
  ];



  return (
    <div className="flex ">
      {/* <h1>{tasks?.length}</h1> */}
      <div className="grid grid-cols-2 md:grid-cols-3 w-full  gap-5">
        <DndProvider backend={HTML5Backend}>
          {columns?.map((column, i) => (
            <Tasklist key={i} column={column} />
          ))}
        </DndProvider>
     
      </div>
    </div>
  );
};

export default AllTasks;
