$(document).ready(() => {
    
    //html snippets for the different screens
    const start = '<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><input id="playerO" class="playerName" type="text" placeholder="Name Player O"><input id="playerX" class="playerName" type="text" placeholder="Name Player X"><label class="playerName"><input id="computer" type="checkbox">Play against the computer.</label><a href="#" class="button">Start game</a></header></div>';
    const winO = '<div class="screen screen-win screen-win-one" id="finish"><header><h1>Tic Tac Toe</h1><p class="message">Winner</p><a href="#" class="button">New game</a></header></div>';
    const winX = '<div class="screen screen-win screen-win-two" id="finish"><header><h1>Tic Tac Toe</h1><p class="message">Winner</p><a href="#" class="button">New game</a></header></div>';
    const draw = `<div class="screen screen-win screen-win-tie" id="finish"><header><h1>Tic Tac Toe</h1><p class="message">It's a Tie</p><a href="#" class="button">New game</a></header></div>`;
    
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
    
    //on hover - if the box is empty, show the player's "tile" when they mouseover a box and remove it when the mouseleaves
    $('.box').hover((e) => {
        //check to make sure it is not a taken square
        if (!$(e.target).hasClass('box-filled-1') && !$(e.target).hasClass('box-filled-2') && !$(e.target).hasClass('noHover')) {
            //if player one is active then add their class to the box
            if( $('#player1').hasClass('active')) {
                $(e.target).addClass('box-filled-1');
            //if player to is active then add their class to the box
            } else if ( $('#player2').hasClass('active')) {
                $(e.target).addClass('box-filled-2');
            }
        }
    }, (e) => {
        //if the box is not an active square, then remove the fill class
        if (!$(e.target).hasClass('noHover')) {
            $(e.target).removeClass('box-filled-1');
            $(e.target).removeClass('box-filled-2');
        }
    });
    
    //computer plays function
    const computerPlays = () => {
        //get a random number
        let random = Math.floor(Math.random() *emptyBoxNumbers().length);
        //use the random number to get a random empty box for the computer to claim
        $('.box').eq(emptyBoxNumbers()[random]).addClass('box-filled-2').addClass('noHover');
        //switch over to player1
        $('#player2').toggleClass('active');
        $('#player1').toggleClass('active');
        checkForWinner();
    }
    
    //game functionality
    const game = (event) => {
        //add noHover class - hover event will not affect game squares
        $(event.target).addClass('noHover');
        //switch turns
        $('#player1').toggleClass('active');
        $('#player2').toggleClass('active');
        //first check that the box is not already claimed
        if( !$(event.target).hasClass('box-filled-1') && !$(event.target).hasClass('box-filled-2')) {
            //check if the computer is playing
            if (playerNames()[1] === 'Computer') {
                //player1 takes their turn - give the box the correct class
                if ($('#player1').hasClass('active')) {
                    $(event.target).addClass('box-filled-1');
                }
            //computer is not playing
            } else {
                //player1 takes their turn - give the box the correct class
                if ($('#player1').hasClass('active')) {
                    $(event.target).addClass('box-filled-1');
                //player2 takes their turn - give the box the correct class
                } else {
                    $(event.target).addClass('box-filled-2');
                }
            }
        }
        //run the check for winner each time
        checkForWinner();
    }
    
    //check for winner on horizontal 
    const checkHorizontal = (playerBoxes) => {
        //if the player boxes contain any of the following sets of 3, return true
        if ( (playerBoxes.includes(0) && playerBoxes.includes(1) && playerBoxes.includes(2)) || (playerBoxes.includes(3) && playerBoxes.includes(4) && playerBoxes.includes(5)) || (playerBoxes.includes(6) && playerBoxes.includes(7) && playerBoxes.includes(8)) ) {
            return true;
        //no winner return fales
        } else {
            return false;
        }
    }
    
    //check for winner on vertical
    const checkVertical = (playerBoxes) => {
        //if the player boxes contain any of the following sets of 3, return true
        if ( (playerBoxes.includes(0) && playerBoxes.includes(3) && playerBoxes.includes(6)) || (playerBoxes.includes(1) && playerBoxes.includes(4) && playerBoxes.includes(7)) || (playerBoxes.includes(2) && playerBoxes.includes(5) && playerBoxes.includes(8)) ) {
            return true;
        //no winner return fales
        } else {
            return false;
        }
    }
    
    //check for winner on diagonal
    const checkDiagonal = (playerBoxes) => {
        //if the player boxes contain any of the following sets of 3, return true
        if ( (playerBoxes.includes(0) && playerBoxes.includes(4) && playerBoxes.includes(8)) || (playerBoxes.includes(2) && playerBoxes.includes(4) && playerBoxes.includes(6)) ) {
            return true;
        //no winner return fales
        } else {
            return false;
        }
    }
    
    //show winner page
    const showWinner = (win, name) => {
        //hide the board
        $('#board').hide();
        //show the correct finish page
        $('body').append(win);
        //if there is a winner name, then show it as well
        if (name) {
            $('.message').text(`Winner: ${name}`);
        }
    }
    
    //check for winners
    const checkForWinner = () => {
        //hold each players squares
        let player1Boxes = [];
        let player2Boxes = [];
        //if there are at least 3 squares filled then start checking for winners
        if (emptyBoxNumbers().length < 7) {
            //push each player's squares into their array
            $('.box').each((index, elem) => {
                if ($(elem).hasClass('box-filled-1')) {
                    player1Boxes.push(index);
                } else if ($(elem).hasClass('box-filled-2')) {
                    player2Boxes.push(index);
                }
            });
            //check to see if player1 has won the game
            if ( checkHorizontal(player1Boxes) || checkVertical(player1Boxes) || checkDiagonal(player1Boxes) ) {
                //show player 1 winning page
                showWinner(winO, playerNames()[0]);
            //check to see if player2 has won
            } else if ( checkHorizontal(player2Boxes) || checkVertical(player2Boxes) || checkDiagonal(player2Boxes) ) {
                //show player 2 winning page
                showWinner(winX, playerNames()[1]);
            //if neither has won then see if the board is filled
            } else {
                //if the board is filled then show the tie page
                if ( player1Boxes.length + player2Boxes.length === 9) {
                    showWinner(draw);
                }
            }
        }
    }
    
    //call game on box click event
    $('.box').click((event) => {
        //check if the box is an active square - if so, ignore - if not then call game
        if (!$(event.target).hasClass('noHover')) {
            game(event);
            //if the computer is active, then auto chose a box after player1 chooses a box
            if (playerNames()[1] === 'Computer' && $('#player2').hasClass('active')) {
                computerPlays();
            }
        }
    });
    
    const resetGame = () => {
        console.log('reached here');
        $('.active').removeClass('active');
        $('.box').removeClass('box-filled-1').removeClass('box-filled-2');
        $('#player1').addClass('active');
        $('#finish').remove();
        $('#board').show();
    }
    
    $('#finish a').click(() => {
        console.log('reached here');
        resetGame();
    });
    
    
});