import { render } from '@testing-library/react'
import './HeaderComponent.css'

const Header_component = ({
    aboutStyle, 
    setAboutStyle,
    portfolioStyle,
    setPortfolioStyle,
    contactStyle,
    setContactStyle
}) => {

    const aboutClickHandler = () => {
        // aboutStyle === 'none' ? setAboutStyle('render') : setAboutStyle('none');
        // portfolioStyle === 'none' ? setPortfolioStyle('render') : setPortfolioStyle('none');
        if(aboutStyle === 'none'){
            setAboutStyle('render');
            setContactStyle('none');
            setPortfolioStyle('none');
        } else if (aboutStyle === 'render'){
            setPortfolioStyle('render');
            setContactStyle('none');
            setAboutStyle('none');
        }
    }
    const portfolioClickHandler = () => {
        // portfolioStyle === 'none' ? setPortfolioStyle('render') : setPortfolioStyle('none');
        // aboutStyle === 'none' ? setAboutStyle('render') : setAboutStyle('none');
        if (portfolioStyle === 'none') {
            setPortfolioStyle('render');
            setContactStyle('none');
            setAboutStyle('none');
        } else if (portfolioStyle === 'render') {
            setPortfolioStyle('none');
            setContactStyle('none');
            setAboutStyle('render')
        }
    }
    const contactClickHandler = () => {
        // contactStyle === 'none' ? setContactStyle('render') : setContactStyle('none');
        // portfolioStyle === 'none' ? setPortfolioStyle('render') : setPortfolioStyle('none');

        if (contactStyle === 'none') {
            setAboutStyle('none');
            setPortfolioStyle('none');
            setContactStyle('render');
        } else if(contactStyle=== 'render') {
            setAboutStyle('render');
            setPortfolioStyle('none');
            setContactStyle('none')
        }
    }

    return(
        <article className='header'>
            <p>
                <b>
                    <a 
                        href='https://www.linkedin.com/in/nicolas-rodriguez-chaves1/' 
                        target="_blank"
                        rel='noreferrer'
                    >
                        Nicolás Rodríguez
                    </a>
                </b>
            </p>
            <p
                onClick={aboutClickHandler}
            >
                About
            </p>
            <p
                onClick={portfolioClickHandler}
            >
                Portfolio
            </p>
            <p 
                onClick={contactClickHandler}
            >
                Contact
            </p>
        </article>
    )
}

export default Header_component;