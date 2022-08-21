// FOR SPRODUCT.HTML - To allow the different images to be viewed.
// var MainImg = document.getElementById("MainImg");
// var SmallImg = document.getElementsByClassName("small-img");

//click on first image, the main image changes to that
// SmallImg[0].onclick = function() {
//     MainImg.src = SmallImg[0].src;
// }
// SmallImg[1].onclick = function() {
//     MainImg.src = SmallImg[1].src;
// }
// SmallImg[2].onclick = function() {
//     MainImg.src = SmallImg[2].src;
// }
// SmallImg[3].onclick = function() {
//     MainImg.src = SmallImg[3].src;
// }
// SmallImg[4].onclick = function() {
//     MainImg.src = SmallImg[4].src;
// }

// when proceed to checkout is click alert message will show 
function checkout() {
    alert("You have successfully checked out!");
  
}

function coupons() {
    alert("You have applied coupon code!");
}

function msgsent(){
    alert("Message sent successfully");
}

// document.getElementById('proone').addEventListener('click',function () {

//     alert("heloo");
//      document.getElementById("prodone").setAttribute("class","productdisplay");
    
// });
function productone() {

    setTimeout(function(){
        alert("Added to cart");
   document.getElementById("prodone").setAttribute("class","productdisplay");
document.getElementsByClassName("totalone")[0].innerHTML="918";
document.getElementsByClassName("totalone")[1].innerHTML="918";

    },5000);
    
   
}