
import './App.css';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';
import { useState } from 'react';

function App() {
  const [usersList,setUsersList]= useState([]);

  const addUserHandler=(uName,uAge)=> {
    setUsersList((prevUsersList)=>{
      return[...prevUsersList,{name: uName, age: uAge, id: Math.random().toString()}];
    });
  }; 


  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
