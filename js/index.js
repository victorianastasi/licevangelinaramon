window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    let btnTop = document.getElementById("btnTop");
    console.log(btnTop)

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    }

    btnTop.addEventListener('click', () => {
        console.log("funca")
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

});