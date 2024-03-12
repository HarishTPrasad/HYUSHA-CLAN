import React, { useState, useEffect } from 'react';
import myImage from './assets/logo1.png';



export default function Home() {


  
  const [text, setText] = useState(' HELLO ');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) => (prevText === ' HELLO ' ? ' HEYY!! ' : ' HELLO '));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);



  return (
    <>


<section id="home" class="section"  >
    <div class="section__container">
     
      <div class="content" >
        <p class="subtitle">hey</p>
        <h1 class="title">
          We're <span>Hyusha Clan<br/>a</span> Trending Merchandise
        </h1>
        <p class="description"> <i class="fa-solid fa-wand-magic-sparkles"></i>
        
         
          Share your Smile, Express your Style: Attractive cards for every fans in all Occasions. So Instead of playing cards with people we sell bliss cards to people.
        

        </p>
        <div class="action__btns">
        <a href="https://www.instagram.com/hyusha_clan/" class="link">
          <button class="hire__me"><i class="fa-solid fa-bolt fa-fade"></i>Order </button> </a>
          <a href="https://www.instagram.com/hyusha_clan/" class="link">
          <button class="portfolio">Customization</button></a>
        </div>
      </div>

      <div class="image">
        <img src={myImage} alt="profile" />
      </div>
     
    </div>
  </section>
    
    
    </>

  )
}
