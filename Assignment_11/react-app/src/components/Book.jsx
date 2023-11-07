const Book = ({image, title, description, characters, show}) => {

    return (
        <div className="book">
            <img className="image" src={image} alt={title} />
            <h1> {title} </h1>
            <p className="description">{description}</p>
            <button onClick={() => show(title, characters)} className="btn">Book details</button>
        </div>
    )
}

export default Book 