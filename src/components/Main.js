import React from 'react';
import './Main.css';
import image from '../image/BF1.jpg';
import image2 from '../image/DOOM.webp';
import image3 from '../image/STALKER.jpg';
import image4 from '../image/SONSOFFOREST.jpg';
import image5 from '../image/TLOU.webp';
import image6 from '../image/SKYRIM.jpg';
import image7 from '../image/ENLISTED.jpg';
import image8 from '../image/GODOFWAR.webp';




function Main() {
    const imageStyle = {
        borderRadius: '10px',
        width: '250px',
        height: '340px'
      };
  return (
    <div className='Main'>
        <div className='item1'>
            <img src={image} alt='Battlefield 1' style={imageStyle}></img>
        </div>
        <div className='item2'>
            <img src={image2} alt='Doom' style={imageStyle}></img>
        </div>
        <div className='item3'>
            <img src={image3} alt='Stalker' style={imageStyle}></img>
        </div>
        <div className='item4'>
            <img src={image4} alt='Sons of Forest' style={imageStyle}></img>
        </div>
        <div className='item5'>
            <img src={image5} alt='TLOU' style={imageStyle}></img>
        </div>
        <div className='item6'>
            <img src={image6} alt='Skyrim' style={imageStyle}></img>
        </div>
        <div className='item7'>
            <img src={image7} alt='Enlisted' style={imageStyle}></img>
        </div>
        <div className='item8'>
            <img src={image8} alt='God of War' style={imageStyle}></img>
        </div>
    </div>
  );
}

export default Main;
