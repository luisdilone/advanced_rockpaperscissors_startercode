//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        $(document).ready(function(){
                function process (){
                        
                }
                
                $("#form").click(function(){
                        userName = $("#name").val();
                        // $("#outcome").append("<p>",userName, " Wins","<p>")
                });
                $("#rock").click(function (){
                        userChoice = "rock"
                        process();
                })
                 $("#paper").click(function (){
                        userChoice = "paper"
                        process();
                })
                 $("#scissors").click(function (){
                        userChoice = "scissors"
                        process();
                })
                
                
                 
                
        });
                
        
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice
        
// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES

var userChoice = "";
var userName = "Mystery Person";
var computerChoice = "";
var winner = "";
var choices = ["rock","paper","scissors"];
var numbWin = 0;
var numbLose = 0;

//FUNCTIONS

function process (){
        computerChoice = choices[Math.floor(Math.random()*3)];
                console.log("Comp = " + computerChoice);
                console.log("User = " + userChoice);
        if ( userChoice === "rock"){
                if ( computerChoice === "rock"){
                        winner = "tie";
                }
                else if ( computerChoice === "paper"){
                        winner = "comp";
                }
                else if ( computerChoice === "scissors"){
                        winner = "user";
                }
        }
        if ( userChoice === "paper"){
                if ( computerChoice === "rock"){
                        winner = "user";
                }
                else if ( computerChoice === "paper"){
                        winner = "tie";
                }
                else if ( computerChoice === "scissors"){
                        winner = "comp";
                }
        }
        if ( userChoice === "scissors"){
                if ( computerChoice === "rock"){
                        winner = "comp";
                }
                else if ( computerChoice === "paper"){
                        winner= "user";
                }
                else if ( computerChoice === "scissors"){
                        winner = "tie";
                }
        }
        console.log("Winner = " + winner);
        
        if (winner === "user"){
                $("#outcome").append("<p>" + userName + " You Win!!! :D <p>");
                numbWin = numbWin + 1;
                $("#numbWin").text(numbWin);
                
        }
        if (winner === "comp"){
                $("#outcome").append("<p>" + userName + " You Lose!!! :( <p>");
                numbLose = numbLose + 1;
                $("#numbLose").text(numbLose);
        }
        if (winner === "tie"){
                $("#outcome").append("<p>" + userName + " You Tied? :/ <p>");
        }
}
                

// DOCUMENT READY FUNCTION

$(document).ready(function(){
              
                
        $("#form").click(function(){
                userName = $("#name").val();
                // $("#outcome").append("<p>",userName, " Wins","<p>")
                });
                $("#rock").click(function (){
                        userChoice = "rock"
                        process();
                })
                 $("#paper").click(function (){
                        userChoice = "paper"
                        process();
                })
                 $("#scissors").click(function (){
                        userChoice = "scissors"
                        process();
                })
        });