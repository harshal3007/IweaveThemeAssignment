document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carouselContainer");
  const prevBtn = document.querySelector(".prevBtn");
  const nextBtn = document.querySelector(".nextBtn");

  let itemWidth = document.querySelector(".carouselItem").offsetWidth + 17;

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -itemWidth, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: itemWidth, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sortDropdown = document.getElementById("sortPrice");

  sortDropdown.addEventListener("change", function () {
    window.location.href = sortDropdown.value;
  });
  const params = new URLSearchParams(window.location.search);
  const selectedSort = params.get("sort_by");
  if (selectedSort) {
    sortDropdown.value = window.location.pathname + "?sort_by=" + selectedSort;
  }
});
