import "./App.css";
import { useState ,useEffect,Fragment } from "react";
import SearchPage from "./pages/Search";
import HomePage from "./pages/Home";
import * as BooksAPI from "./BooksAPI"

import {   BrowserRouter ,   Routes,  Route,  
  Link  }  from 'react-router-dom';
 

function App() {

  const [showSearchPage, setShowSearchpage] = useState(false);
  const [BooksData,setBooksData]= useState([]);

  useEffect(()=>{
    const getBooksData = async ()=>{
      const res = await BooksAPI.getAll();
      setBooksData(res);
    }
    getBooksData();
    },[])
    
    const onChangeHandler = (bookData,event)=>{
      
      var result = event.target.value;
      BooksAPI.update(bookData,result).then(result =>{
        bookData.shelf = event;
        BooksAPI.getAll().then( res =>{
          setBooksData(res);
          });     
         });
    };
    
  return (

    <BrowserRouter>
    <div className="app">
       
        <Routes>
        <Route
        path="/search"
        element={<SearchPage  BooksData ={BooksData} BooksAPI={BooksAPI} onChangeHandler={onChangeHandler} />}
        />
       <Route
       path="/"
       element={<HomePage BooksData={BooksData} onChangeHandler={onChangeHandler} />}
        />
        </Routes>
      
    </div>
     <div className="open-search">
       <Link to="/search"> Add a Book</Link>
    </div>
    </BrowserRouter>
  );
}

export default App;
