



const strategies  = {
    squarecut :{
       image : "/assets/squarecut.png",
       bestagainst :{ 
           pace : "./assets/pace.png",
           outswinger: "./assets/outswinger.png",
           legcutter : "./assets/legcutter.png"
    },
       badagainst:{
           bouncer : "./assets/bouncer.png",
           inswinger :"./assets/inswinger.png",
           yorker :"./assets/yorker.png"

   }
    },
    pull: {
       image : " ",
       bestagainst :{ 
           offcutter:"./assets/offcutter.png",
           bouncer:"./assets/bouncer.png"
    },
    badagainst:{
       reverseswing:"./assets/reverseswing.png",
       yorker:"./assets/yorker.png"
        
  }
   } ,
   latecut: {
     image :"",
     bestagainst :{ 
        legcutter :"./assets/offcutter.png",
        reversestring :"./assets/bouncer.png"
 },
 badagainst:{
   inswinger:"./assets/reverseswing.png",
  yorker:"./assets/yorker.png"
   }
   },
   flick : {
     image: "",
     bestagainst :{ 
        inswinger :"./assets/offcutter.png",
        offcutter :"./assets/bouncer.png"
 },
 badagainst:{
   bouncer:"./assets/reverseswing.png",
  yorker:"./assets/yorker.png"
   }
   }
  }





function displayStratagies(){
  for(const shot in strategies){
   let item = document.createElement("li");
   const itemClass = item.classList;
   itemClass.add("container");


   let leftSec = document.createElement("div");
   const leftSecClass = leftSec.classList;
   leftSecClass.add("left");

   for(const ball in strategies.shot.bestagainst){
      let image = document.createElement("img")
      let imgClass = item.classList;
      imgClass.add("playImg");
      image.src = strategies.shot.bestagainst.ball;
      image.alt = ball;
      leftSec.appendChild(image);
   }
   item.appendChild("leftSec");


   let middleSec = document.createElement("div");
   const middleSecClass = middleSec.classList;
   leftSecClass.add("middle");

   let image = document.createElement("img")
   let imgClass = item.classList;
   imgClass.add("playImg");
   image.src = strategies.shot.image;
   image.alt = shot;
   middleSec.appendChild(image);
   item.appendChild(middleSec);


   let rightSec = document.createElement("div");
   const rightSecClass = rightSec.classList;
   rightSecClass.add("right");

   for(const ball in strategies.shot.badagainst){
      let image = document.createElement("img")
      let imgClass = item.classList;
      imgClass.add("playImg");
      image.src = strategies.shot.badagainst.ball;
      image.alt = ball;
      rightSec.appendChild(image);
   }

   item.appendChild(rightSec);
  }


}