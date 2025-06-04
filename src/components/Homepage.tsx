import { useNavigate } from "react-router-dom";
import './Homepage.css'

const Homepage: React.FC = () => {

    const navigate = useNavigate();

    return (<div className='home-page-container'>
        <div className="home-page-title">Chun Hei Tse's</div>
        <div className="home-page-content">Portfolio</div>
        <button className="home-page-button" onClick={()=>{navigate('/about-me')}}>About Me</button>
        <button className="home-page-button" onClick={()=>{navigate('/academic-projects')}}>Academic Projects</button>
        <button className="home-page-button" onClick={()=>{navigate('game/StudyWar')}}>StudyWar</button>
        <button className="home-page-button" onClick={()=>{navigate('/project-info')}}>Project Info</button>
    </div>);
}

export default Homepage;