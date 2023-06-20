let menu=document.getElementById("menu-icon");
let navbar=document.querySelector(".navbar");
let m=document.querySelector(".main-body")
let count=0;
menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    
    // m.style.marginTop="200px";
    // count++;
    // if(count%2==0){
    //     m.style.marginTop="0px";

    // }

    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});

// document.querySelector("#resume-link-2").addEventListener("click", () => {
//     window.open(
//       "https://drive.google.com/file/d/1qfsVp5xwwTiOXQ0CqiirRC3-QNe-jOhk/view",
//       "_blank"
//     );
//   });

function resume(){
    window.open("https://drive.google.com/file/d/1qfsVp5xwwTiOXQ0CqiirRC3-QNe-jOhk/view",`_blank`)
  }
  
// document.getElementById("resume-button-2").onclick = ()=>{
// window.open("https://drive.google.com/file/d/1qfsVp5xwwTiOXQ0CqiirRC3-QNe-jOhk/view",`_blank`)
// }



document.querySelector(".home").addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});

document.querySelector(".about").addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});

document.querySelector(".skills").addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});

document.querySelector(".projects").addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});

document.querySelector(".contact").addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});