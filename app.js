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
        else if(input.word[0] == "container"){

            //Creating var
            eval('var ' + input.word[0] + ';');

            alert(input.word[1]);

        }
        
        
        else{alert("Command not found")};
    

    }else{alert("Syntax error")};



}