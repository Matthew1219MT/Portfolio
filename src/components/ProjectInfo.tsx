import { Chip, Divider } from '@mui/material';
import Config from '../../package.json';
import './ProjectInfo.css';
import { GitHub } from '@mui/icons-material';

const ProjectInfo: React.FC = () => {

    return (<div className='project-info-container'>
        <h1>Project Info</h1>
        <Chip className='about-me-chip' label={<div className='project-info-chip-label'><GitHub/>&nbsp;Project Repository</div>} onClick={() => {window.open('https://github.com/Matthew1219MT/Portfolio/tree/main', "_blank", "noreferrer")}}/>
        <Divider className="project-info-divider"/>
        <div>
            <strong>Framework: </strong>React
        </div>
        <div>
            <strong>Language: </strong>TypeScript
        </div>
        <Divider className="project-info-divider"/>
        <h4>Installed Packages: </h4>
        {Object.entries(Config.dependencies).map(([key, value]) => (
            <div key={key}>
                {key}:{String(value)}
            </div>
        ))}
    </div>);
}

export default ProjectInfo;