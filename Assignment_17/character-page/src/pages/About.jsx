import aboutPhoto from '../assets/aboutPhoto.jpeg'

const About = () => {
    return(
        <div className="about">
            <img className='about-photo' src={aboutPhoto} alt='fleabag'/>
            <p>
                Fleabag is a thirty-three year old single woman and the main character of the eponymous series. She is played by Phoebe Waller-Bridge.
                <br/>
                Sarcastic, judgmental, and incredibly funny—although sometimes only to herself. Fleabag is a bit of an oddball and people are often confused by her dark sense of humor.
            </p>
        </div>
    )
}

export default About