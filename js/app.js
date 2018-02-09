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
        //reset the button & fields to enabled
        $('#start a').prop('disabled', false).css('cursor', 'pointer');
        $('#playerX').prop('disabled', false).css('background-color', 'white').css('cursor', 'text');
        $('#computer').prop('disabled', false).css('cursor', 'default').parent().css('color', 'black');
        //grab the player O name value and set it
        let playerO = $('#playerO').val();
        //check to see if the checkbox has been check - computer is now player 2
        if ($('#computer').prop('checked')) {
            let playerX = 'Computer';
            $('#playerX').prop('disabled', true).css('background-color', 'lightgrey').css('cursor', 'not-allowed');
            if (playerO === '') {
                //set the button to disabled
                $('#start a').prop('disabled', true).css('cursor', 'not-allowed');
                $('#start').prepend('<p class="error" style=" background-color: red; color: white;">Please enter a name for Player O.</p>');
            }
            let players = [playerO, playerX];
            return players;
        } else {
            let playerX = $('#playerX').val();
            //if both names are there, then return the names
            if (isNaN(playerO) && isNaN(playerX)) {
                //disabled the checkbox since there are two players
                $('#computer').prop('disabled', true).css('cursor', 'not-allowed').parent().css('color', 'grey');
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
    $('.playerName').keyup(playerNames);
    $('#computer').change(playerNames);
    
    //On click - show the game board and hide the start screen & add player names
    $('#start a').click(() => {
        if (playerNames()[0] != undefined){
            $('#start').fadeOut();
            $('#board').show();
            $('#player1').append(`<p class="names">${playerNames()[0]}</p>`);
            $('#player2').append(`<p class="names">${playerNames()[1]}</p>`);
        } else {
            playerNames();
        }
    });
    
    //////////////////////////////GAME////////////////////////////////////
    
    //GAME Variables
    const numberOfSquares = 9;
    
    //game starts with playerO
    $('#player1').addClass('active');
    
    //get the empty boxes in the grid
    const emptyBoxNumbers = () => {
        //create an array
        let emptyBoxNumbers = [];
        //push idex numbers for empty boxes
        $('.box').each((index, elem) => {
            if (!$(elem).hasClass('box-filled-1') && !$(elem).hasClass('box-filled-2')) {
                emptyBoxNumbers.push(index);
            }
        });
        return emptyBoxNumbers;
    }
    
    //computer plays function
    const computerPlays = () => {
        //get a random number
        let random = Math.floor(Math.random() *emptyBoxNumbers.length);
        //use the random number to get a random empty box for the computer to claim
        $('.box').eq(emptyBoxNumbers()[random]).addClass('box-filled-2');
        //switch over to player1
        $('#player2').removeClass('active');
        $('#player1').addClass('active');
        checkForWinner();
    }
    
    //game functionality
    const game = (event) => {
        //first check that the box is not already claimed
        if( !$(event.target).hasClass('box-filled-1') && !$(event.target).hasClass('box-filled-2')) {
            //check if the computer is playing
            if (playerNames()[1] === 'Computer') {
                //player1 takes their turn - give the box the correct class & switch active player
                if ($('#player1').hasClass('active')) {
                    $(event.target).addClass('box-filled-1');
                    $('#player1').removeClass('active');
                    $('#player2').addClass('active');
                }
            //computer is not playing
            } else {
                //player1 takes their turn - give the box the correct class & switch active player
                if ($('#player1').hasClass('active')) {
                    $(event.target).addClass('box-filled-1');
                    $('#player1').removeClass('active');
                    $('#player2').addClass('active');
                //player2 takes their turn - give the box the correct class & switch active player
                } else {
                    $(event.target).addClass('box-filled-2');
                    $('#player2').removeClass('active');
                    $('#player1').addClass('active');
                }
            }
        }
        checkForWinner();
    }
    
    const checkForWinner = () => {
        if (emptyBoxNumbers().length < 7) {
            console.log('at least 3 boxes');
        }
    }
    
    //call game on box click event
    $('.box').click((event) => {
        game(event);
        //if the computer is active, then auto chose a box
        if (playerNames()[1] === 'Computer' && $('#player2').hasClass('active')) {
            computerPlays();
        }
    });
    
    
});