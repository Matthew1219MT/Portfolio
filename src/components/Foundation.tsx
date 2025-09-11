import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import ProjectsList from "./ProjectsList";
import './Foundation.css';
import ProjectShowcase from "./ProjectShowcase";
import AcademicProjects from '../resources/AcademicProjects.json';
import PersonalProjects from '../resources/PersonalProjects.json';
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
                        <Route path="/academic-projects" element={<ProjectsList config={AcademicProjects} title="Academic Projects" path="/academic-projects"/>}/>
                        <Route path="/personal-projects" element={<ProjectsList config={PersonalProjects} title="Personal Projects" path="/personal-projects"/>}/>
                        <Route path="/project-info" element={<ProjectInfo/>}/>
                        {AcademicProjects.map((project, index) => {
                            return <Route key={index} path={`/academic-projects${project.path}`} element={<ProjectShowcase project={project} projects={AcademicProjects} title="Academic Projects" path="/academic-projects"/>}></Route>
                        })}
                        {PersonalProjects.map((project, index) => {
                            return <Route key={index} path={`/personal-projects${project.path}`} element={<ProjectShowcase project={project} projects={PersonalProjects} title="Personal Projects" path="/personal-projects"/>}></Route>
                        })}
                        <Route path="/game/StudyWar" element={<UnityGame/>}/>
                    </Routes>
                </HashRouter>
            </div>
        </div>
    )
}

export default Foundation