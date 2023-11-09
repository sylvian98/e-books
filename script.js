//const sectionTags = document.querySelectorAll("hide")
//const sectionTags= Array.from(document.querySelectorAll('[hide]'))

//notes:
//it reads the array in the console.log so my for loop and if loop is wrong. need to go over it
let sectionNumber = 0
const test =[
document.querySelectorAll(".hide")

]
const title = document.querySelector(".pageTitle")
const contentPara = document.querySelector(".ContentText")
const testPages =[

 {copy:"Contact Us", content:"Visit our website to learn more about <a href='https://hadean.com/'>Hadean.</a><br> or keep in touch via our social media accounts."},
    
      {copy:"Content:", content:
      "<li>Intro</li> <br><li> How can Hadean help </li><br> <li>Contact </li>", color:"#8000FF"
      
      },
    
      {copy:"Who Are We", content:"Hadean are an award-winning startup comprising creatives, developers and engineers passionate about one thing: helping customers to get into the Metaverse.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    
    
    {copy:"How Can We Help", content:"Hadean makes it easy to build, connect and co-create Metaverse experiences that are tailor-made for your business."},     
]


const flex = document.querySelector(".pageSections")
const cards = document.querySelector(".cards")
const social= document.querySelector(".social-media-cards")
var br = document.createElement("br")

const nextTag = document.querySelector("footer img.prev");

const prevTag = document.querySelector("footer img.next");

    const x = window.matchMedia("(max-width:700px)")

    
    
    
    
    
    
    
const showSections = function(){
    
   document.querySelector(".home-page").style.display="none"
    
    title.innerHTML = testPages[sectionNumber].copy
       
       contentPara.innerHTML=testPages[sectionNumber].content
       
       
//       content page
       
       if(sectionNumber==[1]){
           contentPara.style.width="40%"
           contentPara.style.textAlign="center"
           
//          contentPara.style.backgroundColor="#8000FF"
       }
    else{
        contentPara.style.textAlign=""
        contentPara.style.width=""
//       contentPara.style.backgroundColor=""  
    }
    
    
    
//    who are we page
    if(sectionNumber ==[2]){
       contentPara.style.fontSize="21px"
         contentPara.style.padding="20px"   
    }else if(sectionNumber ==[3]){
              contentPara.style.padding="20px" 
             }
    
    
    
    else{
        contentPara.style.fontSize=""
         contentPara.style.padding="" 
     
         }
    
    
   
//      Notes 
//   if(sectionNumber==[4]){
//       
//       console.log("hello world")
//   }   
//    else{ console.log("goodbye")
//        }  

    if(sectionNumber==[3]){
        function myFunction(x) {
  if (x.matches) { // If media query matches
   flex.style.top="40%"
   
  }
else{
    flex.style.top="50% !important"
       
            }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
       
       title.style.textAlign="left"
        contentPara.style.textAlign="left"
        flex.style.flexDirection="column"
       flex.style.alignItems = "flex-start"
       contentPara.style.width="50%"
     
       contentPara.style.marginTop="-4%"
       contentPara.style.fontSize="21px"
       cards.style.display="flex"
//       contentPara.style.paddingLeft="130px"
//       contentPara.style.paddingRight="130px"
    }
    
    else if(sectionNumber==[1]){
        contentPara.style.textAlign="center"
    }
    else{
        title.style.textAlign=""
        contentPara.style.textAlign=""
       flex.style.display=""
        contentPara.style.width=""
          contentPara.style.marginTop=""
           flex.style.alignItems = ""
       
           cards.style.display=""
             flex.style.flexDirection=""
//            contentPara.style.paddingLeft=""
//       contentPara.style.paddingRight=""
    }
    
    
    
    if (sectionNumber==[0]){
        
        social.style.display="grid"
    }
    else{
        social.style.display=""
    }
    
    
}


const nextBtn = function(){
sectionNumber++

if(sectionNumber> testPages.length - 1){
    sectionNumber = 0
}
  showSections() 

    
}

const prevbtn = function(){
     sectionNumber= sectionNumber -1
//    pageNumbers = -1
    if(sectionNumber < 0){
        sectionNumber = testPages.length -1
    }
   showSections()
}

nextTag.addEventListener("click", function(){
    nextBtn()  
})

prevTag.addEventListener("click", function(){
    prevbtn()
})



