window.addEventListener('DOMContentLoaded', (event) => {
    
    let btnTop = document.getElementById("btnTop");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    }

    btnTop.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

});