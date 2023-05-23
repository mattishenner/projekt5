document.querySelector(".cta-placeholder").addEventListener("Click", function(){
    document.querySelector(".popup-contactform").classList.add("active")
});
document.querySelector(".close-btn").addEventListener("Click", function(){
    document.querySelector(".popup-contactform").classList.remove("active")
});
