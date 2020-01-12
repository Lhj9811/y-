var btn = document.getElementsByClassName('btn')[0],
    qrbox = document.getElementsByClassName('qrbox')[0];
var clicknumber = 1;
btn.onclick = function () {
    if (clicknumber % 2 !== 0) {
        btn.innerHTML = '展开';
        btn.classList.remove('before');
        btn.classList.add('after');
        qrbox.style.transform = `translateX(${153}px)`
        clicknumber = 2;
    } else {
        btn.innerHTML = '收起';
        btn.classList.remove('after');
        btn.classList.add('before')
        qrbox.style.transform = `translateX(${0}px)`
        clicknumber = 1;
    }
}