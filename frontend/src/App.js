import Header from "./components/Header";
import React, { useEffect } from "react";
import { Routes,Route } from "react-router-dom";
import Auth from "./components/Auth";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import Blogs from "./components/Blogs";
import AddBlog from "./components/AddBlog";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
// import Opening from "./components/Opening";
function App() {
  const dispath=useDispatch();
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(()=>{
    if(localStorage.getItem("userId")){
     dispath(authActions.login());
    }
  },[dispath]);
  return <React.Fragment>
    <header>
      <Header/>
      {/* <Opening/> */}
    </header>
    <main>
      <Routes>
       { !isLoggedIn ? <Route path="/auth" element={<Auth/>}/>:
         <> 
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/add" element={<AddBlog/>}/>
        <Route path="/myBlogs" element={<UserBlogs/>}/>
        <Route path="/myBlogs/:id" element={<BlogDetail/>}/>
        </> }
        </Routes>
    </main>
    </React.Fragment>
}

export default App;
