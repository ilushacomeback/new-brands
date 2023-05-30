;(function () {
  const width = innerWidth
  const getSwiper = (width) => {
    if (width < 768) {
      return new Swiper(".brands", {
        slidesPerView: "auto",
        refresh: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      })
    }
  }
  getSwiper(width)
})()

const button = document.querySelector(".btn")
button.addEventListener("click", function () {
  button.classList.toggle("btn_toggle")
})

const btn = document.querySelector(".btn > span")
btn.addEventListener("click", function () {
  btn.innerHTML =
    btn.innerHTML === "Показать всё"
      ? (btn.innerHTML = "Скрыть")
      : (btn.innerHTML = "Показать всё")
})

const next_1120px = document.querySelector(".brands-list")
button.addEventListener("click", function () {
  next_1120px.classList.toggle("brands-list__toggle")
})
