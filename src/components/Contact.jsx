import { useState } from "react"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phoneNum}`);
  }

  return (
    <>
      <h1>Contact</h1>
      <form onSubmit={formSubmit}>
        <label>
          Name
          <input value={name} onChange={(e) => {setName(e.target.value)}} />
        </label>
        <label>
          Email
          <input value={email} onChange={(e) => {setEmail(e.target.value)}} />
        </label>
        <label>
          phoneNum
          <input value={phoneNum} onChange={(e) => {setPhoneNum(e.target.value)}} />
        </label>
        <br />
        <button type="submit">Submit!!</button>
      </form>
      <p>lorem ipsum</p>
    </>
  )
}

export default Contact