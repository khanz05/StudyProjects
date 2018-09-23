function AddNumbers() {
    let num1 = document.getElementById('firstNum').value;
    let num2 = document.getElementById('secondNum').value;

    let result = Number(num1) + Number(num2);
    document.write("<p>Hello " + result + "! How are you today?<\/p>");
};

function testWhile() {
    let target = Number(prompt("enter a number"));
    let start = 0;
    while (start <= target) {
        document.write(start);
        start = start + 2;
    }
};

function WorkingWithArray() {
    //let myarray = [5];
    //alert("Old Array length" + myarray.length);
    //for (var i = 0; i < 5; i++)
    //{
    //    myarray.push(i * 2);
    //}
    //alert("Pushed Array" + myarray.length);

    //for (var i = 0; i < 5; i++) {
    //    document.write(myarray.pop() + "</br>");
    //}
    //alert("Poped Array" + myarray.length);

    //let myarray = [1, 2, 3, 4, 5];
    //let lastElement = myarray.pop();
    //document.write("Last Element = " + lastElement + "</br>");
    //var firstElement = myarray.shift()
    //document.write("First Element = " + firstElement + "</br>");
    //document.write(myarray + "</br>");
    //document.write("Array Length = " + myarray.length);

    //let myArray = [10, 12, 39, 1, 8, 5, 3];
    //myArray.sort(function (a, b) { return a - b });
    //document.write(myArray);

    //let myarray = [1, 2, 3, 5, 55, 67];
    //myarray.splice(3, myarray.length);
    //document.write(myarray);

    //let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //let result = myArray.filter(function (value, index, array) {return value % 2 == 0;});
    //document.write(result);

    //let myArray = ["Sam", "Mark", "Tim", "Sam"];
    //let result = myArray.filter(function (value, index, array)
    //{
    //    return array.indexOf(value) == index;
    //});
    //document.write(result);

    let myArray = new Array(3);
    for (var i = 0; i < 3; i++) {
        myArray[i] = new Array(5);
    }

    let start = 1;
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 5; j++)
        {
            myArray[i][j] = start;
            start += 1;
        }
    }

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 5; j++) {
            document.write(myArray[i][j] + "&emsp;");
        }
        document.write("</br>");
    }
};

//Function Closure Start
function additionOfNumber(num1, num2)
{
    let result = "Result is : ";

    function add()
    {
        return result + (num1 + num2);
    };
    return add;
};

function callAddClosue()
{
    let result = additionOfNumber(10, 9);
    document.write(result);
};
//Function Closure Ends 

let clickCount = (function ()
{
    let count = 0;
    return function ()
    {
        return ++count;
    }
})();





