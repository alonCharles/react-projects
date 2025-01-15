import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import NewPost from './components/Newpost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from './api/posts';
import EditPost from './components/EditPost';
import useWindowSize from './hooks/useWindowSize';
import useAxiosFetch from './hooks/useAxiosFetch';

function App() {
  const [posts, setPosts] = useState([])
const [search, setSearch] = useState('')
const [searchResults, setSearchResults] = useState([]);
const [postTitle, setPostTitle] = useState('')
const [postBody, setPostBody] = useState('')
const [editTitle, setEditTitle] = useState('')
const [editBody, setEditBody] = useState('')
const history = useNavigate();
const { width } = useWindowSize();

const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');

useEffect (() => {
  setPosts(data)
},[data])


useEffect(() => {
  const filteredResults = posts.filter(post => 
    ((post.body.toLocaleLowerCase()).includes(search.toLocaleLowerCase()))
      || ((post.title).toLocaleLowerCase().includes(search.toLocaleLowerCase())));
      setSearchResults(filteredResults.reverse())
},[posts, search])


const handleSubmit = async (e) => {
e.preventDefault()
const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
const newPost = { id, title:postTitle, dateTime, body:postBody };
try {
  const response = await api.post('/posts', newPost)
  const allPosts = [...posts, response.data]
  setPosts(allPosts)
  setPostTitle('')
  setPostBody('')
  history('/')
} catch (err) {
  console.log(err)
}

}

const handleDelete =  async (id) => {
  try{
    await api.delete(`/posts/${id}`)
    const postsList = posts.filter(post => post.id !== id)
    setPosts(postsList)
    history('/')
  } catch (err) {
    console.log(err)
  }
 
}

const handleEdit = async (id) => {
  const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
  const updatedPost = { id, title: editTitle, dateTime, body: editBody };
  try {
    const response = await api.put(`/posts/${id}`, updatedPost)
    setPosts(posts.map(post => post.id === id ? {...response.data} : post))
    setEditTitle('');
    setEditBody('');
    history('/')
  } catch (err) {
    console.log(err)
  }
}

  return (
    <div className="App">
      <Header title="Alon's Dev Blog" width={width}/>
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home posts={searchResults} fetchError={fetchError} isLoading={isLoading}/>}/>
        <Route path='/post' element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody}/>}/>
        <Route path='/edit/:id' element={<EditPost posts={posts} handleEdit={handleEdit} editTitle={editTitle} setEditTitle={setEditTitle} editBody={editBody} setEditBody={setEditBody}/>}/>
        <Route path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Missing/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
