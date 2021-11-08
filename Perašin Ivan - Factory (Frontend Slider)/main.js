const firstR = document.getElementById('firstRow');
const secondR = document.getElementById('secoundRow');
const btnLijevi = document.getElementById('arrowLeft');
const btnDesni = document.getElementById('arrowRight');

btnLijevi.addEventListener('click', () => {
    var widthUpper = firstR.firstChild.nextSibling.clientWidth + 10 + 'px';
    var widthLower = secondR.firstChild.nextSibling.clientWidth + 10 + 'px';

    firstR.insertBefore(firstR.firstChild, firstR.lastChild);
    firstR.insertBefore(firstR.firstChild, firstR.lastChild);
    secondR.insertBefore(secondR.firstChild, secondR.lastChild);
    secondR.insertBefore(secondR.firstChild, secondR.lastChild);


    firstR.animate([
        // keyframes
        { transform: 'translateX(' + widthUpper + ')' },
        { transform: 'translateX(-' + widthUpper / 2 + ')' }
    ], {
        // timing options
        duration: 500,
    });

    secondR.animate([
        // keyframes
        { transform: 'translateX(' + widthLower + ')' },
        { transform: 'translateX(-' + widthLower / 2 + ')' }
    ], {
        // timing options
        duration: 500,
    });
});

function insertAfter(x, target) {
    target.parentNode.insertBefore(x, target.nextSibling);
}

btnDesni.addEventListener('click', () => {
    var widthUpper = firstR.lastChild.previousSibling.clientWidth + 10 + 'px';
    var widthLower = secondR.lastChild.previousSibling.clientWidth + 10 + 'px';

    firstR.animate([
        // keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(' + widthUpper + ')' }
    ], {
        // timing options
        duration: 500,
    });

    secondR.animate([
        // keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(' + widthLower + ')' }
    ], {
        // timing options
        duration: 500,
    });

    setTimeout(function () {
        insertAfter(firstR.lastChild, firstR.firstChild);
        insertAfter(firstR.lastChild, firstR.firstChild);
        insertAfter(secondR.lastChild, secondR.firstChild);
        insertAfter(secondR.lastChild, secondR.firstChild);
    }, 500);
});
