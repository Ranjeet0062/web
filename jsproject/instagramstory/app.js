let imgarr=[
    {
        storyimg:"IMG/story/royalranjeet.jpg"
    },
    {
        storyimg:"IMG/story/minal.jpg"
    },
    {
        storyimg:"IMG/story/minalgogals.jpg"
    },
    {
        storyimg:"IMG/story/molranjeet.jpg"
    }
]
let storybox=document.querySelectorAll(".story")
let storyplay=document.querySelector(".storyplay")
console.log(storybox)
storybox.forEach((item,index)=>{
    item.addEventListener("click",function(){
        storyplay.style.display="block"
        storyplay.style.backgroundImage=`url(${imgarr[index].storyimg})`;
        console.log(index)
        setTimeout(()=>{storyplay.style.display="none"},3000
        )
    })
    
})