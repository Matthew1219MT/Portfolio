import ReactPlayer from 'react-player/youtube';
import './ProjectShowcase.css';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import ProjectsInfo from '../resources/ProjectInfo.json';
import { ProjectInfo } from './Utilities';
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
type Props = {
    title: string,
    video?: string,
    content: string
}

const ProjectShowcase:React.FC<Props> = ({title, video, content}) => {

    const other_projects: ProjectInfo[] = ProjectsInfo.filter((project) => project.title !== title);

    const navigate = useNavigate();

    return <div className='project-showcase-container'>
        <div className='project-showcase-content'>
            {video && <ReactPlayer url={video} controls={true} width="100%"/>}
            <p className='project-showcase-title'>{title}</p>
            <div>{content}</div>
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
                  </CardContent>
                </CardActionArea>
              </Card>
            })}
        </div>}
    </div>
}

export default ProjectShowcase;