import { Divider } from '@mui/material';
import Config from '../../package.json';
import './ProjectInfo.css';

const ProjectInfo: React.FC = () => {

    return (<div className='project-info-container'>
        <h1>Project Info</h1>
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