
import './App.css';
import React, { useEffect, useState, useContext } from 'react';
// import FamilyList from './components/family';
import { ThemeContext } from './helper/context'
function App() {

  const { theme, handleTheme } = useContext(ThemeContext)
  console.log(theme)
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

  const handleClickDecrement = () => {

    setCount((prev) => {
      if (prev <= 0) {
        return prev
      }
      return prev - 1;
    });
  }

  const getUsers = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
    setUsers(users)


  }

  useEffect(() => {
    getUsers()
  }, [])
  // console.log(users)
  // console.log(count)
  return (
    <div className='App' style={{ background: theme }}>
      <h1 >{count}</h1>
      <button className='App' onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button className='App' onClick={handleTheme}>Log Theme</button>
      <button className='App' disabled={count < 1} onClick={handleClickDecrement}>Decrement</button>
      {/* <FamilyList /> */}
      <div>
        {users?.map((user) => {
          return (
            <li>{user.name}</li>
          )
        })}
      </div>
    </ div>
  );
}

export default App;
