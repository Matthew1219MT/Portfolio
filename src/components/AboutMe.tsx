import { Avatar, Chip, Divider, Card, Typography } from "@mui/material";
import { message } from "antd";
import './AboutMe.css';
import { Cake, Flag, GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { ReactNode } from "react";
import CV from '../resources/AboutMe.json';

const AboutMe: React.FC = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const CopyHandler = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            messageApi.open({ type: 'error', content: 'Failed to copy : ('});
        } finally {
            messageApi.open({ type: 'success', content: 'Copied'});
        }
    }

    type EduCardProps = {
        uni: string, 
        degree: string, 
        date: string
    }

    const EduCard: React.FC<EduCardProps> = ({uni, degree, date}) => {
        return (<Card sx={{ maxWidth: 350, height: 150, backgroundColor: '#363636'}} className='about-me-card'>
            <Typography gutterBottom sx={{ color: 'rgb(255, 255, 135)', fontSize: 18 }}>
                {uni}
            </Typography>
            <Typography sx={{ color: 'white', fontSize: 22, fontWeight: 700 }}>
                <u>{degree}</u>
            </Typography>
            <Typography gutterBottom sx={{ color: 'white', fontSize: 18 }}>
                {date}
            </Typography>
        </Card>);
    }

      
    const BoldParser = (value: string): ReactNode => {
        const parts = value.split(/(<b>.*?<\/b>)/);
        
        return (
            <div>
            {parts.map((part, i) => {
                if (part.startsWith('<b>') && part.endsWith('</b>')) {
                const content = part.slice(3, -4);
                return <b key={i}>{content}</b>;
                }
                return <>{part}</>;
            })}
            </div>
        );
    };

    type JobCardProps = {
        company: string, 
        title: string,
        date: string,
        content: string[]
    }

    const JobCard: React.FC<JobCardProps> = ({company, title, date, content}) => {

        return (<Card sx={{ maxWidth: 350, backgroundColor: '#363636' }} className='about-me-card'>
            <Typography gutterBottom sx={{ color: 'rgb(255, 255, 135)', fontSize: 18 }}>
                {company}
            </Typography>
            <Typography sx={{ color: 'white', fontSize: 22, fontWeight: 700 }}>
                <u>{title}</u>
            </Typography>
            <Typography gutterBottom sx={{ color: 'white', fontSize: 18 }}>
                {date}
            </Typography>
            <div style={{ color: 'white', fontSize: '16px'}}>
                <ul>
                {content.map((value)=>{
                    return <li>{BoldParser(value)}</li>
                })}
                </ul>
            </div>
        </Card>);
    }

    type SkillCardProps = {
        category: string, 
        skills: string[]
    }

    const SkillCard: React.FC<SkillCardProps> = ({category, skills}) => {
        return (<Card sx={{ maxWidth: 350, backgroundColor: '#363636' }} className='about-me-card'>
            <Typography sx={{ color: 'white', fontSize: 22, fontWeight: 700 }}>
                <u>{category}</u>
            </Typography>
            <div className="about-me-container">
                {skills.map((skill, index)=>{
                    return <Chip className='about-me-skill-chip' label={skill} key={index}/>
                })}
            </div>
        </Card>);
    }

    type LanguageCardProps = {
        language: string,
        level: string
    }

    const LanguageCard: React.FC<LanguageCardProps> = ({language, level}) => {
        return (<Card sx={{ maxWidth: 350, backgroundColor: '#363636' }} className='about-me-card'>
            <Typography sx={{ color: 'white', fontSize: 22, fontWeight: 700 }}>
                <u>{language}</u>
            </Typography>
            <div style={{ color: 'white', fontSize: '16px'}}>
                {level}
            </div>
        </Card>);
    }

    const BirthdayHandler = () => {
        const today: Date = new Date();
        if (today.getMonth() === 12 - 1 && today.getDate() === 19) {
            messageApi.open({ type: 'info', content: 'Happy Birthday to me !!!'});
        }
    }

    return <div>
        <div className='about-me-container'>
            {contextHolder}
            <Avatar alt="Avatar Image" src={require('../resources/Avatar.JPG')} sx={{ width: 300, height: 300}}/>
            <div className='about-me-sub-container'>
                <h1>Chun Hei Tse</h1>
                <div className='about-me-container'>
                    <Chip className='about-me-chip' label={<div className='about-me-chip-label'><Mail/>&nbsp;Matttse1219@gmail.com</div>} onClick={() => {CopyHandler('Matttse1219@gmail.com')}}/>
                    <Chip className='about-me-chip' label={<div className='about-me-chip-label'><LinkedIn/>&nbsp;Chun Hei Tse</div>} onClick={() => {window.open('https://www.linkedin.com/in/chun-hei-tse-7a8785300/', "_blank", "noreferrer")}}/>
                    <Chip className='about-me-chip' label={<div className='about-me-chip-label'><GitHub/>&nbsp;Matthew1219MT</div>} onClick={() => {window.open('https://github.com/Matthew1219MT', "_blank", "noreferrer")}}/>
                    <Chip className='about-me-chip' label={<div className='about-me-chip-label'><Flag/>&nbsp;Hong Kong Citizen</div>} onClick={() => {messageApi.open({ type: 'info', content: 'Hello ! 你食咗飯未 ?'});}}/>
                    <Chip className='about-me-chip' label={<div className='about-me-chip-label'><Cake/>&nbsp;19 Dec 2002</div>} onClick={() => {BirthdayHandler()}}/>
                </div>
            </div>
        </div>
        <Divider className="about-me-divider"/>
        <div className='about-me-sub-container'>
            <h2>About Me</h2>
            {CV.description}
        </div>
        <Divider className="about-me-divider"/>
        <div className='about-me-sub-container'>
            <h2>Education</h2>
            <div className='about-me-container'>
                {CV.education.map((edu)=>{
                    return <EduCard uni={edu.university} degree={edu.title} date={`${edu.start}-${edu.end}`}/>
                })}
            </div>
        </div>
        <Divider className="about-me-divider"/>
        <div className='about-me-sub-container'>
            <h2>Employment</h2>
            <div className='about-me-container'>
                {CV.employment.map((job)=>{
                    return <JobCard company={job.company} title={job.title} date={`${job.start}-${job.end}`} content={job.description}/>
                })}
            </div>
        </div>
        <Divider className="about-me-divider"/>
        <div className='about-me-sub-container'>
            <h2>Skills</h2>
            <div className='about-me-container'>
                {CV.skills.map((skill)=>{
                    return <SkillCard category={skill.name} skills={skill.list}/>
                })}
            </div>
        </div>
        <Divider className="about-me-divider"/>
        <div className='about-me-sub-container'>
            <h2>Languages</h2>
            <div className='about-me-container'>
                {CV.languages.map((lang)=>{
                    return <LanguageCard language={lang.language} level={lang.level}/>
                })}
            </div>
        </div>
    </div>
}

export default AboutMe;