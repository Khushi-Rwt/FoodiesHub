import { useEffect, useState } from "react";

const User = ({name,location}) => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
            //API call
        setInterval(() => {
            console.log("setInterval running")
        }, 1000);

        return()=>{
            console.log("useEffect return(Unmounting)")
        }
    },[]);
    
    return <div className="user-card">
        <h2>Count = {count}</h2>
        <h2>Name - {name}</h2>
        <h3>Location - {location}</h3>
        <h4>Contact - khushirwt17@gmail.com</h4>
    </div>
}

export default User;