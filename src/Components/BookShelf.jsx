import Book from "./Book";
// import "./App.css";
const BookShelf  = ({BooksData,onChangeHandler}) => {
     return(
      <div>
            < div className="bookshelf">
             <h2 className="bookshelf-title">Currently Reading</h2>  
            <div className="bookshelf-books">
              <ol className="books-grid">
              {BooksData
                  .filter((Mybook) => Mybook.shelf === "currentlyReading")
                  .map((Mybook, Index) => (
                    <Book BooksData={Mybook} onChangeHandler={onChangeHandler} key={Index} />
                  ))}
  
              </ol>
            </div>
          </div>

          < div className="bookshelf">
             <h2 className="bookshelf-title">Want to Read</h2>  
            <div className="bookshelf-books">
              <ol className="books-grid">
              {BooksData
                  .filter((Mybook) => Mybook.shelf === "wantToRead")
                  .map((Mybook, Index) => {
                    return (
                      <li key={Index}><Book BooksData={Mybook} onChangeHandler={onChangeHandler}/></li>
                      )
                  })
                }
  
              </ol>
            </div>
          </div>

          < div className="bookshelf">
             <h2 className="bookshelf-title">Read</h2>  
            <div className="bookshelf-books">
              <ol className="books-grid">

              {BooksData
                  .filter((Mybook) => Mybook.shelf === "read")
                  .map((Mybook, Index) => (
                    <Book BooksData={Mybook} onChangeHandler={onChangeHandler} key={Index} />
                  ))}
  
              </ol>
            </div>
          </div>
      </div>
      

     
)};
export default BookShelf ;