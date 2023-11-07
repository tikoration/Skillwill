import Book from './Book'
import data from "./data"

const BookList = () => {

    function show(title, characters) {
        console.log(title, characters)
    }

  return (
    <div className='book-list'>
        {data.map((book) => 
            <Book 
                key={book.id}
                title={book.title}
                image={book.image}
                description = {book.description}
                characters = {book.characters}
                show={show}
            />
        )}
    </div>
  )
}

export default BookList