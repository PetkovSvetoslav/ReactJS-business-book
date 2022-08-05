import React from 'react'

const Header = ({handleToggleDarkMode}) => {
    return (
        <div className="header">
            
             {/*the title of our simle app*/}

        <h1><span style={{color:"#00d0ff"}}>My Business </span> Book</h1>

         {/*this is our toggle button 
        using this button we can change the background theme for our application*/}

        <button 
        onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} 
        className="save">Color Mode</button>
        </div>
    )
}

export default Header