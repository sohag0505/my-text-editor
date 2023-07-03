document.getElementById('bold-click').addEventListener('click', function() {
    const inputField = document.getElementById('text-edit');
    if (inputField.style.fontWeight === 'bold') {

        inputField.style.fontWeight = 'normal'
    } else {
        inputField.style.fontWeight = 'bold'

    }
})
document.getElementById('italic').addEventListener('click', function() {
    const textItalic = document.getElementById('text-edit');
    if (textItalic.style.fontStyle === 'italic') {
        textItalic.style.fontStyle = 'normal'
    } else {
        textItalic.style.fontStyle = 'italic'
    }
})

document.getElementById('align-left').addEventListener('click', function() {
    const inputField = document.getElementById('text-edit');
    if (inputField.style.textAlign === 'left') {

        inputField.style.fontWeight = 'normal'
    } else {
        inputField.style.textAlign = 'left'

    }
})
document.getElementById('align-center').addEventListener('click', function() {
    const inputField = document.getElementById('text-edit');
    if (inputField.style.textAlign === 'center') {

        inputField.style.fontWeight = 'normal'
    } else {
        inputField.style.textAlign = 'center'

    }
})
document.getElementById('align-right').addEventListener('click', function() {
    const inputField = document.getElementById('text-edit');
    if (inputField.style.textAlign === 'right') {

        inputField.style.fontWeight = 'normal'
    } else {
        inputField.style.textAlign = 'right'

    }
})
document.getElementById('align-justify').addEventListener('click', function() {
    const inputField = document.getElementById('text-edit');
    if (inputField.style.textAlign === 'justify') {

        inputField.style.fontWeight = 'normal'
    } else {
        inputField.style.textAlign = 'justify'

    }
})
document.getElementById('text-color').addEventListener('input', function() {
    const inputField = document.getElementById('text-color');
    const text = document.getElementById('text-edit');
    text.style.color = inputField.value
})
document.getElementById('text-size').addEventListener('input', function() {
    const textSize = document.getElementById('text-size').value;
    if (textSize > 13) {

        const text = document.getElementById('text-edit')
        text.style.fontSize = textSize + 'px'
    }

})