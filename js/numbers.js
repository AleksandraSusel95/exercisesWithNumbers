let number = document.querySelector(".numberResult");
let buttomDraw = document.querySelector(".buttonDraw");



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var getNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    number.innerHTML = getNumber;
}
buttomDraw.addEventListener("click", () => {
    getRandomIntInclusive(1, 100);
});

let darkTheme = document.querySelector(".darkTheme");
let buttonSwitch = document.querySelector(".buttonSwitch");
let exerciseSwitch = document.querySelector(".exerciseSwitch");
let themeName = document.querySelector(".themeName");
let exercise__textAreaSwitch = document.querySelector(".exercise__textAreaSwitch");
let exercise__textAreaDark = document.querySelector(".exercise__textAreaDark");
let jasny = document.querySelector(".jasny");

buttonSwitch.addEventListener("click", () => {
    exerciseSwitch.classList.toggle("darkTheme");
    exercise__textAreaSwitch.classList.toggle("exercise__textAreaDark");

    if (exerciseSwitch.classList.contains("darkTheme")) {
        themeName.innerText = "jasny";
        jasny.innerText = "jasny";
    } else {
        themeName.innerText = "ciemy";
        jasny.innerText = "ciemny";
    }
});


// buttonSwitch.addEventListener("click", () => {
//     exerciseSwitch.classList.toggle("darkTheme");
//     if (exerciseSwitch.classList.contains("darkTheme")) {
//         exercise__textArea.classList.add("exercise__textAreaDark");
//         exercise__textArea.classList.remove("exercise__textArea");
//         console.log("bla", exercise__textArea);
//     } else {
//         exercise__textArea.classList.remove("exercise__textAreaDark");
//         console.log('blabla');
//     }
// });

//      buttonSwitch.addEventListener("click", () =>{
//          exerciseSwitch.classList.toggle("darkTheme");

//          if (exerciseSwitch.classList.contains("darkTheme")){
//             themeName.innerText = "jasny";
//          } else {
//              themeName.innerText = "ciemny";
//          }
//     if (exerciseSwitch.classList.contains ("darkTheme")){
//     exercise__textArea.classList.toggle("exercise__textAreaDark");
// } else {
//     exercise__textArea.classList.toggle("exercise__textArea");
// }
//      });


// if (exerciseSwitch.classList.contains ("darkTheme")){
//     exercise__textArea.classList.toggle("exercise__textAreaDark");
// } else {
//     exercise__textArea.classList = "exercise__textArea";
// }


// buttonSwitch.addEventListener("click", () => {
//     exerciseSwitch.classList.toggle("darkTheme");
//     exercise__textArea.classList.toggle("exercise__textAreaDark");

//     if (exerciseSwitch.classList.contains("darkTheme")) {
//         themeName.innerText = "jasny";
//     } else {
//         themeName.innerText = "ciemny";
//     }
// });