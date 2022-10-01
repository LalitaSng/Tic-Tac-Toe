export function getwinner(board,row,col,currentplayer){
    let i,broke=false;
    for(i=0;i<board.length;i++){
      if(board[row][i]!==currentplayer){
        broke=true
        break;
      }
    }
    if(broke===false){
      return currentplayer
    }
    broke=false;
    let j;
    for(j=0;j<board.length;j++){
      if(board[j][col]!==currentplayer){
        broke=true
        break;
      }
    }
    if(broke===false){
      return currentplayer
    }
    broke=false;
    i=0;
    j=0;
    while(i<board.length && j<board.length){
      if(board[i][j]!==currentplayer){
          broke=true
          break;
      }
      i++;
      j++;
    }
    if(broke===false){
      return currentplayer
    }
    broke=false
    i=0;
    j=board.length-1;
    while(i<board.length && j>=0){
      if(board[i][j]!==currentplayer){
        broke=true
        break;
      }
      i++;
      j--;
    }
    if(broke===false){
      return currentplayer
    }
  }
  