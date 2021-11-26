const upperRow = document.getElementById('upperRow');
const lowerRow = document.getElementById('lowerRow');
const btnLeft = document.getElementById('arrowLeft');
const btnRight = document.getElementById('arrowRight');



function insertAfter(x, target) {
    target.parentNode.insertBefore(x, target.nextSibling);
}

btnLeft.addEventListener('click', () => {
    var widthUpper = upperRow.firstChild.nextSibling.clientWidth + 10 + 'px';
    var widthLower = lowerRow.firstChild.nextSibling.clientWidth + 10 + 'px';

    upperRow.insertBefore(upperRow.firstChild, upperRow.lastChild);
    upperRow.insertBefore(upperRow.firstChild, upperRow.lastChild);
    lowerRow.insertBefore(lowerRow.firstChild, lowerRow.lastChild);
    lowerRow.insertBefore(lowerRow.firstChild, lowerRow.lastChild);

    upperRow.animate([
        { transform: 'translateX(' + widthUpper + ')' },
        { transform: 'translateX(-' + widthUpper / 2 + ')' }

    ], {
        duration: 500,
    });

    lowerRow.animate([
        { transform: 'translateX(' + widthLower + ')' },
        { transform: 'translateX(-' + widthLower / 2 + ')' }
    ], {
        duration: 500,
    });

btnLeft.setAttribute('disabled','disabled');
window.setTimeout(function() {
    btnLeft.removeAttribute("disabled");
}, 500);
});

btnRight.addEventListener('click', () => {
    var widthUpper = upperRow.lastChild.previousSibling.clientWidth + 10 + 'px';
    var widthLower = lowerRow.lastChild.previousSibling.clientWidth + 10 + 'px';

    upperRow.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(' + widthUpper + ')' }
    ], {
        duration: 500,
    });

    lowerRow.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(' + widthLower + ')' }
    ], {
        duration: 500,
    });

    setTimeout(function () {
        insertAfter(upperRow.lastChild, upperRow.firstChild);
        insertAfter(upperRow.lastChild, upperRow.firstChild);
        insertAfter(lowerRow.lastChild, lowerRow.firstChild);
        insertAfter(lowerRow.lastChild, lowerRow.firstChild);
    }, 500);

    btnRight.setAttribute('disabled','disabled');
window.setTimeout(function() {
    btnRight.removeAttribute("disabled");
}, 500);
});