const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const widthratio = Math.floor(window.innerWidth / 300);
    console.log(Math.floor(window.innerWith / 300));
  let clickcounter = 0;
  const imageItem = movielists[i].guerySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickcounter++; 
  console.log(imageItem);
  if (imageItem - (4 + clickcounter) + (4 - widthratio) >= 0)  {
    
      movielists[i].style.transform = `translateX(${
        movielists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    }); else{
        movielists[i].style.transform = "translateX(0)";     }
        clickcounter = 0;

        }
      )
console.log(window.innerWidth);
    }); 

/* dark mode */

const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".container,.navbar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title")


ball.addEventListener("click", function(){
    items.forEach((item)  => item.classList.toggle("active"));

});
