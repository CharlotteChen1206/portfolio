// 選取元素
const menuIcon = document.querySelector('.fa-bars'); // 漢堡菜單圖標
const closeIcon = document.querySelector('.fa-xmark'); // 關閉圖標
const hamMenu = document.querySelector('.ham-menu'); // 菜單容器

// 點擊漢堡圖標，打開菜單
menuIcon.addEventListener('click', () => {
    hamMenu.classList.add('active'); // 添加 active 類，顯示菜單
});

// 點擊關閉圖標，關閉菜單
closeIcon.addEventListener('click', () => {
    hamMenu.classList.remove('active'); // 移除 active 類，隱藏菜單
});


// heroTitle
var typed = new Typed(".role",{
    strings : ["UX Designer", "Graphic Designer", "Web Developer"],
    typeSpeed : 150,
    backSpeed : 150,
    looped : true
});

// skills animation
// 選取所有 .skill 元素
const skill = document.querySelectorAll('.skill');

// 設置 Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 當進入視口時，添加 visible 類名以觸發動畫
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.1, // 當 10% 的元素可見時觸發
  }
);

// 對每個 .skill 元素進行觀察
skill.forEach((skill) => {
  observer.observe(skill);
});


// timeline animation
document.addEventListener("DOMContentLoaded", () => {
  const timelineElements = document.querySelectorAll(".timeline-element");
  const timeline = document.querySelector(".timeline");

  // Observer 配置
  const observerOptions = {
    root: null, // 使用 viewport 作為容器
    rootMargin: "0px",
    threshold: 0.1, // 元素進入視窗 10% 即觸發
  };

  // 創建 Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate"); // 添加動畫類名
        observer.unobserve(entry.target); // 只觸發一次
      }
    });
  }, observerOptions);

  // 觀察 timeline elements
  timelineElements.forEach(element => observer.observe(element));

  // 為 timeline 的線條動畫添加監測
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        timeline.classList.add("animate"); // 添加動畫類名
        timelineObserver.unobserve(entry.target); // 只觸發一次
      }
    });
  }, observerOptions);

  timelineObserver.observe(timeline);
});

// gallery
var $projectsGallery = $('.projects-gallery').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
})

$('.button-group .projects-button').on('click', function () {
  $('.button-group .projects-button').removeClass('active');
  $(this).addClass('active');
  
  var value = $(this).attr('data-filter');
  $projectsGallery.isotope({
    filter: value
  })
})

