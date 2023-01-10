// 取得導覽列元素
const nav = document.querySelector('#mainnav');
// 取得導覽列元素頂端位置
const topOfNav = nav.offsetTop;

function fixNav() {
  // 如果觀景窗頂部位置值大於導覽列頂部就沾黏，反之取消沾黏
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

// 監聽滾動事件
window.addEventListener('scroll', fixNav);

function openMovie(evt, boxoffice) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 1; i < 2; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(boxoffice).style.display = "block";
  evt.currentTarget.className += " active";
}

$(".youtube-link").grtyoutube();

$(".youtube-link").grtyoutube({
  autoPlay: true
});

$(".youtube-link").grtyoutube({
  theme: "dark" // or dark
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

$(document).ready(function() {
  rating.create({
      'selector': '#rating',
      'outOf': 5,
      'defaultRating': 1,
      'ratingClass':'class-1',

  });
});