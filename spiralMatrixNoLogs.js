function spiralOrder(matrix) {
    //return 2d Array containing elements in spiral order


    let directionRDLU = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let directionLoopIndex = 0; // %4 will loop through [right, down, left, up]

    let spiralRecordArray = []; //final return;

    let checkerX = 0;
    let checkerY = 0;

    let matrixLength = matrix[0].length;
    let matrixHeight = matrix.length;
    let totalSteps = matrixLength * matrixHeight;

    let stepIndex = 0;

    let consecutiveTurns = 0;

    spiralRecordArray.push(matrix[0][0]);

    while (true) { //why doesn't this work? (stepIndex < (totalSteps - 2) || testIndex < 20) {
      if(stepIndex > (totalSteps - 2)) {
          break;
      }

      if (consecutiveTurns > 1) {
          break;
      }
      if (nextStepViable(checkerX, checkerY, directionRDLU, directionLoopIndex, matrix, commentsOnOff)) {

          xAtSpot(checkerX, checkerY, matrix);
            //adds to x, y according to current Direction
          checkerX += directionRDLU[directionLoopIndex % 4][0];
          checkerY += directionRDLU[directionLoopIndex % 4][1];

          spiralRecordArray.push(matrix[checkerY][checkerX]);
          stepIndex++;
          consecutiveTurns = 0;
      }
      else {
          directionLoopIndex++;
          consecutiveTurns++;
      }
    }
    return spiralRecordArray;
  }


  function xAtSpot(x, y, matrix) {
      matrix[y][x] = 'x';
      return;
  }


  function nextStepViable(x, y, direction, directionIndex, matrix, commentsYN) {
      let actualIndex = directionIndex % 4;
      let incrementXY = direction[actualIndex]; //returns array, R, L, D, U

      let nextX = x + incrementXY[0];
      let nextY = y + incrementXY[1];

      if (nextX > (matrix[0].length - 1) ||
       (nextY > matrix.length - 1) ||
       nextX < 0 ||
       nextY < 0) {
          return false;

      } else if (matrix[nextY][nextX] === 'x') {
          return false;

      } else if (matrix[nextY][nextX] === undefined) {
          return false;
      }

      return true;
  }


  //tests:


  matrix = [[ 1, 2, 3],
            [ 4, 5, 6],
            [ 7, 8, 9]]

  console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

  matrix = [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9,10,11,12]]


  console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

  matrix = [[1, 2, 3, 4],
            [5, 6, 7, 8],
              [10,11,12]] //should break


  console.log(spiralOrder(matrix));

  // matrix = [[1]]

  //  console.log(spiralOrder(matrix));

  // matrix = [[1, 2],
  //           [3, 4]]

  // console.log(spiralOrder(matrix));

  // matrix = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  //           [11,12,13,14,15,16,17,18,19,20],
  //           [21,22,23,24,25,26,27,28,29,30],
  //           [31,32,33,34,35,36,37,38,39,40],
  //           [41,42,43,44,45,46,47,48,49,50],
  //           [51,52,53,54,55,56,57,58,59,60],
  //           [61,62,63,64,65,66,67,68,69,70],
  //           [71,72,73,74,75,76,77,78,79,80],
  //           [81,82,83,84,85,86,87,88,89,90],
  //           [91,92,93,94,95,96,97,98,99,100]]


  // console.log(spiralOrder(matrix));
