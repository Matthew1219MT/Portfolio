import ReactPlayer from 'react-player/youtube';
import './ProjectShowcase.css';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import ProjectsInfo from '../resources/ProjectInfo.json';
import { Project } from './Utilities';
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Divider, Chip } from '@mui/material';

type Props = {
    project: Project
}

const ProjectShowcase:React.FC<Props> = ({project}) => {

    const other_projects: Project[] = ProjectsInfo.filter((obj) => obj.title !== project.title);

    const navigate = useNavigate();

    return <div className='project-showcase-container'>
        <div className='project-showcase-content'>
            {project.video && <ReactPlayer url={project.video} controls={true} width="100%"/>}
            <Divider className="project-showcase-divider"/>
            <div className='project-showcase-title'>{project.title}</div>
            <Divider className="project-showcase-divider"/>
            <div className="project-showcase-tag-list">
                {project.tools.map((tool, index)=>{
                    return <Chip className='project-showcase-tool-chip' label={tool} key={index}/>
                })}
                {project.languages.length > 0 && <Divider className="project-showcase-divider" orientation="vertical" variant="middle" flexItem/>}
                {project.languages.map((language, index)=>{
                    return <Chip className='project-showcase-language-chip' label={language} key={index}/>
                })}
            </div>
            <Divider className="project-showcase-divider"/>
            <div>{project.content}</div>
        </div>
        {!isMobile && <div className='project-showcase-project-list'>
            {other_projects.map((project, index) => {
                return <Card className='project-showcase-project-card' key={index}>
                <CardActionArea onClick={()=>{navigate(`/academic-projects${project.path}`)}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={require(`../resources/thumbnail/${project.img}`)}
                    alt="project image"
                  />
                  <CardContent style={{backgroundColor: '#363636', color:'white'}}>
                    <Typography gutterBottom variant="h6" component="div">
                        {project.title}
                    </Typography>
                    <div className="academic-projects-chip-container">
                        {project.tools.map((tool, index)=>{
                            return <Chip className='academic-projects-tool-chip' label={tool} key={index}/>
                        })}
                        {project.languages.length > 0 && <Divider className="academic-projects-divider" orientation="vertical" variant="middle" flexItem />}
                        {project.languages.map((language, index)=>{
                            return <Chip className='academic-projects-language-chip' label={language} key={index}/>
                        })}
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            })}
        </div>}
    </div>
}

export default ProjectShowcase;