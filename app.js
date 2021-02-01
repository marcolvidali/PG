do{



    //Input
    var input = {

        value: prompt('Write a command or type "help" for a list of commands'),
        letter: "",
        word: "",

    };

    //Assigning input.letter and input.word
    input.letter = input.value.split("");
    input.word = input.value.split(" ");

    //Compiling input
    compile();



}while(true);



//Compiler
function compile(){



    //Checking if has 1 word and the second isn't ""
    if(input.word[0] != undefined && input.word[1] != ""){

        //Write
        if(input.word[0] == "write"){

            //Variables
            var words = input.word.length;
            var wordToWrite = 1;
            var alertValue;
    
            do{
    
                //Checking if alertValue is undefinited
                if(alertValue == undefined){
                    //Adding word to alertValue
                    alertValue = input.word[wordToWrite] + " ";
                }else{
                    //Adding word to alertValue
                    alertValue += input.word[wordToWrite] + " ";
                }
    
                wordToWrite++;
    
            }while(wordToWrite != words);

            //Popping up alertValue
            alert(alertValue);
    
        }

        //container = var
        else if(input.word[0] == "container" && input.word[2] != undefined && input.word[2] != ""){

            //Checking if 16 letter is a letter
            if((/[a-zA-Z]/).test(input.letter[16])){
                //Creating variable with ""
                eval("var " + input.word[1] + " = " + '"' + input.word[2] + '";');
            }else{
                //Creating variable
                eval("var " + input.word[1] + " = " + input.word[2] + ";");
            }

        }
        
        else{alert("Command not found")};
    

    }else{alert("Syntax error")};



}

//container name Marco;