import React, { useState } from 'react';
import { supabase } from '../client'

function CreateACrewmate() {
    const [Crewmates, setCrewmate] = useState({ name: "", speed: "", color: "" });

    const CreateCrewmate = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Crewmates')
          .insert({name: Crewmates.name, speed: Crewmates.speed, color: Crewmates.color})
          .select();
      
        alert("Crewmate " + Crewmates.name + " is all set");
      }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCrewmate( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br />

                <label htmlFor="speed">Speed</label><br />
                <input type="text" id="speed" name="speed" onChange={handleChange} /><br />
                <br />

                <label htmlFor="color">Color</label><br />
                <select id="color" name="color" onChange={handleChange}>
                    <option value="">Select a color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="cyan">Cyan</option>
                    <option value="Brown">Brown</option>
                    <option value="purple">Purple</option>
                    <option value="black">Black</option>
                    <option value="orange">Orange</option>
                    <option value="pink">Pink</option>
                </select>
                <br />
                <br />
                <input type="submit" value="Submit" onClick={CreateCrewmate} />
            </form>
        </div>
    );
}

export default CreateACrewmate;
