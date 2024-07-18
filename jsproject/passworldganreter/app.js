let passlength=document.querySelector(".passswordlength");
let passdisplay=document.querySelector(".passworddisplay");
let copyMessage=document.querySelector(".copyMessage");
let strenthcolor=document.querySelector(".strenthcolor");
let copyBtn=document.querySelector("img");

// passlength.innerHTML="0";
let range=document.querySelector("#passwordrange")
const symbol = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let passwordLength=5;
function handleSlider() {
    range.value=passwordLength;
     passlength.innerText =passwordLength;
}
handleSlider();
range.addEventListener('input', (event) => {
    passwordLength = event.target.value;
    handleSlider();
});
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateUppercase() {
    return String.fromCharCode(generateRandom(65, 91));
}
function generateLowercase() {
    return String.fromCharCode(generateRandom(97,123));
}
function generateNumber(){
    return generateRandom(0,9);
}
function generateSymbol(){
    return symbol[generateRandom(0,symbol.length)];
}
let checboxes=document.querySelectorAll("input[type=checkbox]");
let checkCount=0;
function checboxescount(){
    checkCount=0;
    checboxes.forEach((checkbox) => {
            if (checkbox.checked)
            checkCount++;
    });
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}
checboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', checboxescount);
})
let uppercase=document.querySelector("#uppercasee");
let lowercase=document.querySelector("#lowercasee");
let number=document.querySelector("#number");
let symbolic=document.querySelector("#symbol");
let password="";
let generatebtn=document.querySelector("button");
async function copyContent() {
    try {
        await navigator.clipboard.writeText(passdisplay.value);

        copyMessage.innerText = "Copied"
        copyMessage.classList.add("active");

    }
    catch (e) {
        // alert("Something went wrong in CopyContent");
        copyMessage.innerText = "Failed";
    }
    setTimeout(()=>{
        copyMessage.classList.remove("active");
    },2000)
}
copyBtn.addEventListener("click", () => {
    if (passdisplay.value)
        copyContent();
});
function setcolor(color){
    strenthcolor.style.backgroundColor = color;
    strenthcolor.style.boxShadow = `0 0 12px 1px ${color}`;
}
setcolor("#ccc")
function strenth(){
    if (uppercase.checked&&lowercase.checked&&number.checked&&symbolic.checked&&(passwordLength>6)){
      setcolor("#0f0");
    } else if (
        (lowercase.checked || uppercase.checked) &&
        (number.checked || symbolic.checked) &&
        passwordLength >= 6
    ) {
        setcolor("#ff0");
    } else {
        setcolor("#f00");
    }
}
generatebtn.addEventListener('click',()=>{
    if (checkCount <= 0)
    return;

if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
}
let arrayOfCheckedFunction = [];
password="";
if (uppercase.checked) arrayOfCheckedFunction.push(generateUppercase);
if (lowercase.checked) arrayOfCheckedFunction.push(generateLowercase);
if (number.checked) arrayOfCheckedFunction.push(generateNumber);
if (symbolic.checked) arrayOfCheckedFunction.push(generateSymbol);

for(let i=0;i<range.value;i++){
    password+=arrayOfCheckedFunction[generateRandom(0,arrayOfCheckedFunction.length)]();
}
strenth();
passdisplay.value=password;
})