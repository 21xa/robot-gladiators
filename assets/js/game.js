var StartGame = function() {
  for (var i = 0; i < enemyNames.length; i++) {
  //reset  player stats
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//other logic remains the same...
};


var enemyNames=["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }
  for (var i = 0; i < enemyNames.length; i++) {
    debugger;
    // call fight function with enemy-robot
     fight(enemyNames[i]);
  }

  for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
var startGame = function() {
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = 50;

      fight(pickedEnemyName);
    }
    else  {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
};
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
   
        // if player picks "skip" confirm and then stop loop
        if (promptFight) "skip"  || promptFight === "SKIP"; {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

     // check enemy's health
     if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');

         // award player money for winning
      playerMoney = playerMoney + 20;
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " Welcome to Robot Gladiators! Round "  + ( i + 1));


      // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }

  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
      // leave while() loop if player is dead
      break;
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
   // end of while loop
    // end of fight function

   
        // fight function statements
    var fight = function(enemyName) {
        // repeat and execute as long as the enemy-robot is alive 
        while(enemyHealth > 0) {
          // place fight function code block here . . .
        }

}
     // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyNames + " has died!");
    } else {
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            "break";
          }
        if (enemyHealth > 0) // if the enemy-robot has health points, continue to fight
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    while (playerHealth > 0 && enemyHealth > 0)
   
    // if player choses to "skip" confirm and then stop the loop
  if (promptFight)  "skip" || promptFight === "SKIP"; }
      //confirm player wants to skip
      var confirmSkip = window.confirm( "Are you sure you'd like to quit?");

    // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney" , playerMoney);
    "break";
  }
  // if no (false), ask question again by running fight () again
  else fight();

  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    "break";
  }
  

  
    window.alert("You need to choose a valid option. Try again!");
  
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

  // Log a resulting message to the console so we know that it worked.
  // Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }

  // function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0 ) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
}
// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  // restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}

fight();