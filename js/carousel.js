window.addEventListener('DOMContentLoaded', (event) => {
    console.log('carousel');
    
    let carousel =[
        {"title":"Antropometría", "text":"La antropometría nos informa los cambios de composición corporal cuando realizamos un plan de alimentación adaptado.", "link": "../views/about.html"},
        {"title":"Alimentación basada en plantas", "text":"Es muy importante el seguimiento profesional para que puedas asesorarte y seguir una alimentación completa en nutrientes esenciales.", "link": "../views/recipe.html"},
        {"title":"Antropometría", "text":"La antropometría nos informa los cambios de composición corporal cuando realizamos un plan de alimentación adaptado.", "link": "../views/about.html"},
        {"title":"Antropometría", "text":"La antropometría nos informa los cambios de composición corporal cuando realizamos un plan de alimentación adaptado.", "link": "../views/about.html"},
        {"title":"Alimentación basada en plantas", "text":"Es muy importante el seguimiento profesional para que puedas asesorarte y seguir una alimentación completa en nutrientes esenciales.", "link": "../views/recipe.html"}
    ];

    function showCarousel(){
        let acu = ``;
        for (let i = 0; i < carousel.length; i++) {
            acu += `
            <div class="carousel-item">
                <div class="carousel-img carousel-img-${i+1}"></div>
                <div class="carousel-caption">
                    <a class="carousel-caption-content" href="${carousel[i].link}">
                        <h5 class="primaryText carousel-caption-title">${carousel[i].title}</h5>
                        <p class="carousel-caption-text">${carousel[i].text}</p>
                    </a>
                </div>
            </div>
            `;
        };
        /* <div class="carousel-item">
                <div class="carousel-img carousel-img-${i+1}"></div>
                <div class="carousel-caption">
                    <a class="carousel-caption-content" href="${carousel[i].link}">
                        <h5 class="primaryText carousel-caption-title">${carousel[i].title}</h5>
                        <p class="carousel-caption-text">${carousel[i].text}</p>
                    </a>
                </div>
            </div> */
        document.getElementById("test").innerHTML = acu;
        console.log(acu)
    }
    showCarousel();
});