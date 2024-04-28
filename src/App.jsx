import Header from './components/Header'
import initialEmails from './data/emails'
import { useState } from 'react'

import './styles/App.css'

function App() {
  // Use initialEmails for state
  // const [emailList, setEmailList] = useState([])
  const [emailData, setEmailData] = useState({
    id: '',
    read: '',
    sender: '',
    starred: '',
    title: 'sdgfhnsudghguygyu'
  })

  // setEmailList(
  //   ...emailList,
  //   initialEmails
  // )
  console.log(emailData)

const handleChange = (event) => {
  const {name, value} = event.target

  setEmailData({
    ...emailData,
    [name] : value
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
      <main className="emails">{/* Render a list of emails here */}
          {/* {emailList.map(email => {
            return (
              <> */}
                <li className="email">
                  <div className="select" name="read" onChange={handleChange}><input className="select-checkbox" value={emailData.read} type="checkbox"/></div>
                  <div className="star" name="starred" onChange={handleChange}><input className="star-checkbox" value={emailData.star} type="checkbox"/></div>
                  <div className="sender" name="sender" onChange={handleChange}> {emailData.sender} </div>
                  <div className="title" name="title" onChange={handleChange}> {emailData.title} </div>
                </li>
                <li className="email">
                  <div className="select" name="read" onChange={handleChange}><input className="select-checkbox" type="checkbox"/> {emailData.read} </div>
                  <div className="star" name="starred" onChange={handleChange}><input className="star-checkbox" type="checkbox"/> {emailData.starred} </div>
                  <div className="sender" name="sender" onChange={handleChange}> {emailData.sender} </div>
                  <div className="title" name="title" onChange={handleChange}> {emailData.title} </div>
                </li>
                <li className="email">
                  <div className="select" name="read" onChange={handleChange}><input className="select-checkbox" type="checkbox"/> {emailData.read} </div>
                  <div className="star" name="starred" onChange={handleChange}><input className="star-checkbox" type="checkbox"/> {emailData.starred} </div>
                  <div className="sender" name="sender" onChange={handleChange}> {emailData.sender} </div>
                  <div className="title" name="title" onChange={handleChange}> {emailData.title} </div>
                </li>
                <li className="email">
                  <div className="select" name="read" onChange={handleChange}><input className="select-checkbox" type="checkbox"/> {emailData.read} </div>
                  <div className="star" name="starred" onChange={handleChange}><input className="star-checkbox" type="checkbox"/> {emailData.starred} </div>
                  <div className="sender" name="sender" onChange={handleChange}> {emailData.sender} </div>
                  <div className="title" name="title" onChange={handleChange}> {emailData.title} </div>
                </li>
                <li className="email">
                  <div className="select" name="read" onChange={handleChange}><input className="select-checkbox" type="checkbox"/> {emailData.read} </div>
                  <div className="star" name="starred" onChange={handleChange}><input className="star-checkbox" type="checkbox"/> {emailData.starred} </div>
                  <div className="sender" name="sender" onChange={handleChange}> {emailData.sender} </div>
                  <div className="title" name="title" onChange={handleChange}> {emailData.title} </div>
                </li>
              {/* </>
            )
          })} */}
      </main>
    </div>
  )
}

export default App
