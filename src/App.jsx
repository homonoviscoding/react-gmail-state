import Header from './components/Header'
import initialEmails from './data/emails'
import { useState } from 'react'

import './styles/App.css'

function App() {
  // Use initialEmails for state
  const [emailList, setEmailList] = useState([])

  setEmailList(
    initialEmails
  )
  // emailList.push(initialEmails)
  
  
  // console.log(initialEmails)

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
      <main className="emails">{/* Render a list of emails here */}
        <ul>
          {initialEmails.map(email => {
            return (
              <>
                <li>{email[0]}</li>
                {/* <li>{email[1]}</li>
                <li>{email[2]}</li>
                <li>{email[3]}</li>
                <li>{email[4]}</li> */}
              </>
            )
          })}
        </ul>
      </main>
    </div>
  )
}

export default App
