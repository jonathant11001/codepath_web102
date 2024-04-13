import { Link } from 'react-router-dom';
import './CrewmateCard.css'

const CrewmateCard = ({ id, name, speed, color }) => {

  return (
    <div className="CrewmateCard" style={{ backgroundColor: color }}>
      <h2 className="name">{name}</h2>
      <h3 className="speed">Speed: {speed}</h3>
      <h3 className="color">Color: {color}</h3>
      <button className="editButton">
        <Link to={`edit/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          Edit Crewmate
        </Link>
      </button>
    </div>
  );
};

export default CrewmateCard;
