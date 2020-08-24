import React from 'react';
import Grids from './components/Grids'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Projects from './components/Projects'

const App = () => {
    return(
        <div>
            <NavBar></NavBar>
            <Landing></Landing>
            <Projects></Projects>
        </div>
    );
}

export default App;