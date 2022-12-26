import BookShelf from "../Components/BookShelf";
const HomePage = ({BooksData,onChangeHandler})=>
{
// add files to the page
    return(
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
            <BookShelf  BooksData = {BooksData} onChangeHandler = {onChangeHandler}
            />
    </div>
    {/* <div className="open-search">
       <Link to="/search"> Add a Book</Link>
    </div> */}
  </div>
)};
export default HomePage;