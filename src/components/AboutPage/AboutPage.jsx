import './AboutPage.css'

const AboutPage = ({
    aboutStyle
}) => {
    return (
        <div className={`render ${aboutStyle}`}>
            <h1 className="title">Nicolás Rodriguez</h1>
            <p className='about__text'>
                Bilingual psychologist (English-Spanish), with experience in educational, social and human resources areas, advising individual and / or group problems that emerge in the different phases of the life cycle of people. Responsible for the design and implementation of learning strategies at the academic and / or work levels, which optimize the welfare of individuals. Characterized by active listening, recursion, innovation, ease of learning and good interpersonal relationships.
            </p>
        </div>
    )
}

export default AboutPage;