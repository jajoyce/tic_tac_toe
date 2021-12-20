## Tic Tac Toe - Break down a big project into small steps!

### Rules of the game

    9 squares
        - All start out empty
        - Filled one-by-one
        - Filled with an X or an O
        - Once a square is filled, it can't be "unfilled" or changed
        - 2 "players" 
            -   X player
            -   O player
        - X begins by placing X in a square
        - O follows by placing O in a square
        - When three squares in a row (horizontally, vertically, or diagonally) are filled with all X's or all O's, then the game is over



### MVP - minimal viable product: the most stripped down version possible of what you're trying to build

    - i.e. MVP for instagram, facebook, etc.
    - For every feature in the mvp you have to ask, "what if I didn't have that... would it still work?"

## User stories

    9 squares
        - 3 rows
        - 3 columns
        - Does this matter for our JavaScript code? Our CSS code? One or the other? Or both?
        - How do we keep track of when three squares in a row are filled?
        - do we really have two players, or simply an alternation between displaying X and O depending on whether the DOM has been clicked an ODD or EVEN number of times?

    Which of the above game features are going to be controlled by CSS? HTML? JavaScript?
        - Game board
            "Square" element (HTML)
            Number of squares (HTML)
            Placement of squares (CSS)
        - Game status
            - Is a square available or filled? (Javascript - for loop and conditional)
            - Whose "turn" is it? (JavaScript - for loop and conditional)
            - Fill a square (JavaScript - event listener, X or O display, querySelector)
            - Are there three squares in a row filled with X or O?


    Should we start with building out our gameboard (CSS and HTML) or with our game status tracking mechanism (JavaScript)?