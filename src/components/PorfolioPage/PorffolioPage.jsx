import './PortfolioPage.css'

const PortfolioPage = ({
    portfolioStyle, 
}) => {
    return (
        <div className={`${portfolioStyle}`}>
            <h1 className='title'>My Portfolio</h1>
            <ul className='listed__links'>
                <li>
                    <a 
                        href='https://mkr-onboarding-fe.vercel.app/' 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        Full Stack To Do List
                    </a>
                </li>
                <li>
                    <a 
                        href='https://mkr-onboarding-fe.vercel.app/' 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        Clinica del gato
                    </a>
                </li>
                <li>
                    <a 
                        href='https://mkr-onboarding-fe.vercel.app/' 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        Proyecto Restaurante
                    </a>
                </li>
                <li>
                    <a 
                        href='https://mkr-onboarding-fe.vercel.app/' 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        IGN Playlist
                    </a>
                </li>
                <li>
                    <a 
                        href='https://mkr-onboarding-fe.vercel.app/' 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        Hoja de vida - React
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default PortfolioPage;