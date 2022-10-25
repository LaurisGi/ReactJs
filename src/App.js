import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data)=> {
      setPosts(data);
    })
  }, []);

  console.log(posts);

  const handleOnChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  }

  return (
      <div className='App'>
        <input className='form-control-lg form-control form-outline' onChange={handleOnChange}/>
        {posts
          .filter((post) => {
            return post.title.indexOf(inputValue) >= 0
          })
          .map((post)=> (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
        ))}
      </div>
  );
}

export default App;
