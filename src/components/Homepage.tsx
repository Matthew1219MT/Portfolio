import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import { Project } from './Utilities';
import { isMobile } from 'react-device-detect';
import './Homepage.css'

type Props = {
    academicProjects: Project[],
    personalProjects: Project[]
}

type CarouselProps = {
    className: string
}

const Homepage: React.FC<Props> = ({academicProjects, personalProjects}) => {

    const navigate = useNavigate();

    const Menu = () => {
        return <div className={`home-page-menu${isMobile ? '-mobile' : ''}`}>
            <div className="home-page-title">Chun Hei Tse's</div>
            <div className="home-page-content">Portfolio</div>
            <button className="home-page-button" onClick={()=>{navigate('/about-me')}}>About Me</button>
            <button className="home-page-button" onClick={()=>{navigate('/academic-projects')}}>Academic Projects</button>
            <button className="home-page-button" onClick={()=>{navigate('/personal-projects')}}>Personal Projects</button>
            <button className="home-page-button" onClick={()=>{navigate('game/StudyWar')}}>StudyWar</button>
            <button className="home-page-button" onClick={()=>{navigate('/project-info')}}>Project Info</button>
            {isMobile && <CustumCarousel className="home-page-custom-carousel-mobile"/>}
        </div>;
    }

    const CustumCarousel: React.FC<CarouselProps> = ({className}) => {
        return <div className={className}><Carousel className="home-page-carousel" autoplay arrows>
            {academicProjects.map((project, index) => {
                return <div className="home-page-img-div" onClick={()=>navigate(`/academic-projects${project.path}`)}>
                    <img style={{borderRadius: "25px"}} width={isMobile ? "480px" : ""} height="360px" alt={`image of ${project.title}`} src={`${process.env.PUBLIC_URL}/resources/thumbnail/${project.img}`}/>
                </div>
            })}
            {personalProjects.map((project, index) => {
                return <div className="home-page-img-div" onClick={()=>navigate(`/personal-projects${project.path}`)}>
                    <img style={{borderRadius: "25px"}} width={isMobile ? "480px" : ""} height="360px" alt={`image of ${project.title}`} src={`${process.env.PUBLIC_URL}/resources/thumbnail/${project.img}`}/>
                </div>
            })}
        </Carousel></div>;
    }

    return (<div className='home-page-container'>
        <Menu/>
        {!isMobile && <CustumCarousel className="home-page-custom-carousel"/>}
    </div>);
}

export default Homepage;