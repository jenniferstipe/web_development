var user = prompt("You see a Matrix node in front of you.  Do you JACK IN, WAIT, or FLEE?").toUpperCase();

switch(user) {
 case 'JACK IN':
     console.log("You successfully jack into the Matrix.");
     var fightAction = prompt("You see an Agent!  Do you fight him?").toUpperCase();
     var weaponChoice = prompt("Do you use a weapon against the agent?").toUpperCase();
     if (fightAction === 'YES' && weaponChoice === 'YES') {
         console.log("You defeat the agent!");
     }
     else {
         console.log("The agent defeats you!");
     }
     break;
 case 'WAIT':
     console.log("You hesistate at the Matrix node.");
     var waitAction = prompt("Someone approaches!  Do you talk to them?").toUpperCase();
     var identityChoice = prompt("Do you hide your true identity?").toUpperCase();
     if (waitAction === 'YES' || identityChoice === 'YES') {
         console.log("You meet Morpheus!");
     }
     else {
         console.log("You fail to meet Morpheus!");
     }
     break;
 case 'FLEE':
     console.log("You run away from the Matrix node!");
     break;     
 default:
     console.log("The Matrix node is unable to process your action, please try again.");
}