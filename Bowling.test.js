let { rollTheBall, scoreTable, countScore } = require("./Bowling.js");

describe("Bowling Score", () => {
  describe("turn and frame number", () => {
    beforeEach(() => {
      scoreTable = [];
    });
    it("should return O to indicate that the game is not start", () => {
      expect(scoreTable.length).toBe(0);
    });

    it("should return 1 to indicate that the game is start and the first frame is played", () => {
      rollTheBall(1, 1, scoreTable);
      expect(scoreTable.length).toBe(1);
    });
  });

  describe("Point and score", () => {
    beforeAll(() => {
      scoreTable = [];
    });
    it("should return 0 when the both launch in first frame is 0", () => {
      expect(rollTheBall(0, 0, scoreTable)).toStrictEqual([0, 0]);
    });

    it("should count the score after the first frame", () => {
      expect(countScore(scoreTable)).toBe(0);
    });

    it("should return 20 points when all frame have 1 point per launch and 10 frames played", () => {
      scoreTable = [
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
      ];
      expect(scoreTable.length).toBe(10);
      expect(countScore(scoreTable)).toBe(20);
    });

    it("should return 36 points when first frame is spare 1+9 second 3+4 all the remaining frame have 1 point per launch and all frames played", () => {
      scoreTable = [
        [1, 9], // spare
        [3, 4], // 3 added to first frame
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
      ];
      expect(countScore(scoreTable)).toBe(36);
    });

    it("should return 45 points with 2 spare in this game", () => {
      scoreTable = [
        [1, 9], // spare
        [3, 7], // 3 added to first frame
        [3, 2], // 3 added to second frame
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
      ];
      expect(countScore(scoreTable)).toBe(45);
    });

    it("should return 148 points with a spare in every frame of this game", () => {
      scoreTable = [
        [1, 9], // spare
        [3, 7], // 3 added to first frame
        [8, 2], // 3 added to second frame
        [5, 5], // etc ...
        [7, 3],
        [2, 8],
        [7, 3],
        [4, 6],
        [5, 5],
        [6, 4, 1],
      ];
      expect(countScore(scoreTable)).toBe(148);
    });

    it("should return 155 points with a strike on first frame and a spare in every frame of this game", () => {
      scoreTable = [
        [10, 0], // strike
        [3, 7], // 3 added to first frame
        [8, 2], // strike
        [5, 5], // etc ...
        [7, 3],
        [2, 8],
        [7, 3],
        [4, 6],
        [5, 5],
        [6, 4, 1],
      ];
      expect(countScore(scoreTable)).toBe(155);
    });

    it("should return 162 points with a strike on first frame, a strike on the third frame and a spare in every frame of this game", () => {
      scoreTable = [
        [10, 0], // strike
        [3, 7], // 3 added to first frame
        [10, 0], // strike
        [5, 5], // etc ...
        [7, 3],
        [2, 8],
        [7, 3],
        [4, 6],
        [5, 5],
        [6, 4, 1],
      ];
      expect(countScore(scoreTable)).toBe(162);
    });

    it("should return 172 points with a couple of strike on first frame, a strike on the third frame and a spare in every frame of this game", () => {
      scoreTable = [
        [10, 0], // strike
        [3, 7], // 3 added to first frame
        [10, 0], // strike
        [10, 0], // etc ...
        [7, 3],
        [2, 8],
        [7, 3],
        [4, 6],
        [5, 5],
        [6, 4, 1],
      ];
      expect(countScore(scoreTable)).toBe(172);
    });

    it("should return 185 points with a triple of strike on first frame, a strike on the third frame and a spare in every frame of this game", () => {
      scoreTable = [
        [10, 0], // strike
        [3, 7], // 3 added to first frame
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [2, 8],
        [7, 3],
        [4, 6],
        [5, 5],
        [6, 4, 1],
      ];
      expect(countScore(scoreTable)).toBe(185);
    });

    it("should return 267 points with strike on every frame and a spare on last frame", () => {
      scoreTable = [
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [6, 4, 1],
      ];
      expect(countScore(scoreTable)).toBe(267);
    });


    it("should return 279 points with strike on every frame and 1 strike on last frame", () => {
      scoreTable = [
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 4, 1],
      ];
      expect(countScore(scoreTable)).toBe(279);
    });


    it("should return 291 points with strike on every frame and 1 point on last launch", () => {
      scoreTable = [
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 10, 1],
      ];
      expect(countScore(scoreTable)).toBe(291);
    });


    it("should return 300 points with strike on every launch", () => {
      scoreTable = [
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 0], // strike
        [10, 10, 10],
      ];
      expect(countScore(scoreTable)).toBe(300);
    });
  });
});
