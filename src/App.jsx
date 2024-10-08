import { useState } from "react"


const App = () => {
  const [user, setuser] = useState([])
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [city, setcity] = useState("")
  const [gender, setgender] = useState("")

  const submitHandler = (e) =>{
    e.preventDefault();
    const newuser = {username, password, city, gender}
    console.log({username, password, city,gender})
  }


  return (
    <div>
      <form onSubmit={submitHandler}>
         <input type="text"
          placeholder="username" 
          onChange={(e) =>setusername(e.target.value)} />

         <input type="password"
          placeholder="password" 
          onChange={(e) =>setpassword(e.target.value)} />


          <select onChange={(e) =>setcity(e.target.value)}>
            <option value="bhopal">bhopal</option>
            <option value="rewa">rewa</option>
            <option value="indor">indor</option>
            <option value="satana"></option>
            <option value="gujrat"></option>
          </select>
          <label>
            <input type="radio" name="gender" onChange={(e) =>setgender(e.target.value)} value="male" />male
            <input type="radio" name="gender" onChange={(e) =>setgender(e.target.value)} value="female" />female
            <input type="radio" name="gender" onChange={(e) =>setgender(e.target.value)} value="other" />other
          </label>

          <button>Submit</button>



         </form>
         <hr />
         
    </div>
  )
}

export default App
