// import "./App.css";
const BookShelfSelect  = ({BooksData,onChangeHandler}) => {

  const changeHandler = (e)=>{
    onChangeHandler(BooksData,e);
  }
     return (
        <div className="book-shelf-changer">
        <select value={BooksData.shelf?BooksData.shelf : "Not"} onChange = {changeHandler} >

          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">
            Currently Reading
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="Not">None</option>
        </select>
      </div>
     )
};

export default BookShelfSelect;