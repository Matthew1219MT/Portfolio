import ReactPlayer from 'react-player/youtube';
import './ProjectShowcase.css';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

type Props = {
    title: string,
    video?: string,
    content: string
}

const ProjectShowcase:React.FC<Props> = ({title, video, content}) => {

    return <div className='project-showcase-container'>
        <div className='project-showcase-content'>
            {video && <ReactPlayer url={video} controls={true} width="100%"/>}
            <p className='project-showcase-title'>{title}</p>
            <div>{content}</div>
        </div>
        {!isMobile && <div className='project-showcase-project-list'>
            Other Projects (Unfinished)
        </div>}
    </div>
}

export default ProjectShowcase;