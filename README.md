```
  _______    _______   _______     _________    ____________    ____________    _____________        
 |       |  |       | |       |        |       |               |            |         |             |       |
 |       |  |       | |       |        |       |               |            |         |             |       |
 |_______|  |_______| |       |        |       |               |                      |             |       |
 |          | \       |       |        |       |---------      |                      |             |_______|
 |          |  \      |       |        |       |               |                      |                     |
 |          |   \     |       |        |       |               |            |         |                     |
 |          |    \    |_______|  |_____|       |____________   |____________|         |                     |


--------------------------------------------------------------------------------------------------------------------
```

## Project by: Megan Roberts
## Tech Dregree Track: Fullstack JavaScript
## Project Title: Tic Tac Toe
## Project Requirements:
```
    1) Use the supplied mockup files and HTML snippets to guide you in building a Tic Tac Toe game. You can use jQuery or plain JavaScript to complete this project. Don't use an already programmed Tic Tac Toe plugin or library.
    2) When the page loads, the startup screen should appear. Use the tictactoe-01-start.png mockup, and the start.txt HTML snippet to guide you.
    3) Add programming, so that when the player clicks the start button the start screen disappears, the board appears, and the game begins. Use the tictactoe-02-inprogress.png mockup, and the board.txt HTML snippet to guide you.
    4) Add the game play following these rules:
        a) Play alternates between X and O.
        b) The current player is indicated at the top of the page -- the box with the symbol O or X is highlighted for the current player. You can do this by simply adding the class .active to the proper list item in the HTML. For example, if it's player one's turn, the HTML should look like this: <li class="players active" id="player1">
        c) When the current player mouses over an empty square on the board, it's symbol the X or O should appear on the square. You can do this using the x.svg or o.svg graphics (hint use JavaScript to set the background-image property for that box.)
        d) Players can only click on empty squares. When the player clicks on an empty square, attach the class box-filled-1 (for O) or box-filled-2 (for X) to the square. The CSS we're providing will automatically add the proper image to the square marking it as occupied.
        e) The game ends when one player has three of their symbols in a row either horizontally, vertically or diagonally. If all of the squares are filled and no players have three in a row, the game is a tie.
    5) Add programming so that when the game ends, the board disappears and the game end screen appears. Use the tictactoe-03-winner1.png and tictactoe-04-winner2.png mockups, and the win.txt HTML snippet for guidance. Depending on the game results the final screen should:
        a) Show the word "Winner" or the phrase "It's a Tie!"
        b) Add the appropriate class to the <div> for the winning screen: <div class="screen screen-win" id="finish"> screen-win-one for player 1, screen-win-two for player two, or screen-win-tie if the game ends with no winner. For example, if player 1 wins, the HTML should look like this: <div class="screen screen-win screen-win-one" id="finish">
    6) Add programming so that when a player pushes the "New Game" button, the board appears again, empty, and a new game begins.
```
## Exceeds Expectations Requirements:
```
    1) On the start screen, prompt the user add their name before the game starts
    2) Display the player’s name on the board screen during game play
    3) Add programming to support playing against the computer. Only one player plays; the other is controlled by your programming.
    4) Display the player’s name if they win the game
```
## Project Description:
In this project, you'll build a functional, two-person Tic Tac Toe game. You'll use the provided mockups, HTML, CSS and image files to create a game that requires players to add their names, take turns adding an X or O to the game board, and announce when the game ends. You'll need to keep track of the state of the game -- whose turn it is, where the X's and O's are on the board, and whether the game is a draw or, if not, who won and lost.
jQuery will be used to complete this project and I will be completing all requirements including the exceeds expectations.
