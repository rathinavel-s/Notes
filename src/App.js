
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Missing from "./components/Missing";
import Nav from "./components/Nav";
import Newpost from "./components/Newpost";
import PostPage from "./components/PostPage"
import { useEffect, useState } from "react";
import { format } from "date-fns/format";
import { Route, Routes, useNavigate } from "react-router-dom";


function App() {
  const [posts, setpost] =  useState(() => {
    // Retrieve posts from local storage or initialize with default posts
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [
      {
        id: 1,
        title: "My first post",
        datetime: "July 01, 2023",
        body: "Made a video about Tesla."
      },
      {
        id: 2,
        title: "My second post",
        datetime: "July 02, 2023",
        body: "Made another video about Tesla."
      },
      {
        id: 3,
        title: "My third post",
        datetime: "July 03, 2023",
        body: "Made yet another video about Tesla."
      },
    ];
  });
  const [search, setsearch] = useState("")
  const [searchresult, setsearchresult] = useState([])
  const [postTitle, setPostTitle] = useState("")
  const [postBody, setpostBody] = useState('')
  const navigate=useNavigate()

  useEffect(() => {
    const filterSearch = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
      ((post.title).toLowerCase()).includes(search.toLowerCase())
    );
    setsearchresult(filterSearch.reverse());
  }, [posts, search]);

  useEffect(() => {
    // Save posts to local storage whenever they change
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);
  const handlesubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = { id, title: postTitle, datetime, body: postBody }
    const allPosts = [...posts, newPost]
    setpost(allPosts)
    setPostTitle('')
    setpostBody('')
    navigate('/')
  }

  const handleDelete = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setpost(newPosts);
    navigate('/')
  };

  return (
    <div className="App">

      <Header title="rathinavel" />

      <Nav
        search={search}
        setsearch={setsearch}
      />
      <Routes>
        <Route path="/" element={<Home
          posts={searchresult} />} />
        <Route path="post">
        <Route index element={<Newpost
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          handlesubmit={handlesubmit}
          postBody={postBody}
          setpostBody={setpostBody} />} /> 
          <Route path=":id" element={<PostPage 
            posts={posts} handleDelete ={handleDelete} />}/></Route>
        <Route path="about" element={<About />}/>
        <Route path="*" element={<Missing />}/>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
