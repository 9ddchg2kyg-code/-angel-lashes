document.addEventListener("DOMContentLoaded", () => {

const images = document.querySelectorAll(".grid img");

images.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.9)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.cursor = "pointer";
        overlay.style.zIndex = "9999";

        const photo = document.createElement("img");

        photo.src = img.src;
        photo.style.maxWidth = "90%";
        photo.style.maxHeight = "90%";
        photo.style.borderRadius = "20px";
        photo.style.boxShadow = "0 20px 50px rgba(0,0,0,.5)";

        overlay.appendChild(photo);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

        document.body.appendChild(overlay);

    });

});

});
