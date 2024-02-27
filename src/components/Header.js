import React from 'react';
import './Header.css'
import '../components/Sidebar.css'



function Header() {
  return (
    <div className="Head">
      <header id='up'>
        <h1>Games crown</h1>
        <form>
            <input type='text' placeholder='   I want...' autoComplete='on'></input>
            <button>Search</button>
        </form>
        <nav>
            <button className='button1'>2024</button><> </>
            <button className='button2'>Shooters</button><> </>
            <button className='button3'>RGP'S</button>
        </nav>
      </header>
    </div>
  );
}

export default Header;
