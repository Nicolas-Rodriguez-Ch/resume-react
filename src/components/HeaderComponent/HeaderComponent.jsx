import './HeaderComponent.css'
import { useState } from "react";

const Header_component = ({
    style, 
    setStyle,
    renderFunction
}) => {

    const clickHandler = () => {
        setStyle('render__contact');
        console.log('click')
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
            <p>
                About
            </p>
            <p>
                Portfolio
            </p>
            <p 
                onClick={clickHandler}
            >
                Contact
            </p>
        </article>
    )
}

export default Header_component;