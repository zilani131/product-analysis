import { useEffect, useState } from "react"

const useReviews=()=>{
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('user.json')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return [users,setUsers]
}
export default useReviews;