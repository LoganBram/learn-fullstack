import { useState } from "react"

const WorkoutForm = () => {

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')

    //sending the workout POST request
    const handleSubmit = async (e) => {
        //prevent refresh
        e.preventDefault()
        //create workout object
        const workout = {title, load, reps}
        //send post request using information from form
        const response = await fetch('/api/workouts', {
            method: 'POST',
            //turn wokrout object to JSON
            body: JSON.stringify(workout),
            headers: {'Content-Type': 'application/json'}
        })
         

    }

    return(
        
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add New Workout</h3>
            <label>Exercise Title: </label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}/>
            <label>Load: </label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}/>
            <label>Reps: </label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}/>

        </form>

        
    )
}