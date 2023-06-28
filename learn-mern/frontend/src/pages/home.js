import { useEffect, useState } from "react";
import WorkoutDetails from '../components/workoutdetails'


const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            //creates array of workout objects
            const response = await fetch('/api/workouts');
            const json = await response.json();
            //if the response is okay, then update workouts variable to the workouts
            if (response.ok){
                setWorkouts(json);
            }
        }

        fetchWorkouts();
    }, [workouts]);

    return (
        <div className="home">
          <div className="container">
            {workouts && workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout}/>
            ))}
          </div>
        </div>
      );
      
}

export default Home;