import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phoneNum}`);

    navigate('/');  // navigates the user to home 
  }

  return (
    <>
      <h1>Contact</h1>
      <form onSubmit={submitHandler}>
        <label>
          Name
          <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
        </label>
        <label>
          phoneNum
          <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phoneNum} onChange={(e) => {setPhoneNum(e.target.value)}} />
        </label>
        <br />
        <button type="submit">Submit!!</button>
      </form>
      <p>lorem ipsum</p>
    </>
  )
}

export default Contact;