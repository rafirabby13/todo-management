import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useGetTasks = () => {
    const {user } = useAuth()
//    console.log(user)
    const {data: tasks=[], isLoading, refetch} = useQuery({ 
        queryKey: ['todos', user?.email], 
        queryFn: async ()=>{
            const data = await fetch(`http://localhost:5000/GET/tasks?email=${user?.email}`)
           return data.json()
        } 
    })

    return [tasks, isLoading, refetch]
};

export default useGetTasks;