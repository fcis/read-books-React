import BookShelfSelect from "./BookShelfSelect";
// import "./App.css";
const Book  = ({BooksData,onChangeHandler}) => {
       return(
        <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${BooksData.imageLinks?.thumbnail}}`,
            }}
          ></div>
        <BookShelfSelect BooksData ={BooksData} onChangeHandler={onChangeHandler} />
        </div>
        <div className="book-title">{BooksData.title}</div>
        <div className="book-authors">{BooksData.authors}</div>
      </div>
     )
};
export default Book;