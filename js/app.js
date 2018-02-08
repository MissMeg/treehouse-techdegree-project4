$(document).ready(() => {
    
    //html snippets for the different screens
    const start = '<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><input id="playerO" class="playerName" type="text" placeholder="Name Player O"><input id="playerX" class="playerName" type="text" placeholder="Name Player X"><label class="playerName"><input id="computer" type="checkbox">Play against the computer.</label><a href="#" class="button">Start game</a></header></div>';
    const win = '<div class="screen screen-win" id="finish"><header><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header></div>';
    
    //Game Variables
    let playerO = '';
    let playerX = '';
    
    //hide the board to start and show the start screen
    $('#board').hide();
    $('body').append(start);
    
    //Give focus to the first input to prompt user to type in names
    $('#playerO').focus();
    
    //check for player name values - set the player name values
    const playerNames = () => {
        //remove prevoius error messages
        $('.error').remove();
        //reset the button & field to enabled
        $('#start a').prop('disabled', false).css('cursor', 'pointer');
        $('#playerX').prop('disabled', false).css('background-color', 'white').css('cursor', 'text');
        //grab the player O name value and set it
        let playerO = $('#playerO').val();
        //check to see if the checkbox has been check - computer is now player 2
        if ($('#computer').prop('checked')) {
            let playerX = 'Computer';
            $('#playerX').prop('disabled', true).css('background-color', 'lightgrey').css('cursor', 'not-allowed');
            let players = [playerO, playerX];
            return players;
        } else {
            let playerX = $('#playerX').val();
            //if both names are there, then return the names
            if (isNaN(playerO) && isNaN(playerX)) {
                let players = [playerO, playerX];
                return players;
            //if one of the fields is false then ask to enter only letters or to enter in the second name
            } else {
                //set the button to disabled for either error
                $('#start a').prop('disabled', true).css('cursor', 'not-allowed');
                //inform to only use letters
                $('#start').prepend('<p class="error" style=" background-color: red; color: white;">Please use letters only.</p>');
                //inform to enter two names
                if ( playerO === '' || playerX === '') {
                    //remove any prevous errors so only one is displayed
                    $('.error').remove();
                    //inform to enter both player names
                    $('#start').prepend('<p class="error" style=" background-color: red; color: white;">Please enter both player names or play against the computer.</p>');
                }
            }
        }
    }
    
    //Call validation
    $('.playerName').keyup(playerNames).focusout(playerNames);
    $('#computer').change(playerNames);
    
    //On click - show the game board and hide the start screen
    $('#start a').click(() => {
        $('#start').fadeOut();
        $('#board').show();
        console.log(playerNames());
        $('#player1').append(`<p class="names">${playerNames()[0]}</p>`);
        $('#player2').append(`<p class="names">${playerNames()[1]}</p>`);
    });
    
    //////////////////////////////GAME////////////////////////////////////
    
    //GAME Variables
    let playerOScore = 0;
    let playerXScore = 0;
    
    
});