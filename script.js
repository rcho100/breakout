const rulesBtn = document.getElementById('rules-btn')
const closeBtn = document.getElementById('close-btn')
const rules = document.getElementById('rules')
const canvas = document.getElementById('canvas')

// Create ball props
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4
};

rulesBtn.addEventListener('click', (e) => rules.classList.add(('show')))
closeBtn.addEventListener('click', (e) => rules.classList.remove(('show')))