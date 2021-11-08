const firstR = document.getElementById('firstRow');
const secondR = document.getElementById('secoundRow');
const btnLeft = document.getElementById('arrowLeft');
const btnRight = document.getElementById('arrowRight');

function insertAfter(x, target) {
    target.parentNode.insertBefore(x, target.nextSibling);
}

btnLeft.addEventListener('click', () => {
    var widthUpper = firstR.firstChild.nextSibling.clientWidth + 10 + 'px';
    var widthLower = secondR.firstChild.nextSibling.clientWidth + 10 + 'px';

    firstR.insertBefore(firstR.firstChild, firstR.lastChild);
    firstR.insertBefore(firstR.firstChild, firstR.lastChild);
    secondR.insertBefore(secondR.firstChild, secondR.lastChild);
    secondR.insertBefore(secondR.firstChild, secondR.lastChild);

    firstR.animate([
        { transform: 'translateX(' + widthUpper + ')' },
        { transform: 'translateX(-' + widthUpper / 2 + ')' }
    ], {
        duration: 500,
    });

    secondR.animate([
        { transform: 'translateX(' + widthLower + ')' },
        { transform: 'translateX(-' + widthLower / 2 + ')' }
    ], {
        duration: 500,
    });
});

btnRight.addEventListener('click', () => {
    var widthUpper = firstR.lastChild.previousSibling.clientWidth + 10 + 'px';
    var widthLower = secondR.lastChild.previousSibling.clientWidth + 10 + 'px';

    firstR.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(' + widthUpper + ')' }
    ], {
        duration: 500,
    });

    secondR.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(' + widthLower + ')' }
    ], {
        duration: 500,
    });

    setTimeout(function () {
        insertAfter(firstR.lastChild, firstR.firstChild);
        insertAfter(firstR.lastChild, firstR.firstChild);
        insertAfter(secondR.lastChild, secondR.firstChild);
        insertAfter(secondR.lastChild, secondR.firstChild);
    }, 500);
});