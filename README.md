README.md

//Added two versions, one with a log function (commentON) which, if enabled, will log how the program is incrementing/checking for open "tiles".



//return 2d Array containing elements in spiral order

  //create 'direction': array containing increments of right, down, left, right - will increment in the direction and amount specified here each step

    //create next step check (nextStepViable),
    //will go to next step if:
    //1. next step is not out of bounds (> matrix.length - 1)
    //2. next step has not been gone before (next step is not 'x', which is put in each step)

    //If available, then an 'x' will be placed at the current spot, the spot incremented, and the value at the new spot added to the final array.

    //exit while loop once it is ran length*height times, or if the search "turns" more than once consecutively.
