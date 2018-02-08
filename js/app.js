$(document).ready(() => {
    
    //html snippets for the different screens
    const start = '<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button">Start game</a></header></div>';
    const win = '<div class="screen screen-win" id="finish"><header><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header></div>';
    
    //hide the board to start and show the start screen
    $('#board').hide();
    $('body').append(start);
    
    //On click - show the game board and hide the start screen
    $('#start a').click(() => {
        $('#start').fadeOut();
        $('#board').show();
    });
    
});