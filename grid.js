let tablejoueur = [];
let tableennemy = [];

let playergrid = createGrids('plateau', tablejoueur);
let ennemygrid = createGrids('plateau2', tableennemy);

function createGrids(addelem, tableplayer) {

    for (let x = 0; x < 10; x = x + 1) {
        tableplayer[x] = [];
        let tr = document.createElement('tr');
        tr.className = 'ligne' + x;
        document.body.querySelector('#'+ addelem).appendChild(tr);
        for (let y = 0; y < 11; y = y + 1) {
            if (y == 0) {
                let td = document.createElement('td');
                td.className = 'caseBataille';
                // linterieur de la balise td = x //
                td.textContent = x + 1;
                tableplayer[x][y] = td;
                document.body.querySelector('#'+addelem+'>.ligne' + x ).appendChild(td);

            } else {
                let td = document.createElement('td');
                td.className = 'caseBataille';
                document.body.querySelector('#'+addelem+'>.ligne' + x).appendChild(td);
            }
        } 
    }
    return tableplayer;
}

