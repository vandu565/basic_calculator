var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;


for(var i=0; i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(){
        
        var value= this.getAttribute('data-value');
        if(value=='+'){
            operator='+';
            operand1=parseFloat(display.textContent);
            display.textContent = "";
        }
        else if(value=='%'){
            operator='%';
            operand1=parseFloat(display.textContent);
            display.textContent = "";
        }
        else if(value=='/'){
            operator='/';
            operand1=parseFloat(display.textContent);
            display.textContent = "";
        }
        else if(value=='-'){
            operator='-';
            operand1=parseFloat(display.textContent);
            display.textContent = "";
        }
        else if(value=='*'){
            operator='*';
            operand1=parseFloat(display.textContent);
            display.textContent = "";
        }
        else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;}
        
        
        
        
        else if(value=='='){
            operand2=parseFloat(display.textContent);
            var result=eval(operand1 +" "+ operator+" " + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }

        }
        else if(value=='AC'){
            display.textContent = "";


        }
        
        
        else{
            display.textContent += value;
        }







    });
}
