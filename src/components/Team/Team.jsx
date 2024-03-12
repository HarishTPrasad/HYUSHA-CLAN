import React, { useState, useEffect } from 'react';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img4.jpg'
import img4 from './assets/img3.jpg'
// import myImage from './assets/team.png'

export default function Team() {


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

<section id="team" class="section">
      <div class="sectionContainer" >

<div class="Head" >
  <div class="Head1">

  <h1 class="myprojecth">Our K-POP Collections</h1>

  </div>
  <div class="Head2">

  <p class="myprojectp" ><i class="fa-brands fa-wpexplorer"></i> That includes Cards, Stikers, Posters and much more</p>

  </div>
</div>


<div class="Pro">
    <div class="UniqueProjects" >

    <div class="UniqueCard">

        <div class="UniqueProfilePic">
        <img src={img3} alt="https://wall.alphacoders.com/big.php?i=1334174"/>
        </div>

        <div class="UniqueDetails">
            <div class="UniqueContent">
                <h2>BTS</h2>
                <p class="UniqueTag">COLLECTIONS</p>
                <p class="UniqueAbout">  the Bantan Boys, Team 7 Jin_Suga_Rm_Jimin_V_Jungkook Welcome to Purpal Army</p>
            </div>

            <div class="UniqueButtons">
                <div class="UniqueSocial">
                <a href="https://www.instagram.com/hyusha_clan/" >
        <i class="fa-brands fa-instagram"></i>
        </a>

                </div>
                <a href="https://www.instagram.com/hyusha_clan/" class="link">Order Now  <i class="fa-solid fa-up-right-from-square"></i></a>
            </div>

        </div>

    </div>

    <div class="UniqueCard">

<div class="UniqueProfilePic">
<img src={img2} alt="https://wall.alphacoders.com/big.php?i=1334174"/>
</div>

<div class="UniqueDetails">
    <div class="UniqueContent">
        <h2>BLACKPINK</h2>
        <p class="UniqueTag">COLLECTIONS</p>
        <p class="UniqueAbout">"You say I'm good because you're a Blink."</p>
    </div>

    <div class="UniqueButtons">
        <div class="UniqueSocial">
        <a href="https://www.instagram.com/hyusha_clan/" >
        <i class="fa-brands fa-instagram"></i>
        </a>
  
    
  
        </div>
        <a href="https://www.instagram.com/hyusha_clan/" class="link">Order Now  <i class="fa-solid fa-up-right-from-square"></i></a>
    </div>

</div>

</div>

<div class="UniqueCard">

<div class="UniqueProfilePic">
<img src={img4} alt="https://wall.alphacoders.com/big.php?i=1334174"/>
</div>

<div class="UniqueDetails">
    <div class="UniqueContent">
        <h2>EXO</h2>
        <p class="UniqueTag">COLLECTIONS</p>
        <p class="UniqueAbout"> Even if i give you my everything it's not Enough </p>
    </div>

    <div class="UniqueButtons">
        <div class="UniqueSocial">
        
        <a href="https://www.instagram.com/hyusha_clan/" >
        <i class="fa-brands fa-instagram"></i>
        </a>
   
    
        </div>
        <a href="https://www.instagram.com/hyusha_clan/" class="link">Order Now  <i class="fa-solid fa-up-right-from-square"></i></a>
    </div>

</div>

</div>

<div class="UniqueCard">

<div class="UniqueProfilePic">
<img src={img1} alt="https://wall.alphacoders.com/big.php?i=1334174"/>
</div>

<div class="UniqueDetails">
    <div class="UniqueContent">
        <h2>ALL K-POP BANDS</h2>
        <p class="UniqueTag">CLLECTIONS</p>
        <p class="UniqueAbout"> All BANDS are here come and choose </p>
    </div>

    <div class="UniqueButtons">
        <div class="UniqueSocial">
        <a href="https://www.instagram.com/hyusha_clan/" >
        <i class="fa-brands fa-instagram"></i>
        </a>
 
        </div>
        <a href="https://www.instagram.com/hyusha_clan/" class="link">Order Now <i class="fa-solid fa-up-right-from-square"></i></a>
    </div>

</div>

</div> 

</div>
</div>


      </div>
  </section>
    </>
    


  )
}
