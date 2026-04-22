$(document).ready(function() {
    const board = $('#puzzle-board');
    let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    let isLocked = false;

    function initGame() {
        isLocked = false;
        $('#win-message').hide();
        $('#restart-btn').hide();
        shuffleTiles();
        renderBoard();
    }

    function shuffleTiles() {
        tiles = [1, 2, 3, 4, 5, 6, 7, 8, 0];
        let emptyPos = 8;
        
        for (let i = 0; i < 300; i++) {
            const neighbors = getNeighbors(emptyPos);
            const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
            [tiles[emptyPos], tiles[randomNeighbor]] = [tiles[randomNeighbor], tiles[emptyPos]];
            emptyPos = randomNeighbor;
        }

        if (isSolved()) {
            shuffleTiles();
        }
    }

    function getNeighbors(pos) {
        const neighbors = [];
        const row = Math.floor(pos / 3);
        const col = pos % 3;

        if (row > 0) neighbors.push(pos - 3);
        if (row < 2) neighbors.push(pos + 3);
        if (col > 0) neighbors.push(pos - 1);
        if (col < 2) neighbors.push(pos + 1);

        return neighbors;
    }

    function renderBoard() {
        board.empty();
        tiles.forEach((tile, index) => {
            const div = $('<div></div>').addClass('tile');
            if (tile === 0) {
                div.addClass('empty');
            } else {
                div.css('background-image', `url('public/logo${tile}.PNG')`);
                div.attr('data-index', index);
                div.on('click', function() {
                    moveTile(index);
                });
            }
            board.append(div);
        });
    }

    function moveTile(index) {
        if (isLocked) return;

        const emptyIndex = tiles.indexOf(0);
        if (isAdjacent(index, emptyIndex)) {
            [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
            renderBoard();
            checkWin();
        }
    }

    function isAdjacent(idx1, idx2) {
        const row1 = Math.floor(idx1 / 3);
        const col1 = idx1 % 3;
        const row2 = Math.floor(idx2 / 3);
        const col2 = idx2 % 3;

        const rowDiff = Math.abs(row1 - row2);
        const colDiff = Math.abs(col1 - col2);

        return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
    }

    function isSolved() {
        const solution = [1, 2, 3, 4, 5, 6, 7, 8, 0];
        return tiles.every((val, index) => val === solution[index]);
    }

    function checkWin() {
        if (isSolved()) {
            isLocked = true;
            $('#win-message').show();
            $('#restart-btn').show();
        }
    }

    $('#restart-btn').on('click', initGame);

    initGame();
});
