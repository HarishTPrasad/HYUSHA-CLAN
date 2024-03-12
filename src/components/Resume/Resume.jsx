import React from 'react'
import img1 from './assets/ss2.jpg'
import img2 from './assets/ss4.jpg'
import img3 from './assets/ss1.jpg'
import img4 from './assets/ss3.jpg'

export default function Resume() {


  return (
    <>

<section id="resume" class="section">
      <div class="sectionContainer" >

<div class="Head" >
  <div class="Head1">

  <h1 class="myprojecth">Our Series and Music Collections</h1>

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
                <h2>MCU</h2>
                <p class="UniqueTag">Marvel Collection</p>
                <p class="UniqueAbout">  "With greate powers there comes greate responsibilities" -- PETER PARKER</p>
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
        <h2>Music And Singers</h2>
        <p class="UniqueTag">Artist that Satisfies</p>
        <p class="UniqueAbout">“One good thing about music, when it hits you, you feel no pain" -- HYUSHA CLAN</p>
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
        <h2>SERIES</h2>
        <p class="UniqueTag">COLLECTION</p>
        <p class="UniqueAbout"> To go deep in character you should follow that character. </p>
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
        <h2>DRAMA</h2>
        <p class="UniqueTag">COLLECTIONS
</p>
        <p class="UniqueAbout"> 'When you don't know the move make steps towards DRAMA' </p>
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
