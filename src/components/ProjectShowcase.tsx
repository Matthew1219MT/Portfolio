import ReactPlayer from 'react-player/youtube';
import './ProjectShowcase.css'

type Props = {
    title: string,
    video?: string,
    content: string
}

const ProjectShowcase:React.FC<Props> = ({title, video, content}) => {
    return <div className='project-showcase-container'>
        <div className='project-showcase-content'>
            {video && <ReactPlayer url={video} width='100%' controls={true}/>}
            <p className='project-showcase-title'>{title}</p>
            <p>{content}</p>
        </div>
        <div className='project-showcase-project-list'>
            d
        </div>
    </div>
}

export default ProjectShowcase;