let mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', cursor)

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

const imgAll = document.querySelectorAll('.container img');
console.log(imgAll);

imgAll.forEach(img => {
    img.addEventListener('mouseover', () => {
      mouseCursor.classList.add('cursorImg')
      img.style.transform = 'scale(1.4)'
    })
    img.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove('cursorImg')
      img.style.transform = 'scale(1)'

    })

})

const header = document.querySelector('header');
console.log(header)

header.addEventListener('mouseover', () => {
  
  mouseCursor.classList.add('cursorHeader')

})
header.addEventListener('mouseleave', () => {
    
  mouseCursor.classList.remove('cursorHeader')

})