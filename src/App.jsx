import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import StudentSigin from "./components/StudentSigin"

const App = () => {
  return (
    <Router>
        <StudentSigin/>
    </Router>
  )
}

export default App
