let playbord = document.querySelector(".playbord");
let foodX
let foodY
let snakbody=[]
let velocityX=0;
let velocityY=0;
let snakX = 15;
let snakY = 20;
function rendomfood() {
    foodX = Math.floor(Math.random() * 20) + 1
    foodY = Math.floor(Math.random() * 20) + 1
}
let movesnak=(e)=>{
    if (e.key === "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft") {
        console.log("inside left movesnak")
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }

}
function game() {

    if (snakX === foodX && snakY === foodY) {
        snakbody.push([foodY,foodX]);
        rendomfood();

    }
    html = `<div class="food" style="grid-area:${foodY}/${foodX}"></div>`
    snakX+=velocityX;
    snakY+=velocityY;
    // html+= `<div class="snak" style="grid-area:${snakY}/${snakX}"></div>`
    for(let i=snakbody.length-1;i>0;i--){
        snakbody[i]=snakbody[i-1];
        
    }
    snakbody[0]=[snakX,snakY];
    for(let i=0;i<snakbody.length;i++){
        html+=`<div class="snak" style="grid-area:${snakbody[i][1]}/${snakbody[i][0]}"></div>`
        playbord.innerHTML=html;
 
    }


}
rendomfood();
setInterval(game, 300);
document.addEventListener("keyup", movesnak);