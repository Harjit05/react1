import Header from './Header'
import Logo from './Logo'
import Container from './Container'
import Reviews from './Reviews'
import Statistics from './Statistics'
import News from './News'
import Subscription from './Subscription'
import Footer from './Footer'
import './App.css'

import Copyright from './Copyright'

function Theme() {
  return (
    <>
     <div className="site">
       <Header/>
       <Logo/>
        <Container/>
    </div>
    <Reviews/>
   <Statistics/>
   <News/>
   <Subscription />
    <Footer/>
   <Copyright/>

    </>
  )
}

export default Theme