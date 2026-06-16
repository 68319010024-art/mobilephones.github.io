// ======================
// Random Tip
// ======================

const tips = [
"🔋 ควรชาร์จแบตเมื่อเหลือประมาณ 20%",
"📱 อัปเดตระบบปฏิบัติการอยู่เสมอ",
"🛡️ ใช้เคสและฟิล์มกันรอย",
"☁️ สำรองข้อมูลไว้บน Cloud",
"📶 ใช้ Wi-Fi เมื่อทำได้เพื่อลดการใช้ดาต้า",
"⚡ ใช้ที่ชาร์จของแท้เพื่อยืดอายุแบตเตอรี่",
"🌙 เปิดโหมดถนอมสายตาเมื่อต้องใช้งานกลางคืน"
];

function showTip(){
    const random = Math.floor(Math.random() * tips.length);
    document.getElementById("tip").innerHTML = tips[random];
}

// ======================
// Dark Mode
// ======================

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.onclick = function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.innerHTML="☀";
    }else{
        darkBtn.innerHTML="🌙";
    }

};

// ======================
// Clock
// ======================

function updateClock(){

    const now = new Date();

    document.getElementById("clock").innerHTML =
    now.toLocaleString("th-TH");

}

setInterval(updateClock,1000);

updateClock();

// ======================
// Slider
// ======================

const images=[

"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900",

"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900",

"https://images.unsplash.com/photo-1520923642038-b4259acecbd7?w=900",

"https://images.unsplash.com/photo-1510557880182-3f8cbf7f6c8d?w=900"

];

let index=0;

setInterval(()=>{

index++;

if(index>=images.length){
index=0;
}

document.getElementById("slider").src=images[index];

},3000);

// ======================
// Scroll To Top
// ======================

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
// ======================
// Progress Bar
// ======================

window.addEventListener("scroll",()=>{

let winScroll=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let scrolled=(winScroll/height)*100;

document.getElementById("progressBar").style.width=scrolled+"%";

});

// ======================
// Fade Animation
// ======================

const fade=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{

fade.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.classList.add("show");

}

});

});

// ======================
// FAQ
// ======================

const faq=document.querySelectorAll(".faq h3");

faq.forEach(question=>{

question.onclick=function(){

let answer=this.nextElementSibling;

if(answer.style.display=="block"){

answer.style.display="none";

}else{

answer.style.display="block";

}

}

});

// ======================
// Welcome Message
// ======================

setTimeout(()=>{

alert("📱 ยินดีต้อนรับสู่เว็บไซต์ Smart Phone World");

},1000);

// ======================
// Typing Effect
// ======================

const text="เรียนรู้ทุกเรื่องเกี่ยวกับโทรศัพท์มือถือ";

let i=0;

const title=document.querySelector("header p");

title.innerHTML="";

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

// ======================
// Console
// ======================

console.log("Smart Phone World Loaded Successfully");
