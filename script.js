// let el = document.querySelector('.container > a');
// console.log(el.classList);
// el.classList.remove("btn-primary")
// el.classList.add("btn-warning")
// el.classList.add("btn-lg")
// el.classList.remove("mb-5")
// el.classList.toggle("btn-lg")

// console.log(el.children);

// Array.from(el.children).forEach((i, index) => {
//     i.classList.add("alert")
//     if ((index + 1) % 2 == 0) {
//         i.classList.add("alert-info")
//     } else {
//         i.classList.add("alert-danger")
//     }

// })

// console.log(el.parentElement.classList);
// console.log(el.previousElementSibling);
// console.log(el.nextElementSibling.classList);

// document.addEventListener('click', (e) => {
//     // e.target.classList.toggle("btn-info")
//     let a = e.target
//     // console.log(a.innerText);
//     a.innerText = 'Clicked !'
// })


let switch_el = document.querySelector('.switch > .button');

document.addEventListener('click', (e) => {
    let e_parent = e.target.parentElement
    e_parent.classList.toggle('active')
})
