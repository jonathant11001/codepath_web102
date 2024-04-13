import React, { useState, useEffect } from 'react';
import CrewmateCard from '../components/CrewmateCard';
import { supabase } from '../client'

const ReadCrewmates = (props) => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const fetchCrewmates = async () => {
            const {data} = await supabase
              .from('Crewmates')
              .select();
          
            setCrewmates(data)
        }
        fetchCrewmates();
        setCrewmates(props.data);
    }, [props]);

    return (
        <div className="ReadCrewmates">
            {
                crewmates && crewmates.length > 0 ?
                crewmates.map((crewmate) => 
                    <CrewmateCard 
                    key={crewmate.id} 
                    id={crewmate.id} 
                    name={crewmate.name} 
                    speed={crewmate.speed} 
                    color={crewmate.color} />
                ) : <h2>No Crewmates Yet 😞</h2>
            }
        </div>  
    );
};

export default ReadCrewmates;