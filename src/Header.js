import React from 'react'
import { Link, } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Key, ShoppingBasket } from '@mui/icons-material';
import CheckOut from './CheckOut';
import { useStateValue } from './StateProvider';


function Header({searchTerm, setSearchTerm}) {

  const [{basket}] = useStateValue();
  console.log(basket);

  return (
    <nav className='header'>
        <Link to="/">
        <img className='header_logo' src="/amazon_PNG11.png" alt="" />
        {/* <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/> */}
        </Link>
        <div className='header_search'>
        <input type="text" className='header_searchInput' onChange={(event) => {
        setSearchTerm(event.target.value);
      }} />

        <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
          <Link to="/Login" className='header_link'>
          <div className='header_option'>
          <span className='header_optionLineOne'>Hello</span>
          <span className='header_optionLineTwo'>Sign In</span>
          </div>
          </Link>

          <Link to="/Rules" className='header_link'>
          <div className='header_option'>
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>
          </div>
          </Link>

          <Link to="/" className='header_link'>
          <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
          </div>
          </Link>

          <Link to="/CheckOut" className='header_link'>
          <div className='header_optionBasket'>
          <ShoppingBasket/>
            <span className='header_optionLineTwo header_basketCount' >{basket?.length}</span>
          </div>
          </Link>
        </div>
    </nav>
  )
}

export default Header
