import ProjectsInfo from '../resources/ProjectInfo.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';

const Homepage: React.FC = () => {

    const naviage = useNavigate();

    return (<div>
        {ProjectsInfo.map((project) => {
            return <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={()=>{naviage(project.path)}}>
              <CardMedia
                component="img"
                height="140"
                image={require(`../resources/${project.img}`)}
                alt="project image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        })}
    </div>);
}

export default Homepage;