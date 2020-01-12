menulistener();
function menulistener() {
    var menu = document.getElementsByClassName('menu')[0];
    var menumore = document.getElementsByClassName('menumore')[0];
    menu.addEventListener('mouseenter', function (e) {
        var target = e.target;
        var children = this.children[1].children;
        if (target == children[0]) {
            return;
        }
        for (let i = 0; i < children.length; i++) {
            if (target == children[i]) {
                children[i].classList.add('active');
                menumore.style.display = 'block';
            }
        }
    }, true)
    menu.addEventListener('mouseleave', function (e) {
        var target = e.target;
        var children = this.children[1].children;
        if (target == children[0]) {
            return;
        }
        for (let i = 0; i < children.length; i++) {
            if (target == children[i]) {
                children[i].classList.remove('active');
                menumore.style.display = 'none';
            }
        }
    }, true)
}
changerMenuposition();
function changerMenuposition() {
    window.addEventListener('scroll', function () {
        var downshow = document.getElementsByClassName('downshow')[0];
        var t = this.document.documentElement.scrollTop || this.document.body.scrollTo;
        var menu = document.getElementsByClassName('menu')[0];
        if (t > 55) {
            menu.style.position = 'fixed';
            menu.style.top = 0;
            downshow.style.opacity = 1;
            downshow.style.transform = `translateY(${0}px)`;
        } else if (t <= 55) {
            menu.style.position = 'absolute';
            menu.style.top = `${55}px`;
            downshow.style.opacity = 0;
            downshow.style.transform = `translateY(${-45}px)`;
        }
    }, false)
}