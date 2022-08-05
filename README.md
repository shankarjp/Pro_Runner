### Pro Runner
Abeshek is a pro gamer that has played and completed all the games available to him. His friend Aananth has now tasked you with creating a new game so he can get over his boredom. 

To make sure he doesn’t complete it, Aananth wants you to create an infinite runner game with a wall and a ceiling. Clicking or pressing space will switch the gravity and the runner will move to the opposite wall.

The goal of the game is to survive the obstacles and increase his score.

### Modes 
##### Normal Mode
 - For normal mode, the runner can be a simple square that keeps moving horizontally. The runner should move between the wall and ceiling on clicking/pressing space, i.e, if the runner is moving on the floor, it must move to the ceiling on click/space and stay there till next click/space.
   <p align="center">
    <img  style="max-width: 250px;width:100%;height:auto;" src="https://i.imgur.com/0R5BWLE.png">
   </p>

 - Implement a points system based on distance travelled.
 - Add randomly appearing holes in the floor and ceiling. If the runner touches the hole, the game must end and the score must be   displayed on the screen.
  
  <p align="center">
    <img  style="max-width: 250px;width:100%;height:auto;" src="https://i.imgur.com/P53j5fb.png">
  </p>

 - Save the highest score using local storage and display it.

Aananth and Abeshek enjoyed the game a lot. They can't wait to play it with all their friends, but before that, add some more features to the game.

##### Hacker Mode
 - As the points increase, make the runner move faster and faster.
 - Use a vertically asymmetric runner (example: a triangle). When the gravity is switched, flip the player upside down as well.
  <p align="center">
    <img  style="max-width: 250px;width:100%;height:auto;" src="https://i.imgur.com/dGEtfJw.png">
  </p>

 - Generate different shaped obstacles that move up and down on the screen. The game must end if the runner touches the obstacle.
  <p align="center">
    <img  style="max-width: 250px;width:100%;height:auto;" src="https://i.imgur.com/KH4O7UF.png">
  </p>

 - Generate power ups on the map that activate abilities for sometime (example: slows down the game, grants invincibility, etc.)

##### Hackermode++
 - Abeshek wants a unique experience every time he plays the game. So procedurally generate the map.

*NOTE: Normal mode is necessary to complete the task. Hacker mode is highly encouraged*

### Resources
You’ll need to learn a fair bit of JavaScript for this task, especially using the canvas Element and the Canvas JavsScript API. Refer to the Beginner’s guide that was posted for more resources.
Refer [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

### Limitations
You are not allowed to use any frameworks, like Phaser.io for example. The code must be in Vanilla JS only. You also don’t require a backend, and you shouldn’t need to make one.

### Deadline
Task 2A (Normal Mode) 26th June 2021 | 11:59pm

Task 2B (Hacker and Hacker++ Modes) 24th July 2021 | 11:59pm

*Good luck and happy coding!*