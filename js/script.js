// document.addEventListener("DOMContentLoaded", function() {
//
//     let x = 0,
//         a = document.querySelector('.Achievements .number'),
//         b = document.querySelector(".btn-load"),
//         c = document.querySelector('.Achievements');
//
//
//     // function hexToRgb(hex) {
//     //     let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//     //     return result ? {
//     //         r: parseInt(result[1], 16),
//     //         g: parseInt(result[2], 16),
//     //         b: parseInt(result[3], 16)
//     //     } : null;
//     // }
//
//     a.innerHTML = window.getComputedStyle(c).getPropertyValue('color');
//     b.addEventListener("click",function () {
//         switch (x) {
//             case 9:
//                 x = 0;
//                 break;
//             case 8:
//                 x = 1;
//                 break;
//             default:
//                 x += 2;
//                 break;
//         }
//
//         let hex =  "#" + x + "f" + x + "f" + x + "f";
//         a.style.color = hex;
//         // a.innerText = `rgb(${hexToRgb(hex).r},${hexToRgb(hex).g},${hexToRgb(hex).b})`;
//         a.innerHTML = window.getComputedStyle(a).getPropertyValue('color');
//     },false);
// });
//
