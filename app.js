import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './Images/app_logo.jpeg'
import nowSin from './Images/Nowsin_logo.jpg'

const Header = () => {
  return (
    <div className='header'>
      <div className='logocontainer'>
        <img  className="logo"src={logo}></img>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ()=>{
  return(
    <div className='res-card'>
      <img className='logo-nowsin' alt='logo-briyani' src={nowSin} />
      <h3> Nowsin Briyani</h3>
      <div className='about'> 
      <h4>Briyani, Asian, Arabian, Chinese</h4>
      <h4>4.4 stars</h4>
      <h4>ETA: 5 mins</h4>
      </div>
    </div>
  )
}
const Body = ()=>{
  return(
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/><RestaurantCard/></div>
    </div>
  )
} 

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

export default AppLayout;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
