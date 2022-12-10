



const strategies  = {
    squarecut :{
       image : "/assets/squarecut.png",
       bestagainst :{ 
           pace : require("./assets/pace.png"),
           outswinger: require("./assets/outswinger.png"),
           legcutter : require("./assets/legcutter.png")
    },
       badagainst:{
           bouncer : require("./assets/bouncer.png"),
           inswinger :require("./assets/inswinger.png"),
           yorker :require("./assets/yorker.png")

   }
    },
    pull: {
       image : " ",
       bestagainst :{ 
           offcutter:require("./assets/offcutter.png"),
           bouncer:require("./assets/bouncer.png")
    },
    badagainst:{
       reverseswing:require("./assets/reverseswing.png"),
       yorker:require("./assets/yorker.png")
        
  }
   } ,
   latecut: {
     image :"",
     bestagainst :{ 
        legcutter :require("./assets/offcutter.png"),
        reversestring :require("./assets/bouncer.png")
 },
 badagainst:{
   inswinger:require("./assets/reverseswing.png"),
  yorker:require("./assets/yorker.png")
   }
   },
   flick : {
     image: "",
     bestagainst :{ 
        inswinger :require("./assets/offcutter.png"),
        offcutter :require("./assets/bouncer.png")
 },
 badagainst:{
   bouncer:require("./assets/reverseswing.png"),
  yorker:require("./assets/yorker.png")
   }
   }
  }