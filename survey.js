const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Class created for easier organization/ manipulation of data

class Profile {
  constructor(nickname) {
    this.nickname = nickname,
    this.activity,
    this.music,
    this.meal,
    this.food,
    this.sport,
    this.superpower;
  }
  generateFunProfile() {
    console.log(`${this.nickname} loves ${this.activity.toLowerCase()} while listening to ${this.music.toLowerCase()}, eating ${this.food.toLowerCase()} for ${this.meal.toLowerCase()}, prefers ${this.sport.toLowerCase()} over any other sport, and is amazing at ${this.superpower.toLowerCase()}.`);
  }
}

// Callback waterfall populates an instance of Profile with the answers inputted

rl.question("What's your nickname? ", nickname => {
  const newProfile = new Profile(nickname);
  rl.question("What's an activity you enjoy doing? ", activity => {
    newProfile.activity = activity;
    rl.question("What do you listen to while doing that? ", music => {
      newProfile.music = music;
      rl.question("Which meal of the day is your favourite? ", meal => {
        newProfile.meal = meal;
        rl.question("What's your favourite thing to eat for that meal? ", food => {
          newProfile.food = food;
          rl.question("What's your favourite sport? ", sport => {
            newProfile.sport = sport;
            rl.question("What's your superpower? ", superpower => {
              newProfile.superpower = superpower;
              rl.close();
              newProfile.generateFunProfile();
            });
          });
        });
      });
    });
  });
});