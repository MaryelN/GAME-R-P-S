const getUserChoice = userInput => {
   userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors' || userInput ==='bomb') {
    return userInput;
  }
  else {
    console.log('Error!')
  };
};


function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  };
};



function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Its a tie!';
  } if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'You loose';
    } else {
      return 'You won!'
      };
    };
    if (userChoice === 'paper') {
    if (computerChoice === 'rock'){
      return 'You won';
    } else {
      return 'You loose!'
      };
    };
    if (userChoice === 'scissors') {
    if (computerChoice === 'paper'){
      return 'You won';
    } else {
      return 'You loose!'
      };
    };
    if(userChoice === 'bomb'){
      return 'YOU WON!'
    };
  } 


const playGame = (choice) => {
  const userChoice = getUserChoice(choice);
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame('bomb');
