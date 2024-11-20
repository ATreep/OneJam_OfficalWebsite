function inTitleBarLine() {
    function showTitleBarLine() {
        let titleBar = document.getElementsByTagName("header")[0];
        titleBar.style.borderBottom = "1px solid rgba(128, 128, 128, 0.445)";
        titleBar.style.backgroundColor = "rgba(255,255,255,0.5)";
        titleBar.style.backdropFilter="saturate(180%) blur(20px)";
        titleBar.style.webkitBackdropFilter="saturate(5) blur(20px)";
    }

    let titleBar = document.getElementsByTagName("header")[0];
    showTitleBarLine();
    if ((document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset)
        && document.documentElement.clientHeight <= document.documentElement.offsetHeight) {
        //No scrollbar
        showTitleBarLine();
    }
    else {
        titleBar.style.borderBottom = "";
        titleBar.style.backgroundColor = "";
        titleBar.style.backdropFilter="";
        titleBar.style.webkitBackdropFilter="";
    }
}

function applyTitleBar() {
    window.onscroll = function () {
        inTitleBarLine();
    };
    window.onload = inTitleBarLine;
    window.onresize = inTitleBarLine;
}

applyTitleBar();