window.addEventListener('DOMContentLoaded', (event) => {
    
    let idPlatos = "platos";
    let idDesayunos = "desayunos";

    function showRecipes(unidad, id){
        let acu = ``;
        for (let i = 0; i < unidad.length; i++) {
            acu += `
            <div class="recipe-unit">
                <img class="recipe-unit-img" src="${unidad[i].imagen}" alt="Receta">
                <div class="recipe-unit-text">
                    <p>${unidad[i].nombre}</p>
                </div>
            </div>
            `;
        }
        document.getElementById(id).innerHTML = acu;
    }
    
    let platos = [
        {"nombre": "Omelete de queso y zapallitos con tomate, lechuga y papas doradas", "imagen": "../img/recipes/rec1.jpeg"},
        {"nombre": "Arroz con vegetales", "imagen": "../img/recipes/rec16.jpg"},
        {"nombre": "Pescado con puré mixto y brócolis al vapor", "imagen": "../img/recipes/rec2.jpeg"},
        {"nombre": "Omelete de queso y tarta espinaca con ensalada de zanahoria", "imagen": "../img/recipes/rec3.jpeg"},
        {"nombre": "Tacos de verdura y pollo", "imagen": "../img/recipes/rec21.jpeg"},
        {"nombre": "Filet de merluza con puré de papa", "imagen": "../img/recipes/rec4.jpg"},
        {"nombre": "Fideos con brócoli y ajo", "imagen": "../img/recipes/rec5.jpeg"},
        {"nombre": "Omelete de espinaca y queso y ensalada de arroz, tomate y zanahoria", "imagen": "../img/recipes/rec7.jpeg"},
        {"nombre": "Ravioles de calabaza y salteado de brócoli", "imagen": "../img/recipes/rec11.jpg"},
        {"nombre": "Omelete de queso y brócoli con papas y calabaza horno", "imagen": "../img/recipes/rec8.jpg"},
        {"nombre": "Ñoquis con salsa de espinaca", "imagen": "../img/recipes/rec9.jpeg"},
        {"nombre": "Ensalada de palta y tomate", "imagen": "../img/recipes/rec15.jpg"},
        {"nombre": "Guiso de lentejas", "imagen": "../img/recipes/rec12.jpeg"},
        {"nombre": "Fideos integrales con vegetales", "imagen": "../img/recipes/rec13.jpg"},
        {"nombre": "Milanesa de pollo con calabazas horno", "imagen": "../img/recipes/rec14.jpg"},
        {"nombre": "Tortilla de papa y calabaza", "imagen": "../img/recipes/rec18.jpg"},
        {"nombre": "Fideos con vegetales", "imagen": "../img/recipes/rec17.jpg"},
        {"nombre": "Arroz, lentejas, ensalada de tomate, revuelto de zapallitos", "imagen": "../img/recipes/rec19.jpg"},
        {"nombre": "Pizza con vegetales (cebolla morrón y berenjena)", "imagen": "../img/recipes/rec23.jpeg"}
    ];

    let desayunos = [
        {"nombre": "Café con leche, mandarina, y budín de banana y nuez", "imagen": "../img/recipes/rec25.jpeg"},
        {"nombre": "Tostadas de salvado con guacamole", "imagen": "../img/recipes/rec6.jpg"},
        {"nombre": "Budín de banana y nuez", "imagen": "../img/recipes/rec24.jpeg"},
        {"nombre": "Granola", "imagen": "../img/recipes/rec22.jpeg"},
        {"nombre": "Tostadas con guacamole y huevo revuelto", "imagen": "../img/recipes/rec10.jpg"},
        {"nombre": "Budín de avena", "imagen": "../img/recipes/rec26.jpg"}
    ];

    showRecipes(platos, idPlatos);
    showRecipes(desayunos, idDesayunos);

});