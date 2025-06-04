import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import AcademicProjects from "./AcademicProjects";
import './Foundation.css';
import ProjectShowcase from "./ProjectShowcase";
import ProjectsInfo from '../resources/ProjectInfo.json';
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import ProjectInfo from "./ProjectInfo";
import UnityGame from "./UnityGame";

const Foundation: React.FC = () => {

    return (
        <div className='foundation-container'>
            <div className='foundation-header'>
                <b><a href="/Portfolio">Personal Portfolio</a></b>
                <i>Created by Matthew Chun Hei Tse</i>
            </div>
            <div className='foundation-body'>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/about-me" element={<AboutMe/>}/>
                        <Route path="/academic-projects" element={<AcademicProjects/>}/>
                        <Route path="/project-info" element={<ProjectInfo/>}/>
                        {ProjectsInfo.map((project, index) => {
                            return <Route key={index} path={`/academic-projects${project.path}`} element={<ProjectShowcase project={project}/>}></Route>
                        })}
                        <Route path="/game/StudyWar" element={<UnityGame/>}/>
                    </Routes>
                </HashRouter>
            </div>
        </div>
    )
}

export default Foundation