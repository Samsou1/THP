
# TicTac TOW

![POW](./TTT.png)

This app was created by [Pefington](https://github.com/Pefington) and [Samsou1](https://github.com/Samsou1) on Github for academic purposes only

## What does it do? I hear you ask

It allows 2 players to play a the famous game **Tic Tac Toe**.
This program will keep track of how many games were won by player 1, how many were won by player 2 and how many games were drawn.

## How to play

To start a round of games, simply launch **app.rb**.

The program should ask what the names of the 2 players are.
You will then have an empty board displayed in your console with numbers from 1 to 9.

Player 1 will pick a number to put a 'X' at this place.

Then Player 2 will pick another number to put an 'O' at this place.

Players will keep choosing where to place their symbol until one of them placed 3 of the same symbol in the same row, column or diagonal.

The game ends and the program will ask you if you want to start another game.
Be careful: you cannot replace a symbol that has already been placed. If all 9 placeholders of the board have been filled and no winning combination has been found then the game ends in a draw.

## Architecture of the program

**app.rb** : The main file app.rb will launch a new *Application* instance thanks to the /**lib/app/application.rb** file.

**application.rb** This very file will display a new menu to ask what the names of the players are and hence create 2 new *Player* instances thanks to **player.rb**

It will then launch a new series of games until the players decide to stop thanks to the *Game* class. This game will be created thanks to the *Board* class (**board.rb**) in which a total of 9 *BoardSquares* (**board_square.rb**) are created and change overtime.

**game.rb** will also display the board thanks to the *Render* class (**render.rb**). This class will take *Board* as an argument (ie, an array of *BoardSquares*) and display it accordingly.

When the players decide to stop, the *Application* session will close.
