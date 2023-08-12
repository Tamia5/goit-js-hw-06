const fontSize = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

fontSize.addEventListener('input', function () {
    const fontSizeValue = fontSize.value + 'px';
    textEl.style.fontSize = fontSizeValue;
})