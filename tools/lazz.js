function starLazylogin(defaultImg) {
    var imgs = document.querySelectorAll('img[data-src]');
    imgs = Array.from(imgs);
    setDefaultImgs();
    loginLazyImg();
    var timer = null;
    document.body.onscroll = function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            loginLazyImg();
        }, 100)
    }

    function setDefaultImgs() {
        if (!defaultImg) {
            return;
        }
        for (var i = 0; i < imgs.length; i++) {
            var img = imgs[i];
            img.src = defaultImg;
        }
    }

    function loginLazyImg() {
        for (var i = 0; i < imgs.length; i++) {
            var img = imgs[i];
            if (loginImg(img)) {
                imgs.splice(i, 1);
                i--;
            }
        }
    }

    function loginImg(img) {
        var rect = img.getBoundingClientRect();
        if (rect.bottom <= 0) {
            return false;
        }
        if (rect.top >= document.documentElement.clientHeight) {
            return false;
        }
        img.src = img.dataset.src;
        return true;
    }
}