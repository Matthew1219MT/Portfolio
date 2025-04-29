import { Avatar, Chip, Divider, Card, Typography, CardContent } from "@mui/material";
import { message } from "antd";
import './AboutMe.css';
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { ReactNode } from "react";

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

    type JobCardProps = {
        company: string, 
        title: string,
        date: string,
        content: ReactNode
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
            <Typography gutterBottom sx={{ color: 'white', fontSize: 16 }}>
                {content}
            </Typography>
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
            <Typography className="about-me-sub-container">
                {skills.map((skill, index)=>{
                    return <Chip className='about-me-skill-chip' label={skill} key={index}/>
                })}
            </Typography>
        </Card>);
    }

    return <div>
        <div className='about-me-container'>
            {contextHolder}
            <Avatar alt="Avatar Image" src={require('../resources/Avatar.JPG')} sx={{ width: 300, height: 300}}/>
            <div className='about-me-sub-container'>
                <h1>Chun Hei Tse</h1>
                <div className='about-me-container'>
                    <Chip className='about-me-chip' label={<div className='about-me-chip-label'><Mail/>&nbsp;Matttse1219@gmail.com</div>} onClick={() => {CopyHandler('Matttse1219@gmail.com')}}></Chip>
                    <Chip className='about-me-chip' label={<div className='about-me-chip-label'><LinkedIn/>&nbsp;Chun Hei Tse</div>} onClick={() => {window.open('https://www.linkedin.com/in/chun-hei-tse-7a8785300/', "_blank", "noreferrer")}}></Chip>
                    <Chip className='about-me-chip' label={<div className='about-me-chip-label'><GitHub/>&nbsp;Matthew1219MT</div>} onClick={() => {window.open('https://github.com/Matthew1219MT', "_blank", "noreferrer")}}></Chip>
                </div>
            </div>
        </div>
        <Divider className="about-me-divider"/>
        <div className='about-me-sub-container'>
            <h2>About Me</h2>
            A highly passionate and creative event coordinator with strong organizational and communication skills. 
            A quick learner with eagerness to continuously learn and adapt. 
            Proven ability to work under pressure with high resilience for tasks requiring independence or collaboration. 
            Willing to cooperate with others to deliver results on time with excellence.
        </div>
        <Divider className="about-me-divider"/>
        <div className='about-me-sub-container'>
            <h2>Education</h2>
            <div className='about-me-container'>
                <EduCard uni='The University of Melbourne' degree='Master of Information Technology' date='2025 - Present'/>
                <EduCard uni='HongKongPolytechnic University' degree=' Bsc(Hons)Internet and Multimedia Technologies' date='2020 - 2024'/>
            </div>
        </div>
        <Divider className="about-me-divider"/>
        <div className='about-me-sub-container'>
            <h2>Employment</h2>
            <div className='about-me-container'>
                <JobCard company='LinkPower Technology Limited' title='Programmer' date='July 2024 - January 2025'
                    content={<ul>
                        <li>Developed an admin webpage as dashboard with <b>React TypeScript, React Router</b></li>
                        <li>Built a search engine webpage with <b>React TypeScript, React Redux, AntDesign library</b></li>
                        <li>Engineered a dashboard page for train track with <b>React TypeScript and Plotly Dash(Python)</b></li>
                        <li>Created a AI chatroom webpage, with <b>React TypeScript</b></li>
                    </ul>}
                />
                <JobCard company='Hong Kong Polytechnic University Industrial Center ' title=' Student Assistant' date='December 2022- June 2024'
                    content={<ul>
                        <li>Developed an application to detect and display the change in color of specimenswith <b>Python, OpenCV, Tkinter</b></li>
                        <li>Built a back-end system to update staff status automatically with <b>Python, MQTT</b></li>
                        <li>Engineered an automatic system to perform basic eye checking with <b>Python, OpenCV</b></li>
                    </ul>}
                />
            </div>
        </div>
        <Divider className="about-me-divider"/>
        <div className='about-me-sub-container'>
            <h2>Skills</h2>
            <div className='about-me-container'>
                <SkillCard category="Software Development" skills={["Unity", "Godot", "XCode", "Android Studio"]}/>
                <SkillCard category="Programming" skills={["Python", "Java", "C#", "C++", "GDScript"]}/>
                <SkillCard category="Web Development" skills={["TypeScript", "JavaScript", "HTML", "PHP", "CSS"]}/>
                <SkillCard category="Development Tools" skills={["Visual Studio Code", "GitHub", "Bitbucket"]}/>
                <SkillCard category="Testing Tools" skills={["Jest"]}/>
                <SkillCard category="Database" skills={["MySQL"]}/>
            </div>
        </div>
        <Divider className="about-me-divider"/>
        <div className='about-me-sub-container'>
            <h2>Languages</h2>
            <ul>
                <li><b>English</b> - 7.5 in IELTS (2/2024)</li>
                <li><b>Cantonese</b> - Native Speaker</li>
                <li><b>Mandarin</b> - Intermediate</li>
            </ul>
        </div>
    </div>
}

export default AboutMe;