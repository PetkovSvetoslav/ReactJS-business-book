import React, { useState,useEffect } from 'react'
import {nanoid} from 'nanoid'
import Begin from './components/common/Begin.js'
import LoginForm from './components/LoginForm.js';
import Header from './components/common/Header';
import Search from './components/notes/Search';
import NotesList from './components/notes/NotesList'
import  Title  from './components/common/Title';
import  {UserList}  from './components/user-list/UserList.js';
import { Footer}  from './components/common/Footer.js';
import './App.css';


function App() {

  //login form static user 
  const adminUser = {
    email: "admin@admin.com",
    password: "admin"
  }
  // here we are adding users validation
  const [user, setUserIn] = useState({name: "", email: ""});
  // this catch if ditails is not correct
  const [error, setError] = useState("");
  // function to login
  const Login = details => {
    if(details.email === adminUser.email && details.password === adminUser.password){
      setUserIn({
  name: details.name,
  email: details.email
      });
    } else {
      setError("Details do not match!");
    }
  }
  // function to logout
  const Logout = () => {
    setUserIn({name: "", email: ""});
  }


// here we are adding static notes in our useState hooks for notes*/}
  const [notes,setNotes] = useState([
    {
    id: nanoid(),
    text:"This is my first note",
    date:"03/11/2021"
  },
]);

// {/*this are the staes for searching text and toggle mode*/}
const [searchNote,setSearchNote] = useState('');
const [darkMode,setDarkMode] = useState(false)
// {/*to store or save the data in local storage even after closing the tab*/}

useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
  if(savedNotes){
    setNotes(savedNotes)
  }
},[])

// {/*this is for saving the app data in local storage*/}

useEffect(()=>{
  localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
},[notes])

// {/*this function is for adding new note*/}

const addNote = (text) =>{
  
  const date = new Date();
  const newNote = {
    id:nanoid(),
    text : text,
    date : date.toLocaleDateString()
  }
  const newNotes = [...notes,newNote]
  setNotes(newNotes)
}

// {/*this function is for deleting notes in note app with a id*/}

const deletingNote = (id) =>{
 const newNotes = notes.filter((note)=> note.id!==id);
 setNotes(newNotes)
}

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
          <div className="container">
     {/* .... */}
     <Begin handleToggleDarkMode={setDarkMode}/>
   {/* welcome & logout btn  when login right*/}
     {(user.email !== "")
      ?
     (<div className="welcome">
      <h2>Welcome, <span>{user.name}</span></h2> 
      <button onClick={Logout}>Logout</button>
      </div>)
      :
      (
        <LoginForm Login={Login} error={error}/>
      )
      }
    
     {/* .... */}

      <Header handleToggleDarkMode={setDarkMode}/>
     
      <Search handleSearch={setSearchNote}/>
      
      <NotesList 
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchNote))}
       handleAddNote={addNote} 
       handleDelete={deletingNote}
       />
 {/* .... */}
    <Title />

    <div>
<main className="main">
    <section className="card users-container">
        <UserList />
    </section>
</main>
</div>
 {/* .... */}

<Footer />

    </div>
    </div>

  )
}

export default App
