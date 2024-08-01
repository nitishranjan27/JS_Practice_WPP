function changeBackgroundColor(event) {
    event.target.style.backgroundColor = 'lightblue';
}

function resetBackgroundColor(event) {
    event.target.style.backgroundColor = 'lightgray';
}

var colorBox = document.getElementById('colorBox');
colorBox.addEventListener('mouseenter', changeBackgroundColor);
colorBox.addEventListener('mouseleave', resetBackgroundColor);