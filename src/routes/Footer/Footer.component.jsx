import { Outlet } from 'react-router-dom'
import './footer.styles.scss' 

const Footer = () => {
  return (
    <>
      <Outlet />
      <div className='footer-container'>
        <p className='footer'>Copyright &copy; 2022 Mohammad El Itani - All Rights Reserved</p>
      </div>
    </>
  )
}
export default Footer