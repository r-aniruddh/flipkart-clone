document.addEventListener("DOMContentLoaded", () => {

  // ===== Banner Images =====
 const bannerImages = [
  "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/3945684/pexels-photo-3945684.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/3405454/pexels-photo-3405454.jpeg?auto=compress&cs=tinysrgb&w=1600"
];


  let bannerIndex = 0;
  const bannerImg = document.getElementById("bannerImg");

  function updateBanner() {
    bannerImg.src = bannerImages[bannerIndex];
    bannerIndex = (bannerIndex + 1) % bannerImages.length;
  }

  updateBanner();
  setInterval(updateBanner, 3000);

  // ===== Cart Logic =====
  let cartCount = 0;
  const cart = document.querySelector(".cart");
  const buttons = document.querySelectorAll(".product-card button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      cartCount++;
      cart.innerText = `🛒 Cart (${cartCount})`;
      btn.innerText = "Added ✔";
      btn.disabled = true;
    });
  });

});
