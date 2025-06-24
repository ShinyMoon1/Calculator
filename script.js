let display = document.querySelector('.display');

let buttons = Array.from(document.querySelectorAll('.button'));

buttons.map((button) => {
    button.addEventListener("click", (event) => {
        switch(event.target.innerText){
            case 'AC':
                display.innerText = "0";
                break;
            case '=':
                display.innerText = eval(display.innerText);
                break;
            case '×':
                display.innerText += '*';
                break;
            case '%':
                let procent = display.innerText + '/100';
                display.innerText = eval(procent);
                break;
            case '+/-':
                display.innerText = eval(display.innerText + '* (-1)');
                break;
            default:
                if(display.innerText === '0' && event.target.innerText !== '.'){
                    display.innerText = event.target.innerText;
                }else{
                    display.innerText += event.target.innerText;
                }
        }
    });
});
