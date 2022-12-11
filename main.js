

const dict = {
   squarecut: "/assets/squarecut.jpeg",
   straightdrive: "/assets/straightdrive.jpeg",
   ondrive: "/assets/ondrive.jpeg",
   pull: "/assets/pull.jpeg",
   legglance: "/assets/legglance.jpeg",
   latecut: "/assets/latecut.jpeg",
   flick: "/assets/flick.jpeg",
   sweep: "/assets/sweep.jpeg",
   uppercut: "/assets/uppercut.jpeg",
   switchhit: "/assets/switchhit.jpeg",
   hook: "/assets/hook.jpeg",
   slog: "/assets/slog.jpeg",
   coverdrive: "/assets/coverdrive.jpeg",
   offdrive: "/assets/offdrive.jpeg",
   reversesweep: "/assets/reversesweep.jpeg",
   slogsweep: "/assets/slogsweep.jpeg",
   cut: "/assets/cut.jpeg",
   scoop: "/assets/scoop.jpeg",
   squaredrive: "/assets/squaredrive.jpeg",

   bouncer: "/assets/bouncer.jpeg",
   inswinger: "/assets/inswinger.jpeg",
   outswinger: "/assets/outswinger.jpeg",
   legcutter: "/assets/legcutter.jpeg",
   offcutter: "/assets/offcutter.jpeg",
   reverseswing: "/assets/reverseswing.jpeg",
   yorker: "/assets/yorker.jpeg",
   pace: "/assets/pace.jpeg"
}

const strategies  = {
    squarecut :{
       image : "/assets/offcutter.jpeg",
       bestagainst :{ 
           pace : "/assets/offcutter.jpeg",
           outswinger: "/assets/offcutter.jpeg",
           legcutter : "/assets/offcutter.jpeg"
    },
       badagainst:{
           bouncer : "/assets/offcutter.jpeg",
           inswinger :"/assets/offcutter.jpeg",
           yorker :"/assets/offcutter.jpeg"

   }
    },
    pull: {
       image : "/assets/offcutter.jpeg",
       bestagainst :{ 
           offcutter:"./assets/offcutter.png",
           bouncer:"/assets/offcutter.jpeg"
    },
    badagainst:{
       reverseswing:"/assets/offcutter.jpeg",
       yorker:"/assets/offcutter.jpeg"
        
  }
   } ,
   latecut: {
     image :"/assets/offcutter.jpeg",
     bestagainst :{ 
        legcutter :"./assets/offcutter.png",
        reversestring :"/assets/offcutter.jpeg"
 },
 badagainst:{
   inswinger:"/assets/offcutter.jpeg",
  yorker:"/assets/offcutter.jpeg"
   }
   },
   flick : {
     image: "/assets/offcutter.jpeg",
     bestagainst :{ 
        inswinger :"./assets/offcutter.png",
        offcutter :"/assets/offcutter.jpeg"
 },
 badagainst:{
   bouncer:"/assets/offcutter.jpeg",
  yorker:"/assets/offcutter.jpeg"
   }
   }
  }




function displayStratagies(){
   //This loop iterates over strategies by shot names
  for(const shot in strategies){
   //creating a container element i.e., Row container. 
   //This container would contain three parts: left, middle, and right.
   let item = document.createElement("li");
   const itemClass = item.classList;
   itemClass.add("container");

   //creating the left div
   let leftSec = document.createElement("div");
   const leftSecClass = leftSec.classList;
   leftSecClass.add("left");

   //This loop iterates over the bestagainst object which has atmost three key-value pairs in it.
   //we will then append individual images onto the left div.
   for(const ball in shot.bestagainst){
      let image = document.createElement("img")
      let imgClass = item.classList;
      imgClass.add("playImg");
      image.src = shot.bestagainst.ball;
      image.alt = ball;
      leftSec.appendChild(image);
   }

   //appending the left div onto the item (container).
   item.appendChild(leftSec);

   ////creating the middle div
   let middleSec = document.createElement("div");
   const middleSecClass = middleSec.classList;
   leftSecClass.add("middle");

   //Creating and appending the shot image onto the middle div
   let image = document.createElement("img")
   let imgClass = item.classList;
   imgClass.add("playImg");
   image.src = shot.image;
   image.alt = shot;
   middleSec.appendChild(image);

   //appending the middle div onto the item (container)
   item.appendChild(middleSec);

   //creating the right div
   let rightSec = document.createElement("div");
   const rightSecClass = rightSec.classList;
   rightSecClass.add("right");

   //This loop iterates over the badagainst object which has atmost three key-value pairs in it.
   //we will then append individual images onto the right div.
   for(const ball in shot.badagainst){
      let image = document.createElement("img")
      let imgClass = item.classList;
      imgClass.add("playImg");
      image.src = shot.badagainst.ball;
      image.alt = ball;
      rightSec.appendChild(image);
   }

   //appending the right div onto the item (container)
   item.appendChild(rightSec);
  }


}


(() => displayStratagies())();