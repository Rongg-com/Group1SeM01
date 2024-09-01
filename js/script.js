
function showSearch() {
  var sidebar = document.querySelector('.search-bar');

  if (sidebar.style.display === 'none' || sidebar.style.display === '') {
      sidebar.style.display = 'flex';  
  } else {
      sidebar.style.display = 'none'; 
  }
}
function handleScroll() {
  const Sidebar = document.querySelector('.sidebar');
  const openBtn = document.querySelector('.open-btn');

  if (window.scrollY === 0) {
      Sidebar.style.display = 'none';
      openBtn.style.display = 'none';
  } else {
      openBtn.style.display = 'block';
  }
}
window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', handleScroll);
const slideshow = document.querySelector('.slideshow');
let isDragging = false;
let startX;
let scrollLeft;

slideshow.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slideshow.offsetLeft;
    scrollLeft = slideshow.scrollLeft;
    slideshow.style.cursor = 'pointer'; 
});

slideshow.addEventListener('mouseup', () => {
    isDragging = false;
    slideshow.style.cursor = 'pointer'; 
});

slideshow.addEventListener('mouseleave', () => {
    isDragging = false;
    slideshow.style.cursor = 'pointer'; 
});

slideshow.addEventListener('mousemove', (e) => {
    if (!isDragging) return;  
    e.preventDefault();
    const x = e.pageX - slideshow.offsetLeft;
    const move = x - startX;
    slideshow.scrollLeft = scrollLeft - move; 
});

function Sidebar() {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.btn');
    if (sidebar.style.left === '0px') {
        sidebar.style.display = 'block';
        sidebar.style.left = '-250px';
        content.style.marginLeft = '0';
    } else {
        sidebar.style.display = 'block';
        sidebar.style.left = '0';
        content.style.marginLeft = '60px'; 
    }
}