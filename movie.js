function event1() {

  alert("123");

}
var x = document.getElementsByClassName("right");
console.log(x);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}

let artslideIndex = 1;
showartSlides(artslideIndex);

// Next/previous controls
function plusartSlides(x) {
  showartSlides(artslideIndex += x);
}

// Thumbnail image controls
function currentSlide(x) {
  showartSlides(artslideIndex = x);
}

function showartSlides(x) {
  let k;
  let artslides = document.getElementsByClassName("articleSlides");
  let dots = document.getElementsByClassName("dot");
  if (x > artslides.length) { artslideIndex = 1 }
  if (x < 1) { artslideIndex = artslides.length }
  for (k = 0; k < artslides.length; k++) {
    artslides[k].style.display = "none";
  }
  for (k = 0; k < dots.length; k++) {
    dots[k].className = dots[k].className.replace(" active", "");
  }
  artslides[artslideIndex - 1].style.display = "block";
  dots[artslideIndex - 1].className += " active";
}

// 取得導覽列元素
const nav = document.querySelector('#mainnav');
// 取得導覽列元素頂端位置
// const topOfNav = nav.offsetTop;

function fixNav() {
  // 如果觀景窗頂部位置值大於導覽列頂部就沾黏，反之取消沾黏
  if (window.scrollY >= 334) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

// 監聽滾動事件
window.addEventListener('scroll', fixNav);