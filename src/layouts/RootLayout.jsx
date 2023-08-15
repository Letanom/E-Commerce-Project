
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'







const RootLayout = ({ children }) => {
    
    return (
        <div className='root-layout'>
            <Header />
            <Navbar />
         
           

            <main>
                {children}
                <Footer/>
            </main>
        </div>
    )
}

export default RootLayout