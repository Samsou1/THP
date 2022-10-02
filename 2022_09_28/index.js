#!/usr/bin/env node

function welcome(){
  console.log('What do you wanna do ?');
  console.log('-exit to exit the program');
  console.log('-items to display the list of items');
}

function execute(){
  console.log( "Hello!" );
  let condition = true;
  while(condition == true){
    welcome();
    var prompt = require('prompt');
    prompt.start();
    prompt.get('input', function (err, result){
      switch(result.input){
        case 'exit':
          condition = false;
          console.log("Exiting program.");
          break;
        case 'items':
          displayItems();
          break;
        default:
          console.log(`Sorry, try another command`);
          break;
      }
    });
    condition = false;
  }
}

function displayItems(){
  console.log("you asked to display the items the program")
}

execute();