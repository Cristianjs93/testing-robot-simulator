function createRobot([_x, _y], direction) {
   const validOrientation = ["North", "East", "South", "West"];
   let x = _x;
   let y = _y;
   let orientation = direction;
   let message;

   (function validateParameters() {
      try {
         const isValid = validOrientation.includes(direction);
         if (!isValid) {
            throw new Error("Invalid orientation");
         }

         if (x > 10 || y > 10 || x < 0 || y < 0) {
            throw new Error("Invalid coordinates");
         }

         message = "Robot created successfully";
      } catch (error) {
         message = error.message;
      }
   })();

   function getPosition() {
      try {
         if (x > 10 || y > 10 || x < 0 || y < 0) {
            throw new Error("out of limits");
         }

         return { coordinates: [x, y], orientation };
      } catch (error) {
         return error.message;
      }
   }

   function advance() {
      if (orientation == "North") {
         y += 1;
      }
      if (orientation == "East") {
         x += 1;
      }
      if (orientation == "South") {
         y -= 1;
      }
      if (orientation == "West") {
         x -= 1;
      }
   }

   function turnRight() {
      orientation == "North"
         ? (orientation = "East")
         : orientation == "East"
         ? (orientation = "South")
         : orientation == "South"
         ? (orientation = "West")
         : orientation == "West"
         ? (orientation = "North")
         : null;
   }

   function turnLeft() {
      orientation == "North"
         ? (orientation = "West")
         : orientation == "West"
         ? (orientation = "South")
         : orientation == "South"
         ? (orientation = "East")
         : orientation == "East"
         ? (orientation = "North")
         : null;
   }

   function instructions(string) {
      for (let i = 0; i < string.length; i++) {
         string[i] == "A"
            ? advance()
            : string[i] == "R"
            ? turnRight()
            : string[i] == "L"
            ? turnLeft()
            : null;
      }
   }

   return {
      message,
      getPosition,
      advance,
      turnRight,
      turnLeft,
      instructions
   };
}

module.exports = createRobot;
