const createRobot = require("./robot.js");

describe("createRobot", () => {
   test("Should return error with message invalid orientation", () => {
      const message = "Invalid orientation";
      const myRobot = createRobot([2, 1], "Nort");
      expect(myRobot.message).toBe(message);
   });

   test("Should return error message with invalid coordinates", () => {
      const message = "Invalid coordinates";
      const myRobot = createRobot([11, 1], "West");
      expect(myRobot.message).toBe(message);
   });

   test("Should return place correctly", () => {
      const message = "Robot created successfully";
      const myRobot = createRobot([7, 3], "North");
      expect(myRobot.message).toBe(message);
   });
});

describe("getPosition", () => {
   test("Should return error message with out of limits", () => {
      const message = "out of limits";
      const myRobot = createRobot([11, 1], "South");
      const result = myRobot.getPosition();
      expect(result).toBe(message);
   });

   test("Should return place correctly", () => {
      const place = { coordinates: [5, 7], orientation: "East" };
      const myRobot = createRobot([5, 7], "East");
      const result = myRobot.getPosition();
      expect(result).toHaveProperty("coordinates");
      expect(result).toMatchObject(place);
   });
});

describe("advance", () => {
   test('Should advance with coordinates [3, 6] and orientation "North" and return coordinates [3, 7]', () => {
      const place = { coordinates: [3, 7], orientation: "North" };
      const myRobot = createRobot([3, 6], "North");
      myRobot.advance();
      const result = myRobot.getPosition();
      expect(result).toMatchObject(place);
   });

   test('Should advance with coordinates [3, 6] and orientation "West" and return coordinates [2, 6]', () => {
      const place = { coordinates: [2, 6], orientation: "West" };
      const myRobot = createRobot([3, 6], "West");
      myRobot.advance();
      const result = myRobot.getPosition();
      expect(result).toMatchObject(place);
   });
});

describe("turnRight", () => {
   test('Should stay at the same position but turn orientation to "West"', () => {
      const place = { coordinates: [3, 6], orientation: "West" };
      const myRobot = createRobot([3, 6], "South");
      myRobot.turnRight();
      const result = myRobot.getPosition();
      expect(result).toMatchObject(place);
   });
});

describe("turnLeft", () => {
   test('Should stay at the same position but turn orientation to "East"', () => {
      const place = { coordinates: [3, 6], orientation: "East" };
      const myRobot = createRobot([3, 6], "South");
      myRobot.turnLeft();
      const result = myRobot.getPosition();
      expect(result).toMatchObject(place);
   });
});

describe("instructions", () => {
   test('After executing instructions, position and orientation should be [2, 2] and "North" respectively', () => {
      const place = { coordinates: [2, 2], orientation: "North" };
      const myRobot = createRobot([0, 0], "North");
      myRobot.instructions("AARAAL");
      const result = myRobot.getPosition();
      expect(result).toMatchObject(place);
   });

   test('After executing instructions, position and orientation should be [8, 2] and "South" respectively', () => {
      const place = { coordinates: [8, 2], orientation: "South" };
      const myRobot = createRobot([5, 5], "North");
      myRobot.instructions("RRAAALAAAR");
      const result = myRobot.getPosition();
      expect(result).toMatchObject(place);
   });
});
