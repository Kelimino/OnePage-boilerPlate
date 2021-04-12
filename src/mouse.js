let mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', cursor)

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

const imgAll = document.querySelectorAll('img');
console.log(imgAll);

imgAll.forEach(img => {
    img.addEventListener('mouseover', () => {
      mouseCursor.classList.add('cursorImg')
    })
    img.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove('cursorImg')

    })

})