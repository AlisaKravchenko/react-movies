import {Header} from './layout/Header.jsx'
import {Footer} from './layout/Footer.jsx'
import {Main} from './layout/Main.jsx'
import React from 'react'

class App extends React.Component{

    render(){
        return (
            <React.Fragment>
                <Header />
                <Main />
                <Footer />
            </React.Fragment>
            )
    }
}
export default App;