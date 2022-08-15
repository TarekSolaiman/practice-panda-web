// problem 2-------------
const h2Head = document.getElementsByTagName('h1')
for (const h1 of h2Head) {
    h1.style.color = 'green'
    h1.style.backgroundColor = 'yellow'
}
// problem 2-------------

// problem 3-------------
document.getElementById('backpack').style.backgroundColor = 'tomato'
// problem 3-------------

// problem 4-------------
const cardClass = document.getElementsByClassName('card')
for (const card of cardClass) {
    card.style.borderRadius = '30px';
}
// problem 4-------------

// problem 5-------------219 number line--
function btnClick() {
    console.log('Amke mone porse...?');
}
// problem 5-------------

// problem 6-------------
const byeBtn = document.getElementsByClassName('btn-bey')
for (const btn of byeBtn) {
    btn.addEventListener('click', function (event) {
        event.target.style.display = 'none';
        // event.target.parentNode.removeChild(event.target);
    })
}
// problem 6-------------

// problem 7-------------
document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
    const inputext = event.target.value;
    const buttno = document.getElementById('submit-btn')
    if (inputext === 'email') {
        buttno.removeAttribute('disabled')
    }
    else {
        buttno.setAttribute('disabled', true)
    }
})
// problem 7-------------

// problem 8-------------
function chang(a) {
    a.src = 'images/bags/bag-1.png';
}
function back(b) {
    b.src = "images/shoes/shoe-3.png";
}

document.getElementById('imgChang').addEventListener('mouseenter', function (event) {
    event.target.src = 'images/bags/bag-2.png'
})
document.getElementById('imgChang').addEventListener('mouseout', function (event) {
    event.target.src = 'images/shoes/shoe-2.png'
})
// problem 8-------------

// problem 9-------------
document.getElementById('subscrip').addEventListener('dblclick', function (event) {
    event.target.style.backgroundColor = 'gray'
})
// problem 9-------------