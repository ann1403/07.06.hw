//   /* Определяем тип браузера */
//   var ie = 0;
//   var op = 0;
//   var ff = 0;
//   var browser = navigator.userAgent;
//   if (browser.indexOf("Opera") != -1) op = 1;
//   else {
//       if (browser.indexOf("MSIE") != -1) ie = 1;
//       else {
//           if (browser.indexOf("Firefox") != -1) ff = 1;
//       }
//   }
//   var block = document.getElementById(".block");
//   delta_x = 0;
//   delta_y = 0;
//   /* Ставим обработчики событий на нажатие и отпускание клавиши мыши */
//   block.onmousedown = saveXY;
//   if (op || ff) {
//       block.addEventListener("onmousedown", saveXY, false);
//   }
//   document.onmouseup = clearXY;
//   /* При нажатии кнопки мыши попадаем в эту функцию */
//   function saveXY(obj_event) {
//       /* Получаем текущие координаты курсора */
//       if (obj_event) {
//           x = obj_event.pageX;
//           y = obj_event.pageY;
//       } else {
//           x = window.event.clientX;
//           y = window.event.clientY;
//           if (ie) {
//               y -= 2;
//               x -= 2;
//           }
//       }
//       /* Узнаём текущие координаты блока */
//       x_block = block.offsetLeft;
//       y_block = block.offsetTop;
//       /* Узнаём смещение */
//       delta_x = x_block - x;
//       delta_y = y_block - y;
//       /* При движении курсора устанавливаем вызов функции moveWindow */
//       document.onmousemove = moveBlock;
//       if (op || ff)
//           document.addEventListener("onmousemove", moveBlock, false);
//   }

//   function clearXY() {
//       document.onmousemove = null; // При отпускании мыши убираем обработку события движения мыши
//   }

//   function moveBlock(obj_event) {
//       /* Получаем новые координаты курсора мыши */
//       if (obj_event) {
//           x = obj_event.pageX;
//           y = obj_event.pageY;
//       } else {
//           x = window.event.clientX;
//           y = window.event.clientY;
//           if (ie) {
//               y -= 2;
//               x -= 2;
//           }
//       }
//       /* Вычисляем новые координаты блока */
//       new_x = delta_x + x;
//       new_y = delta_y + y;
//       block.style.top = new_y + "px";
//       block.style.left = new_x + "px";
//   }

// function get(el) {
//     if (typeof el == 'string') return document.getElementById(el);
//     return el;
// }

// function mouseX(e) {
//     if (e.pageX) {
//         return e.pageX;
//     }
//     if (e.clientX) {
//         return e.clientX + (document.documentElement.scrollLeft ?
//             document.documentElement.scrollLeft :
//             document.body.scrollLeft);
//     }
//     return null;
// }

// function mouseY(e) {
//     if (e.pageY) {
//         return e.pageY;
//     }
//     if (e.clientY) {
//         return e.clientY + (document.documentElement.scrollTop ?
//             document.documentElement.scrollTop :
//             document.body.scrollTop);
//     }
//     return null;
// }

// function dragable(clickEl, elem) {
//     var p = get(clickEl);
//     var t = get(elem);
//     var drag = false;
//     offsetX = 0;
//     offsetY = 0;
//     var mousemoveTemp = null;

//     if (t) {
//         var move = function(x, y) {
//             t.style.left = (parseInt(t.style.left) + x) + "px";
//             t.style.top = (parseInt(t.style.top) + y) + "px";
//         }
//         var mouseMoveHandler = function(e) {
//             e = e || window.event;

//             if (!drag) { return true };

//             var x = mouseX(e);
//             var y = mouseY(e);
//             if (x != offsetX || y != offsetY) {
//                 move(x - offsetX, y - offsetY);
//                 offsetX = x;
//                 offsetY = y;
//             }
//             return false;
//         }
//         var start_drag = function(e) {
//             e = e || window.event;

//             offsetX = mouseX(e);
//             offsetY = mouseY(e);
//             drag = true; // basically we're using this to detect dragging

//             // save any previous mousemove event handler:
//             if (document.body.onmousemove) {
//                 mousemoveTemp = document.body.onmousemove;
//             }
//             document.body.onmousemove = mouseMoveHandler;
//             return false;
//         }
//         var stop_drag = function() {
//             drag = false;

//             // restore previous mousemove event handler if necessary:
//             if (mousemoveTemp) {
//                 document.body.onmousemove = mousemoveTemp;
//                 mousemoveTemp = null;
//             }
//             return false;
//         }
//         p.onmousedown = start_drag;
//         p.onmouseup = stop_drag;
//     }
// }

window.onload = function() {
    draggable('one');
};

let dragObject = null;

function draggable(id) {
    let object = document.getElementById(id);
    object.style.position = "absolute";
    object.onmousedown = function() {
        dragObject = object;
    }
}

document.onmouseup = function(e) {
    dragObject = null;
};

document.onmousemove = function(e) {
    let x = e.pageX;
    let y = e.pageY;

    if (dragObject == null)
        return;

    dragObject.style.left = x + "px";
    dragObject.style.top = y + "px";
};