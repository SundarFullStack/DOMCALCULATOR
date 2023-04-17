
//Element creator

function create_element(tagName, attriName, attrriValue) {
    
    let element = document.createElement(tagName);

    element.setAttribute(attriName, attrriValue);

    return element;
    
}

//Button Creator

function create_button(tagName, attriName, attrriValue, Content,event,functionCall) {
    
    let button = document.createElement(tagName);

    button.setAttribute(attriName, attrriValue);

    button.addEventListener('click', calculation);

    button.textContent = Content;

    return button;

} 

//create Body

let container = create_element('div', 'class', 'container');

let row = create_element('div', 'class', 'row');

let box_inside = create_element('div', 'class', 'col d-flex justify-content-center');

let label = create_element('h5', 'class', 'label text-center mb-3');

label.innerText = 'Javascript Calculator';

//create calculator

let calculator = (create_element('div', 'class', 'calculator'));

//input

let input = (create_element('input', 'type', 'text'));

input.setAttribute('class','form-control result')

input.setAttribute('id', 'calcu');

input.setAttribute('placeholder', '0');

input.setAttribute('value',' ')


// row 1 buttons

let row1 = create_element('div', 'class', 'row'); 

let button_C = create_button('button', 'class', 'btn btn-dark btn-lg clear font-weight-light', "C");

button_C.setAttribute('onclick', 'calculation("operator","C")');

let button_divider = create_button('button', 'class', 'btn btn-dark btn-lg font-weight-light', "/");

button_divider.setAttribute('onclick', 'calculation("operator","/")');

let button_X = create_button('button', 'class', 'btn btn-dark btn-lg font-weight-light', "X");

button_X.setAttribute('onclick', 'calculation("operator","*")');

//row 2 buttons

let row2 = create_element('div', 'class', 'row'); 

let button_7 = create_button('button', 'class', 'btn btn-dark btn-lg font-weight-light', "7");

button_7.setAttribute('onclick', 'calculation("number","7")');

let button_8 = create_button('button', 'class', 'btn btn-dark btn-lg font-weight-light', "8");

button_8.setAttribute('onclick', 'calculation("number","8")');

let button_9 = create_button('button', 'class', 'btn btn-dark btn-lg font-weight-light', "9");

button_9.setAttribute('onclick', 'calculation("number","9")');

let button_sub = create_button('button', 'class', 'btn btn-dark btn-lg font-weight-light', "-");

button_sub.setAttribute('onclick', 'calculation("operator","-")');

//row 3 buttons

let row3 = create_element('div', 'class', 'row'); 

let button_4 = create_button('button', 'class', 'btn btn-dark btn-lg font-weight-light', "4");

button_4.setAttribute('onclick', 'calculation("number","4")');

let button_5 = create_button('button', 'class', 'btn btn-dark btn-lg font-weight-light', "5");

button_5.setAttribute('onclick', 'calculation("number","5")');

let button_6 = create_button('button', 'class', 'btn btn-dark btn-lg font-weight-light', "6");

button_6.setAttribute('onclick', 'calculation("number","6")');

let button_plus = create_button('button', 'class', 'btn btn-dark btn-lg font-weight-light', "+");

button_plus.setAttribute('onclick', 'calculation("operator","+")');

//row 4 buttons

let row4 = create_element('div', 'class', 'row'); 

let button_1 = create_button('button', 'class', 'btn btn-dark btn-lg font-weight-light', "1");

button_1.setAttribute('style', 'height: 51px;');

button_1.setAttribute('onclick', 'calculation("number","1")');

let button_2 = create_button('button', 'class', 'btn btn-dark btn-lg font-weight-light', "2");

button_2.setAttribute('style', 'height: 51px;');

button_2.setAttribute('onclick', 'calculation("number","2")');

let button_3 = create_button('button', 'class', 'btn btn-dark btn-lg font-weight-light', "3");

button_3.setAttribute('style', 'height: 51px;');

button_3.setAttribute('onclick', 'calculation("number","3")');

let button_equal = create_button('button', 'class', 'btn btn-dark btn-lg enter', "=");

button_equal.setAttribute('onclick', 'calculation("operator","=")');


//last row 5 buttons

let row5 = create_element('div', 'class', 'row'); 

row5.setAttribute('style','margin-top: -61px;')

let button_0 = create_button('button', 'class', 'btn btn-dark btn-lg zero font-weight-light', "0");

button_0.setAttribute('onclick', 'calculation("number","0")');

let button_dot = create_button('button', 'class', 'btn btn-dark btn-lg font-weight-light', ".");

button_dot.setAttribute('onclick', 'calculation("number",".")');




//append Body

document.body.append(container);

container.append(row);

row.append(box_inside);

//append calculator

box_inside.append(calculator);

calculator.append(label);

calculator.append(input);

//row1

calculator.append(row1);

row1.append(button_C);

row1.append(button_divider);

row1.append(button_X);



//row2

calculator.append(row2);

row2.append(button_7);

row2.append(button_8);

row2.append(button_9);

row2.append(button_sub);


//row3

calculator.append(row3);

row3.append(button_4);

row3.append(button_5);

row3.append(button_6);

row3.append(button_plus);


//row4

calculator.append(row4);

row4.append(button_1);

row4.append(button_2);

row4.append(button_3);

row4.append(button_equal);


//row5

calculator.append(row5);

row5.append(button_0);

row5.append(button_dot);


//calculation function

function calculation(datatype, button_value) {
    
    if (datatype == "operator") {
        
        if (button_value == "C") {
            
           return input.value = ' ';
        }

        else if (button_value == '+' || button_value == '-' || button_value == '*' || button_value == '/') {
            
           return  input.value += button_value;
        }

        else if(button_value == '='){
            
           return input.value = eval(input.value);

        }

    }

    else if (datatype == "number") {

       return input.value += button_value
        
    }
    
}