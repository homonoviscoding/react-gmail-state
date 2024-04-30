import Header from './components/Header'
import initialEmails from './data/emails'
import { useState } from 'react'

import './styles/App.css'

function App() {
  // Use initialEmails for state
  const [emailList, setEmailList] = useState(initialEmails)
  const [emailData, setEmailData] = useState({
    id: '',
    read: '',
    sender: '',
    starred: '',
    title: ''
  })

  // setEmailList(
  //   ...emailList,
  //   initialEmails
  // )
  console.log(emailData)

const handleChange = (event) => {
  const {name, checked} = event.target

  setEmailData({
    ...emailData,
    [name] : checked
  })
}
  
  // console.log(initialEmails[0])

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
      {emailList.map(email => {
        return (
          <>
            <li className="email">
              <div className="select" name="read"><input className="select-checkbox" onChange={handleChange} checked={email.read} type="checkbox"/></div>
              <div className="star" name="starred"><input className="star-checkbox" onChange={handleChange} checked={email.star} type="checkbox"/></div>
              <div className="sender" name="sender"> {email.sender} </div>
              <div className="title" name="title"> {email.title} </div>
            </li>
          </>
        )
      })}          
      </main>
    </div>
  )
}

export default App
