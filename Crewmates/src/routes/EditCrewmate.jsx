import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { supabase } from '../client';
import './EditCrewmate.css'

const EditCrewmate = () => {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState({ id: null, name: "", speed: "", color: "" });
    const [Origincrewmate, setOriginCrewmate] = useState({ id: null, name: "", speed: "", color: "" });

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data } = await supabase
                .from('Crewmates')
                .select('*')
                .eq('id', id)
                .single();
            if (data) {
                setOriginCrewmate(data);
            }
        };

        fetchCrewmate();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrewmate(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    const updateCrewmate = async (event) => {
        event.preventDefault();
    
        await supabase
            .from('Crewmates')
            .update({
                name: crewmate.name,
                speed: crewmate.speed,
                color: crewmate.color
            })
            .eq('id', id);
        window.location = "http://localhost:5173/gallery/";
    }

    const deletePost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Crewmates')
          .delete()
          .eq('id', id); 
      
        window.location = "http://localhost:5173/gallery/";
    }

    return (
        <div onSubmit={updateCrewmate}>
            <form>
                <label htmlFor="name">Name: {Origincrewmate.name}</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br />

                <label htmlFor="speed">Speed: {Origincrewmate.speed}</label><br />
                <input type="text" id="speed" name="speed" onChange={handleChange} /><br />
                <br />

                <label htmlFor="color">Color: {Origincrewmate.color}</label><br />
                <input type="text" id="color" name="color" onChange={handleChange} /><br />
                <br />

                <input type="submit" value="Submit" onSubmit={updateCrewmate}/><br/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditCrewmate;