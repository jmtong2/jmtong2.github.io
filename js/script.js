window.addEventListener("load", function(){
     document.querySelector(".preloader").classList.add("opacity-0");

     setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
     },1000)
  })


const nav=document.querySelector(".nav"),
navList=nav.querySelector("li"),
totalNavList=navList.lenth;

for(let i=0; i<totalNavList; i++){
  const a=navList[i].querySelector("a");
  a.addEventListener("click", function(){
    console.log(this);
  })
}
