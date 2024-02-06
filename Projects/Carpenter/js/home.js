var img1 = document.querySelector("#car_image1");
var img2 = document.querySelector("#car_image2");
var prev = document.querySelector("#backward");
var next = document.querySelector("#forward");
var slide_btn = document.querySelector("#slide_btn");

var session = false;
session = localStorage.getItem("session");

if (!session) {
    window.location.href = "login.html";
}

var img_list = [
    "images/carousel/image1.jpg",
    "images/carousel/image2.jpeg",
    "images/carousel/image3.png"
];

for (let index = 0; index < img_list.length; index++) {
    slide_btn.innerHTML += `<button class="slide_btn_list"></button>`;
}

var slide_btn_list = document.querySelectorAll(".slide_btn_list");

var index1 = 0;
var index2 = index1+1;

var intervalID;

var intervalID = setInterval(() => {
    auto_carousel();
}, 4000);

prev.addEventListener("click", () => {
    index1 = (index1 - 1 + img_list.length) % img_list.length;
    index2 = (index1 - 1 + img_list.length) % img_list.length;
    updateImage();
});

next.addEventListener("click", () => {

    index1 = (index1 + 1) % img_list.length;
    index2 = (index1 + 1) % img_list.length;
    updateImage();
});

function updateImage() {
    img1.style.zIndex = "1";
    img2.style.zIndex = "2";
    img1.style.rotate = "90deg";
    // img1.style.transform = "translateX(-100%)";
    setTimeout(() => {
        img1.src = img_list[index1];
        
        if (img1.src==img2.src) {
            img1.src = img_list[index1+1];
        }
        // img1.style.transform = "translateX(0)";
        img1.style.rotate = "0deg";
        var temp = img1
        img1 = img2;
        img2 = temp;
        // img1.style.zIndex = "1";
        // img2.style.zIndex = "2";
    }, 500); // 500ms should match the transition duration in CSS
    img2.src = img_list[index2];
    for (let index = 0; index < img_list.length; index++) {
        if (index==index1) {
            slide_btn_list[index].style.backgroundColor = "red";
        } else {
            slide_btn_list[index].style.backgroundColor = "#666666";
        }
        
    }
}


function auto_carousel() {
    index1 = (index1 + 1) % img_list.length;
    index2 = (index1 + 1) % img_list.length;
    updateImage();
}

for (let index = 0; index < slide_btn_list.length; index++) {
    slide_btn_list[index].addEventListener("click",()=>{
        index1 = index;
        index2 = (index1 + 1) % img_list.length;
        updateImage();
    });
    
}
