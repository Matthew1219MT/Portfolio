import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import './Foundation.css';
import ProjectShowcase from "./ProjectShowcase";
import ProjectsInfo from '../resources/ProjectInfo.json';

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
                        {/* <Route path="/test" element={<ProjectShowcase title="Welfare System of Europe" video="https://youtu.be/5QMFE3sMulw" content="NA"/>}></Route> */}
                        {ProjectsInfo.map((project, index) => {
                            return <Route key={index} path={project.path} element={<ProjectShowcase title={project.title} video={project.video} content={project.content}/>}></Route>
                        })}
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Foundation