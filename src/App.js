import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios'
import EmployeeList from './components/EmployeeList'
import EmployeeForm from './components/EmployeeForm'
import Pagination from './components/Pagination'
import SearchForm from './components/SearchForm'

function App() {

  const [posts,setPosts] = useState([]);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(3)

  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/users')
         .then(res =>setPosts(res.data))
         .then(console.log(posts))
         .catch(err=>console.log(err))
    // Save the items in local storage 
    setPosts(JSON.parse(localStorage.getItem('employees')))
  },[])

  useEffect(()=>{
    localStorage.setItem('employees',JSON.stringify(posts))  
  })

  
  // Get CUrrent Posts
  const indexOfLastPost = currentPage*postsPerPage
  const indexOfFirstPost = indexOfLastPost -postsPerPage
  const currentPosts = posts.sort((a,b)=>a.name <b.name?-1:1).slice(indexOfFirstPost,indexOfLastPost)
  
  //Change Page 
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const addItem = (item) => {
    const newPosts = [...posts,item]
    setPosts(newPosts) 
    /*setPosts(...posts,item)*/
    console.log(newPosts)
  }

  const deleteItem = (id) => {
    const remainingItems = [...posts].filter(item=>item.id!==id)
    setPosts(remainingItems)
  }

  // serachName

  const searchedItem = (item) => {
    let names =posts.filter(post=> post.name.trim()===item.trim())
    setPosts(names)
  }


  return (
    <div className="App">
      <EmployeeForm posts={posts} addItem={addItem}/>
      <SearchForm searchedItem={searchedItem} posts={posts}/>
      <EmployeeList posts={currentPosts} deleteItem={deleteItem}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
      {!posts.length && (<div> There is no employee to search on </div>)}
    </div>
  );
}

export default App;
