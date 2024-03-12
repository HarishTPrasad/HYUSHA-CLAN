
import React from 'react';
import './Project.css';
import img1 from  './assets/sports1.jpg';
import img2 from  './assets/sports2.jpg';
import img3 from  './assets/sports3.jpg';
import img4 from  './assets/sports4.jpg';


export default function Project() {
  return (
   <>
   
<div class="Head" id="projects">
  <div class="Head1">

  <h1 class="myprojecth">Our Sports Collection</h1>

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
                <h2>CRICKET</h2>
                <p class="UniqueTag">COLLECTION</p>
                <p class="UniqueAbout">  "You don't need to play every ball but every ball needs your judgement."</p>
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
        <h2>FOOTBALL</h2>
        <p class="UniqueTag">COLLECTION</p>
        <p class="UniqueAbout">"Champions never sleep, the eternal spirit keep them alert and awake."</p>
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
        <h2>F1</h2>
        <p class="UniqueTag">COLLECTION</p>
        <p class="UniqueAbout"> amazing how the same pace in practice can feel so much harder than on race day. </p>
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
        <h2>E SPORTS</h2>
        <p class="UniqueTag">COLLECTION</p>
        <p class="UniqueAbout">EAT SLEEP GAME REPEAT</p>
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

   </>
  )
}
