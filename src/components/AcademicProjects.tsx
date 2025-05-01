import ProjectsInfo from '../resources/ProjectInfo.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';
import './AcademicProjects.css';
import { useEffect, useState } from 'react';
import { Project } from './Utilities';
import { Checkbox, Chip, Divider, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, Skeleton } from '@mui/material';

const AcademicProjects: React.FC = () => {

  const navigate = useNavigate();

  const getUniqueOptions = (projects: Project[], option: 'tools' | 'languages'): string[] => {
    const unique_options: string[] = [];
    projects.forEach(project => {
      project[option].forEach((tag) => {
        if (!unique_options.includes(tag)) {
          unique_options.push(tag);
        }
      })
    });
    return (unique_options);
  }

  const [projectList, setProjectList] = useState<Project[]>(ProjectsInfo);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [tools, setTools] = useState<string[]>(getUniqueOptions(ProjectsInfo, 'tools'));
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>(getUniqueOptions(ProjectsInfo, 'languages'));

  const handleToolsChange = (event: SelectChangeEvent<typeof selectedTools>) => {
    const { target: { value } } = event;
    setSelectedTools(typeof value === 'string' ? value.split(',') : value,);
  };

  const handleLanguagesChange = (event: SelectChangeEvent<typeof selectedTools>) => {
    const { target: { value } } = event;
    setSelectedLanguages(typeof value === 'string' ? value.split(',') : value,);
  };

  const filterProject = (filter_list: string[], filter: 'tools' | 'languages') => {
    const filtered_projects: Project[] = [];
    for (let i = 0; i < ProjectsInfo.length; i++) {
      const project: Project = ProjectsInfo[i];
      const list: string[] = project[filter];
      for (let j = 0; j < list.length; j++) {
        if (filter_list.includes(list[j])) {
          filtered_projects.push(project);
          break;
        }
      }
    }
    return filtered_projects;
  }

  const removeDuplicate = (project_list: Project[]) => {
    const unique_projects: Project[] = [];
    project_list.forEach((project) => {
      if (!unique_projects.includes(project)) {
        unique_projects.push(project);
      }
    })
    return unique_projects;
  }

  type SmartCardMediaProps = {
    img: string
  }

  const SmartCardMedia: React.FC<SmartCardMediaProps> = ({ img }) => {
    const [loading, setLoading] = useState<boolean>(true);

    return <>
      {loading &&
        <Skeleton variant="rectangular" height={140} />
      }
      <CardMedia
        style={loading ? { display: "none" } : {}}
        component="img"
        height="140"
        image={require(`../resources/thumbnail/${img}`)}
        alt="project image"
        onLoad={() => { setLoading(false) }}
      />
    </>
  }

  type ModulatedSelectProps = {
    title: string,
    value: string[],
    onChange: (event: SelectChangeEvent<string[]>) => void,
    options: string[]
  }

  const ModulatedSelect: React.FC<ModulatedSelectProps> = ({title, value, onChange, options}) => {
    return (<FormControl sx={{ width: 300, borderColor: 'rgb(255, 255, 135)' }}>
        <InputLabel style={{ color: 'rgb(255, 255, 135)' }} id={title}>{title}</InputLabel>
        <Select
          labelId={title}
          id={title}
          multiple
          value={value}
          onChange={onChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          sx={{ color: 'white' }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={value.includes(option)} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>);
  }

  useEffect(() => {
    if (selectedTools.length === 0 && selectedLanguages.length === 0) { 
      setProjectList(ProjectsInfo);
      return; 
    }
    const filtered_projects: Project[] = [...filterProject(selectedTools, 'tools'), ...filterProject(selectedLanguages, 'languages')];
    setProjectList(removeDuplicate(filtered_projects));
  }, [selectedTools, selectedLanguages]);

  return (<div className='academic-projects-foundation'>
    <div className='academic-projects-filter'>
      <p style={{fontWeight: 'bold', textAlign: 'center'}}>OR Sort</p>
      <ModulatedSelect title='Tools' value={selectedTools} onChange={handleToolsChange} options={tools}></ModulatedSelect>
      <ModulatedSelect title='Languages' value={selectedLanguages} onChange={handleLanguagesChange} options={languages}></ModulatedSelect>
    </div>
    <div className='academic-projects-container'>
      {projectList.map((project, index) => {
        return <Card sx={{ maxWidth: 345 }} className='academic-projects-card' key={index}>
          <CardActionArea onClick={() => { navigate(`/academic-projects${project.path}`) }}>
            <SmartCardMedia img={project.img} />
            <CardContent style={{ backgroundColor: '#363636', color: 'white' }}>
              <Typography gutterBottom variant="h6" component="div">
                {project.title}
              </Typography>
              <div className="academic-projects-chip-container">
                {project.tools.map((tool, index) => {
                  return <Chip className='academic-projects-tool-chip' label={tool} key={index} />
                })}
                {project.languages.length > 0 && <Divider className="academic-projects-divider" orientation="vertical" variant="middle" flexItem />}
                {project.languages.map((language, index) => {
                  return <Chip className='academic-projects-language-chip' label={language} key={index} />
                })}
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      })}
    </div>
  </div>);
}

export default AcademicProjects;