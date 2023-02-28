import './ContactPage.css'
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { AiOutlineMail, AiTwotonePhone } from 'react-icons/ai'

const ContactPage = ({
    contactStyle, 
})=>{
    return (
        <div className={`${contactStyle}`}>
            <ul>
                <li className='contactPage__listedItem'>
                    <AiTwotonePhone className='contactPage__icons'/>
                    Phone number: +57 300 234 3270
                </li>
                <li className='contactPage__listedItem'>
                    <BsLinkedin className='contactPage__icons'/>
                    <a 
                        href='https://www.linkedin.com/in/nicolas-rodriguez-chaves1/' 
                        target="_blank"
                        rel='noreferrer'
                    >
                        LinkedIn Page
                    </a>
                </li>
                <li className='contactPage__listedItem'>
                    <BsTwitter className='contactPage__icons'/>
                    <a 
                        href='https://twitter.com/NicoR_WebDev' 
                        target="_blank"
                        rel='noreferrer'
                    >
                        Twitter
                    </a>
                </li>
                <li className='contactPage__listedItem'>
                    <AiOutlineMail className='contactPage__icons'/>
                    Email: nicolasrodriguezch@hotmail.com || nicolasrodriguezch@gmail.com
                </li>
            </ul>
        </div>
    )
}

export default ContactPage;