import { useEffect, useState } from "react";

const Home = () => {
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:5000/api/workouts');
            const data = await response.json();
            console.log(data);
        }
    }, []);
    return(
        <div className = "home">
            <h2>Home</h2>
        </div>
    )

}

export default Home;