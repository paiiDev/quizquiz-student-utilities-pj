document.querySelector("#practice").addEventListener("click", () => {
  alert("Please Login first ⚠️");
});

document.querySelector(".toLogin").addEventListener("click", () => {
  window.open("login.html");
});

document.querySelector(".toSignup").addEventListener("click", () => {
  window.open("sign-up.html");
});

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", revealX);
window.addEventListener("scroll", textAnimation)

function reveal() {
  console.log("working");
  var sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    var windowheight = window.innerHeight;
    var revealtop = section.getBoundingClientRect().top;
    var revealpoint = 150;
    if (revealtop < windowheight - revealpoint) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

function revealX() {
  document.querySelectorAll(".forCardAni").forEach((card) => {
    var windowheight = window.innerHeight;
    var revealtop = card.getBoundingClientRect().top;
    var revealpoint = 150;
    if (revealtop < windowheight - revealpoint) {
      card.classList.add("card-animation");
    } else {
      card.classList.remove("card-animation");
    }
  });
}


function revealX1() {
    document.querySelectorAll(".product-device").forEach((product) => {
        product.classList.add("product-device-revealX");
    });
}

function textAnimation() {
  var texts = document.querySelector(".text-animation");
  var windowheight = window.innerHeight;
  var revealtop = texts.getBoundingClientRect().top;
  console.log(revealtop);
  var revealpoint = 150;
  if(revealtop <  revealpoint){
    texts.classList.remove("text-animation-active");
  } else {
        texts.classList.add("text-animation-active");

  }

}

window.addEventListener("load", revealX1);
window.addEventListener("load", () => {
    document.querySelector(".text-animation").classList.add("text-animation-active");

})


document.querySelectorAll(".product-device").forEach((product)=> {
    product.addEventListener("mouseleave", () => {
        product.classList.add("product-device-revealX");

    });
    product.addEventListener("mouseenter", () => {
        product.classList.remove("product-device-revealX");
    })
})

