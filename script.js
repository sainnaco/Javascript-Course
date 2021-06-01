// let data = document.getElementsByTagName('h3')
// let data = document.getElementById('article_00')
// let data = document.getElementsByClassName('article_title')
// let data = document.querySelector('body > div > article:nth-child(2) > h3')
// console.log(typeof titles);

// titles.forEach(title => {
//     console.log(title);
// });

// for (let index = 0; index < titles.length; index++) {
//     const element = titles[index];
//     console.log(element.innerText);
// }

// console.log(article_00.innerText);

// console.log(typeof data);

// for (let index = 0; index < data.length; index++) {
//     const element = data[index];
//     console.log(element.innerText);
    
// }

// console.log(typeof data);
// console.log(data.innerText);
// data.innertText = " Customize"
// data.style.color = '#cccccc'
// data.innerText += " Customize"

// for (let index = 0; index < data.length; index++) {
//     const element = data[index];
//     // element.innertText = 'AA'
//     // console.log(element.innerText);
//     // element.style.color = '#CCCCCC'
//     // element.style.fontSize = '3.5rem';
//     // element.innerText += " ----"
//     // console.log(element.innerHTML);
//     element.innerHTML += ' <span style="background: #ff0000; display: none;">New</span>'
//     console.log(element.innerHTML);
//     console.log("---------------");
//     console.log(element.innerText);
//     console.log("---------------");
//     console.log(element.textContent);
// }
// let date = new Date()
// let time = Date.now()
// console.log(date.get);
let num = 0;
let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')

function showTime() {
    let date = new Date()
    hour.innerText = date.getHours()
    minute.innerText = date.getMinutes()
    second.innerText = date.getSeconds()
}
setInterval('showTime()', 1000);