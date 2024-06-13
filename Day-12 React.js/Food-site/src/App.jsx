// Rafc - named export & Rafce - default export

import React, { useState } from 'react'
import './index.css'

// default export
const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const user = Users.find((usern) => {return usern.email === email && usern.pasword === password});
    if(user) {
      alert("Login Successfull");
      window.location.href = "https://www.google.com"
    } else {
      alert("Login Failed");
    }
  }


  const Users = [{
    email: "hajith@gmail.com",
    pasword: "123"
  },

  {
    email: "sam@gmail.com",
    pasword: "1234"
  }
  ]

  return (
    <>
    
    <h1>Login Page</h1>

    <form onSubmit={handleFormSubmit}>

      <div>
        <label htmlFor="email" className="text-red-600 text-5xl">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" className='' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button type="submit">Login</button>
    </form>
    
    </>

  )
}

export default App




// // named export
// export const App2 = () => {
//   return (
//     <>
//         <div>App2</div>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos neque corporis beatae suscipit saepe odio officia blanditiis? Veniam soluta harum praesentium doloremque, totam obcaecati nisi assumenda libero natus tenetur!</p>

//     </>
//   )
// }
