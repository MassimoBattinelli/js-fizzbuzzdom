const areaSquare = document.querySelector(".cont-square");

for (let i = 1; i <= 100; i++) {
    let numero = i;
    let multi3 = i % 3 == 0;
    let multi5 = i % 5 == 0;
    let backcol = 'blue'
    
    if (multi3) {
        backcol = 'verde';
        numero = 'fizz';
    };  
    
    if (multi5) {
        backcol = 'giallo';
        numero = 'buzz';
    };

    if (multi3 && multi5) {
        backcol = 'rosso';
        numero = 'fizzbuzz';
    };

    areaSquare.innerHTML += `
        <div class="box ${backcol}">
            ${numero}
        </div>`;
};