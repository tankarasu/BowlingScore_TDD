module.exports = {
  rollTheBall: (firstLaunch, secondLaunch, scoreTable) => {
    let score = scoreTable;
    score.push([firstLaunch, secondLaunch]);
    return score[0];
  },
  scoreTable: [],
  countScore: scoreTable => {
    let result = 0;
    let index = 0;

    // arranging the score with specificity
    scoreTable.forEach(frame => {
      // verify if is not the first frame
      if (index !== 0) {
        let previousFrame = scoreTable[index - 1];

        // verify if a strike is present
        if (previousFrame[0] === 10) {
          if (frame[0] !== 10) {
            previousFrame.push(frame[0], frame[1]);
          } // if the next launch is strike add the next launch of next frame again
          else if (frame[0] === 10) {
            if (index !== 9) {
              previousFrame.push(frame[0], scoreTable[index + 1][0]);
            } else {
              previousFrame.push(frame[0], frame[1]);
            }
          }
        }

        // verify if a spare is present
        if (
          previousFrame[0] + previousFrame[1] === 10 &&
          previousFrame[0] !== 10
        ) {
          previousFrame.push(frame[0]);
        }
      }
      index++;
    });

    // counting the points
    scoreTable.forEach(frame => {
      frame.forEach(points => {
        result += points;
      });
    });

    return result;
  },
};

// TODO should insert default value into function rollTheBall
