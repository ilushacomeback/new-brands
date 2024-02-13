;(function () {
  const width = innerWidth
  let swiper
  const getSwiper = () => {
    swiper = new Swiper(".brands", {
      slidesPerView: "auto",
      refresh: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
  }

  const button = document.querySelector(".next-items")
  button.addEventListener("click", function () {
    button.classList.toggle("next-items__toggle")
  })

  const btn = document.querySelector(".next-items > span")
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

  document.addEventListener("DOMContentLoaded", () => {
    if (width < 768) {
      getSwiper()
    }
  })

  window.addEventListener("resize", (event) => {
    if (event.target.innerWidth >= 768 && swiper) {
      swiper.slideTo(0, 0, false)
      swiper.disable()
    } else {
      if (swiper) {
        swiper.enable()
      } else {
        getSwiper()
      }
    }
  })
})()
