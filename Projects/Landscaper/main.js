var galary_all_btn = document.getElementById("all");
var galary_lawn_care_btn = document.getElementById("lawn_care");
var galary_garden_care_btn = document.getElementById("garden_care");
var galary_planting_btn = document.getElementById("planting");

var galary_btn = [galary_all_btn,galary_lawn_care_btn,galary_garden_care_btn,galary_planting_btn];
var galary_image = document.getElementById("galary_image");

var galary_images_all = [
    "images/galary/01-large.jpg",
    "images/galary/02-large.jpg",
    "images/galary/03-large.jpg",
    "images/galary/04-large.jpg",
    "images/galary/05-large.jpg",
    "images/galary/06-large.jpg",
    "images/galary/07-large.jpg",
    "images/galary/08-large.jpg",
    "images/galary/09-large.jpg"
];


function all_galary() {
    
    galary_image.innerHTML = "";
    for (let i = 0; i < galary_images_all.length; i++) {
        galary_image.innerHTML += `<li><img src="${galary_images_all[i]}" alt=""></li>`;
    }
    
    for (let i = 0; i < galary_btn.length; i++) {
        galary_btn[i].style.backgroundColor = "#e5e5e5";
        galary_btn[i].style.color = "#7e7375";
    }

    galary_all_btn.style.backgroundColor = "#69ad31";
    galary_all_btn.style.color = "white";
}


function lawn_galary() {
    galary_image.innerHTML = `<li><img src="${galary_images_all[0]}" alt=""></li>
    <li><img src="${galary_images_all[3]}" alt=""></li>
    <li><img src="${galary_images_all[5]}" alt=""></li>`;

    for (let i = 0; i < galary_btn.length; i++) {
        galary_btn[i].style.backgroundColor = "#e5e5e5";
        galary_btn[i].style.color = "#7e7375";
    }

    galary_lawn_care_btn.style.backgroundColor = "#69ad31";
    galary_lawn_care_btn.style.color = "white";
}

function garden_galary() {
    galary_image.innerHTML = `<li><img src="${galary_images_all[0]}" alt=""></li>
    <li><img src="${galary_images_all[1]}" alt=""></li>
    <li><img src="${galary_images_all[2]}" alt=""></li>
    <li><img src="${galary_images_all[6]}" alt=""></li>
    <li><img src="${galary_images_all[8]}" alt=""></li>`;

    for (let i = 0; i < galary_btn.length; i++) {
        galary_btn[i].style.backgroundColor = "#e5e5e5";
        galary_btn[i].style.color = "#7e7375";
    }

    galary_garden_care_btn.style.backgroundColor = "#69ad31";
    galary_garden_care_btn.style.color = "white";
}

function planting_galary() {
    galary_image.innerHTML = `<li><img src="${galary_images_all[2]}" alt=""></li>
    <li><img src="${galary_images_all[4]}" alt=""></li>
    <li><img src="${galary_images_all[7]}" alt=""></li>
    <li><img src="${galary_images_all[8]}" alt=""></li>`;

    for (let i = 0; i < galary_btn.length; i++) {
        galary_btn[i].style.backgroundColor = "#e5e5e5";
        galary_btn[i].style.color = "#7e7375";
    }

    galary_planting_btn.style.backgroundColor = "#69ad31";
    galary_planting_btn.style.color = "white";
}

// =============================================================================================================

var testimonial_slide = [""];


