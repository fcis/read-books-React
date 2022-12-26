import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Book from '../Components/Book';

const SearchPage = ({BooksData,onChangeHandler,BooksAPI:API})=>{

    const [SearchInput,setSearchInput] = useState('');
    const [searchBooks,setSearchBooks]=useState([]);
    const [error,setError]=useState(false);
    const onSearchHandler = (event)=>{
            setSearchInput(event.target.value);
    }


    useEffect(() => {
      (async()=>{
        if(SearchInput.length >0)
        {
          const res =   await API.search(SearchInput);   
         res && res.length &&
         setSearchBooks(res)
        }
        else{
          setSearchInput("");
        }



      })()
      // if(SearchInput)
      // {
      // setoutputData(()=>{
      //   API.search(SearchInput).then(res=>{
      //     if(res.length> 0)
      //       myCurrentBookwithRetrieved(res);
      //     else
      //     {
      //       return null;
      //       setError(true);
      //     }
      //   })
      // })
    },[SearchInput])

    
    const onChangeHandlerData = (bookData,event)=>{
      
      var result = event.target.value;
      API.update(bookData,result).then(result =>{
        bookData.shelf = event;
        // BooksAPI.getAll().then( res =>{
        //   setBooksData(res);
        //   });     
         });
    };

return (
<div className="search-books">
<div className="search-books-bar">
  <Link to={"/"}
    className="close-search"

  >
    Close
  </Link>
  <div className="search-books-input-wrapper">
    <input
      type="text"
      placeholder="Search by title, author, or ISBN"
      onChange={onSearchHandler}
    />
  </div>
</div>
{/* <div className="search-books-results">
  /*<ol className="books-grid"></ol>
  {!error &&
  // <Book BooksData ={SearchInput} onChangeHandler={onChangeHandler} key={Math.random()}/>
      outputData
        .map((Mybook, Index) => (
        <Book BooksData={Mybook} onChangeHandler={onChangeHandlerData} key={Index} />
                  ))
}
  {error && (
            <li>Sorry, no results found !</li>
  )}
</div> */}
 <div className="search-books-results">
  <ol className="books-grid">
    {

         SearchInput&&searchBooks?.map((Mybook, Index) => {
        return (
          <li key={Index}><Book  BooksData={Mybook}  onChangeHandler={onChangeHandler}/></li>
          )
      })
    }
  </ol>
  </div>
</div>
)
};        
export default SearchPage;