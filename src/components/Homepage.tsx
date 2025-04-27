import ProjectsInfo from '../resources/ProjectInfo.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

type ProjectInfo = {
    path: string; 
    title: string; 
    video?: string; 
    content: string; 
    img: string;
}

const Homepage: React.FC = () => {

    const navigate = useNavigate();

    const shuffle = (array: ProjectInfo[]) => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
      }; 

    const ProjectList = shuffle(ProjectsInfo);

    return (<div className='homepage-container'>
        {ProjectList.map((project, index) => {
            return <Card sx={{ maxWidth: 345 }} className='homepage-card' key={index}>
            <CardActionArea onClick={()=>{navigate(project.path)}}>
              <CardMedia
                component="img"
                height="140"
                image={require(`../resources/${project.img}`)}
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
    </div>);
}

export default Homepage;