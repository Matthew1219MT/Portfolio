import ProjectsInfo from '../resources/ProjectInfo.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';
import './AcademicProjects.css';
import { useState } from 'react';
import { Project } from './Utilities';
import { Chip, Divider } from '@mui/material';

const AcademicProjects: React.FC = () => {

    const navigate = useNavigate();

    const shuffle = (array: Project[]): Project[] => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
      }; 

    const [projectList, setProjectList] = useState<Project[]>(ProjectsInfo);

    return (<div className='academic-projects-container'>
        {projectList.map((project, index) => {
            return <Card sx={{ maxWidth: 345 }} className='academic-projects-card' key={index}>
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
    </div>);
}

export default AcademicProjects;