let img=document.querySelectorAll(".imgdiv");
img.forEach((img,index)=>{
    img.style.left=`${index*100}%`
})
let count=0
function move(){
    img.style.transform=`translateX((count*100)%)`;
    console.log("count");
    count++;
}
function slider(){
    setInterval(()=>{
        move();
    },1000)
}
slider();