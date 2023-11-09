//how to create a slide show in html css and js 
//
//1) collect assets
//2) code html and style it how you please 
//3) in js list out all the data your collecting from html





let pageNumbers = 0

const nextTag = document.querySelector("footer img.prev")
const prevTag = document.querySelector("footer img.next")

const pageBg = document.querySelector(".home-page")

const textTag = document.querySelector(".pageTitle")

const paraTag = document.querySelector("p .ContentText")


//const pages =[
//    
//    
//   
//    {copy: "Contact", background:"#000000", 
//    },
//       {copy: "Content", background:"#000000", 
//    },
//    
//     {copy:"Who Are We?", background:"#000000",},
//     {copy:'How We Can Help', background:"#00000", },
//    
//    
//   
//]

const pages =[
 document.querySelector(".pageSections"), 
    
//   
//    {copy: document.querySelector(".pageSections"), background:"#000000", 
//    },
       {copy: "Content", background:"#000000", 
    },
    
     {copy:"Who Are We?", background:"#000000",},
     {copy:'How We Can Help', background:"#00000", },
    
    
   
]

//const pages = document.querySelectorAll(" section .page-work")
               

////for the card section:
//add html section for card grid section;
//add query select to pull in card data,
//    if page is equal to page number.. card content will display block else it will display none
    
    

const updateSection = function(){
   //Function to Update the text and content on the HTML page  
   
//    paraTag.innerHTML=pages[pageNumbers].Contentcopy
    textTag.innerHTML=pages[pageNumbers].copy
   
pageBg.style.background=pages[pageNumbers].background
document.querySelector(".text-title").style.display="none"
    
}

const nextbtn = function(){
    //once the next btn is clicked it will open the next page and show the updated content
    pageNumbers++
    
    if (pageNumbers > pages.length -1){
        pageNumbers = 0
    }
    
     updateSection() 
    //    pageNumber = pageNumber + 1
//    or can do pageNumber++
}
const prevbtn = function(){
     pageNumbers= pageNumbers -1
//    pageNumbers = -1
    if(pageNumbers < 0){
        pageNumbers = pages.length -1
    }
    updateSection()
}


nextTag.addEventListener('click',function(){
    nextbtn()                     
                         })

prevTag.addEventListener('click',function(){
    prevbtn()
})