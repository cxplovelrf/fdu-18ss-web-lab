window.onload = function () {
    var images = document.getElementById("thumbnails").getElementsByTagName("img");
    var big = document.getElementById("featured").getElementsByTagName("img");
    var text = document.getElementById("featured").getElementsByTagName("figcaption");
    var container = document.getElementById("featured");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function () {
            big[0].src = this.src.replace("small", "medium");
            big[0].title = this.title;
            text[0].innerText = this.title;
        }
    }
    container.onmouseover = function () {
        setOpacityup(text[0],12.5);
    }
    container.onmouseout = function () {
        setOpacitydown(text[0],12.5);
    }
    function setOpacityup(element,num) {
        if(Math.abs(element.style.opacity-0.8)>0.0001){
            var count = 0;
            var timer = setInterval(function () {
                count++;
                element.style.opacity = count*0.01;
                if(count>=80){
                    clearInterval(timer);
                }
            },num)
        }
    }
    function setOpacitydown(element,num) {
        if(Math.abs(element.style.opacity)>0.001){
            var count = 0;
            var timer = setInterval(function () {
                count++;
                element.style.opacity = 0.8 - count*0.01;
                if(count>=80){
                    clearInterval(timer);
                }
            },num)
        }
    }
}


