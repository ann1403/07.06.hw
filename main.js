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