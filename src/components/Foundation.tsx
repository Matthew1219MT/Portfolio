import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import AcademicProjects from "./AcademicProjects";
import './Foundation.css';
import ProjectShowcase from "./ProjectShowcase";
import ProjectsInfo from '../resources/ProjectInfo.json';
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";

const Foundation: React.FC = () => {

    return (
        <div className='foundation-container'>
            <div className='foundation-header'>
                <b><a href="/Portfolio">Personal Portfolio</a></b>
                <i>Created by Matthew Chun Hei Tse</i>
            </div>
            <div className='foundation-body'>
                <BrowserRouter basename="Portfolio">
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/about-me" element={<AboutMe/>}/>
                        <Route path="/academic-projects" element={<AcademicProjects/>}/>
                        {ProjectsInfo.map((project, index) => {
                            return <Route key={index} path={`/academic-projects${project.path}`} element={<ProjectShowcase title={project.title} video={project.video} content={project.content}/>}></Route>
                        })}
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Foundation