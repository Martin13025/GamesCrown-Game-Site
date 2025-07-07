import React from 'react';
import './Footer.css';
import easteregg from '../image/CATEGG.gif'

function Footer() {
  const imageCat = {
        borderRadius: '5px',
        width: '200px',
        height: '240px',
      };
  return (
    <div className="Footer">
      <footer>
        <h1>GamesCrone</h1>
        <a href='./'>Site map</a>
        <a className='up' href='#up'>UP</a>
            <div className='black'>
                <p> 
                    Welcome to Gamescrone, your ultimate destination for all things gaming! Immerse yourself in a world where the latest game releases, in-depth reviews, and captivating industry insights come together to create a haven for gamers of every stripe.<br />
                    Whether you're a passionate player seeking the latest AAA titles, an indie game enthusiast exploring hidden gems, or a fan of classic games looking for a nostalgic journey, our platform is designed to cater to all gaming preferences.<br />
                    Stay on the pulse of the gaming industry with our insightful articles and engaging content. Gamescrone is your go-to source for staying informed and connected to the ever-evolving world of gaming.<br /><br />
                    Join our vibrant community, where fellow gamers share experiences, tips, and recommendations. Gamescrone is more than a website; it's a thriving ecosystem where gaming enthusiasts unite to celebrate their shared passion.<br /><br />
                    Whether you're a casual gamer, a competitive esports aficionado, or someone exploring the gaming universe for the first time, Gamescrone is your digital companion on this exciting journey. Level up your gaming experience with us and let the adventure begin!<br /><br />      
                    <div className='easteregg'>
                        <img src={easteregg} alt='Cat' style= {imageCat}></img>
                    </div>
                </p>
                <div className='black'></div>
            </div>
      </footer>
    </div>
  );
}

export default Footer;
