### Rock Paper Scissors App

## HTML Setup
- Instructions for player
- Three radio buttons (rock, paper, scissors)
    - Images
    - Radio buttons need names
    - Radio buttons need different values
- Shoot button
- Empty divs for win, loss, draw and for current round result (4 divs)

## JavaScript Setup
- Gram DOM Elements
- Initialize State
    - Wins: 0
    - Losses: 0
    - Draw: 0
- Add event listener to 'shoot' button
    - On click
        - Store the computer's throw
            - Need a random play between rock, paper, or scissors
            - Math.random() min=1, max=3
        - Store the user's throw
            - Grab the checked input and get its value
        - Compare the user's throw to the computer's throw
        - Display the result of the throw

