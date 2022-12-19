let currentImage = 1;

setInterval(function() {
    $("#carousel").css("background-image", "url('images/" + currentImage + ".jpg')");
    currentImage++;
    if (currentImage === 17) currentImage = 1;
}, 4000);