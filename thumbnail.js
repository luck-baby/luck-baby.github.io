document.addEventListener("DOMContentLoaded", function(event) {
    // 你的所有代码都应该写在这里
    alert("Hello JavaScript");
    let targetImage = document.querySelector("#smart-image");
    targetImage.addEventListener("click", function() {
        alert("点击了图片");
});
    targetImage.classList.remove("small");
});
