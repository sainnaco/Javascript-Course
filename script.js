// let time = document.getElementById('time')
// let fix = document.getElementById('fixed-time')


// function getTime() {
//     let dateTime = new Date()
//     min.innerText = dateTime.getMinutes()
//     sec.innerText = dateTime.getSeconds()
//     if (mili < 10) {
//         mili.innerText = "00" + dateTime.getMilliseconds()
//     } else if (mili < 100) {
//         mili.innerText = "0" + dateTime.getMilliseconds()
//     } else {
//         mili.innerText = dateTime.getMilliseconds()
//     }

// }
// function load() {
//     setInterval('getTime()', 1)
// }


// function fixTime() {
//     let dateTime = new Date()
//     let minute = dateTime.getMinutes()
//     let second = dateTime.getSeconds()
//     let milis = dateTime.getMilliseconds()
//     let milisecond = 0
//     if (milis < 10) {
//         milisecond = "00" + dateTime.getMilliseconds()
//     } else if (milis < 100) {
//         milisecond = "0" + dateTime.getMilliseconds()
//     } else {
//         milisecond = dateTime.getMilliseconds()
//     }
//     fix.innerHTML += `<li>${minute} : ${second} : ${milisecond}</li>`
// }
// let mini = 0
// let seco = 0
// let mily = 0
// function timer() {
//     mily += 1
//     if (mily > 999) {
//         mily = 0
//         seco += 1
//         if (seco > 59) {
//             mini += 1
//             seco = 0
//         }
//     }
//     return `${mini} : ${seco} : ${mily}`
// }

// function setTime() {
//     time.innerText = timer()
// }
// function clickStart() {
//     setInterval('setTime()', 1)
// }

// function fixed() {
//     let a = time.innerText
//     fix.innerHTML += `<li>${a}</li>`

// }

// setInterval()

let para = document.querySelector('p')
// console.log(para.getAttribute("class"));
// para.setAttribute("title", "simple-text")
// para.setAttribute("data-info", "customAttribute")


// let class_p = para.className
// console.log(class_p);
console.log(para.dataset.info);
para.dataset.info = "pourzare"
console.log(para.dataset.info);

para.style.color = "#f0f0f0"

let menu = document.querySelector('ul#menu')
menu.style.display = 'flex'
menu.style.padding = '.5rem 2rem'
// menu_item.style.listStyleType = none


let menu_item = document.querySelectorAll('ul#menu > li')
// console.log(typeof menu_item);
menu_item.forEach(i => {
    i.style.padding = '0.5rem 2rem'
    i.style.color = '#0000ff'

})
// menu_item.style.padding = '.5rem 1rem'
// menu_item.style.color = '#0000ff'
