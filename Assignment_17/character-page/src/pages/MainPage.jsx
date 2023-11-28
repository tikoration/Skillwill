import characterPhoto from '../assets/characterPhoto.jpeg'

const MainPage = () => {
    return(
        <div>
            <img className="character-photo" src={characterPhoto} alt="Fleabag"/>
            <h1>Fleabag</h1>
        </div>
    )
}

export default MainPage