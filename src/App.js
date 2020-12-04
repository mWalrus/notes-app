import React from "react"
import Header from "./components/header"
import "./css/main.css"

export default class App extends React.Component {
  render() {
    return (
      <div className='application'>
        <Header />
      </div>
    )
  }
}
