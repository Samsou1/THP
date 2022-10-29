class Node{
  constructor(array, children = [], value = null){
    this.data = array;
    this.children = children;
    this.value = value;
  }

  hasChildren(){
    return !!this.children;
  }

  numberofJ1(){
    let ary = this.data.flat();
    return ary.reduce(function(acc, current){
      if(current == 'J1'){
        return acc + 1;
      }else{
        return acc;
      }
    },0)
  }

  numberofJ2(){
    let ary = this.data.flat();
    return ary.reduce(function(acc, current){
      if(current == 'J2'){
        return acc + 1;
      }else{
        return acc;
      }
    },0)
  }

  moreJ1(){
    return this.numberofJ1() > this.numberofJ2();
  }

  winner(board = this.data){
    const isWinningRow = ([a, b, c]) => (
      a !== null && a === b && b === c
    );

    let winner = null;

    // Horizontal
    board.forEach((line) => {
        if (isWinningRow(line)) {
            winner = line[0];
        }
    });

    // Vertical
    [0, 1, 2].forEach((col) => {
        if (isWinningRow([board[0][col], board[1][col], board[2][col]])) {
            winner = board[0][col];
        }
    });

    if (winner) {
        return winner;
    }

    // Diagonal
    const diagonal1 = [board[0][0], board[1][1], board[2][2]];
    const diagonal2 = [board[0][2], board[1][1], board[2][0]];
    if (isWinningRow(diagonal1) || isWinningRow(diagonal2)) {
        return board[1][1];
    }

    const isFull = board.every((line) => (
      line.every((cell) => cell !== null)
    ));
    return isFull ? 'tie' : null;
  }
}
