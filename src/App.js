import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/Navbar/navbar.component'
import Footer from './routes/Footer/Footer.component'
import Contact from './routes/contact/contact.component'
import Cart from './routes/cart/cart.component'
import Authentication from './routes/authentication/authentication.component'

const Shop = () => {
   return (
      <>
         <h1>SHOP</h1>
         <h3>
            This Project was made as a practice for
            authentication with firebase and most components
            are empty!
         </h3>
      </>
   )
}

const App = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigation />}>
            <Route path='/' element={<Footer />}>
               {/* index is shorthand to index={true}, it tells the browser that this is the homepage */}
               <Route index element={<Home />} />
               <Route path='/shop' element={<Shop />} />
               <Route
                  path='/contact'
                  element={<Contact />}
               />
               <Route
                  path='/auth'
                  element={<Authentication />}
               />
               <Route path='/cart' element={<Cart />} />
            </Route>
         </Route>
      </Routes>
   )
}

export default App
