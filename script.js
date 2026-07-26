document.addEventListener("DOMContentLoaded", () => {

const images = document.querySelectorAll(".gallery img");

images.forEach(image => {

image.addEventListener("click", () => {

const overlay = document.createElement("div");

overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(0,0,0,.92)";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.zIndex = "99999";
overlay.style.cursor = "pointer";

const photo = document.createElement("img");

photo.src = image.src;
photo.style.maxWidth = "92%";
photo.style.maxHeight = "92%";
photo.style.borderRadius = "18px";
photo.style.boxShadow = "0 20px 60px rgba(0,0,0,.4)";

overlay.appendChild(photo);

overlay.addEventListener("click", () => {
overlay.remove();
});

document.body.appendChild(overlay);

});

});

});
