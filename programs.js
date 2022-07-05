

        
function programOne() {
    
    var a=document.getElementById("input1").value
        if((/[a-zA-Z]/).test(a))
        {
            alert("The inputed values are: "+a)
            console.log("The inputed values are: "+a)
        }
        else
        {
            alert("Error, Not a character")
        }
        
        document.getElementById("input1").value=""
}
function programTwo(){
    
    var n1=parseInt(document.getElementById("num1").value)
    var n2=parseFloat(document.getElementById("num2").value)
    if(isNaN(n1) && isNaN(n2))
    {
        alert("Enter the numbers in desired boxes")
    }
    else
    {
        var sum=n1+n2
        alert("The sum of the numbers is: "+sum)
    }

}
function simpleInterest(){
    var amount=parseFloat(document.getElementById("textAmount").value)
    var interest=parseFloat(document.getElementById("textInterset").value)
    var years=parseFloat(document.getElementById("textYears").value)
    if(isNaN(amount) && isNaN(interest) && isNaN(years))
    {
        alert("Enter the desired fields for the calculation of simple interest")
    }
    else
    {
        var simpleInt=amount*interest*years
        alert("The calculated SImple Interest is: "+simpleInt)
    }
    document.getElementById("textAmount").value=""
    document.getElementById("textInterset").value=""
    document.getElementById("textYears").value=""
}
function checkPassed()
{
    var mark=parseFloat(document.getElementById("textMark").value)
    if(isNaN(mark))
    {
        alert("Enter your mark properly")
    }
    else if(mark>100)
    {
        alert("You are not Isaac Newton, Try a valid mark dear")
        document.getElementById("textMark").value
    }
    else if(mark<0)
    {
        alert("Error")
        document.getElementById("textMark").value=""
        document.getElementById("resultSet").innerHTML=""
        
    }
    else
    {
        if(mark>=50)
        {
            document.getElementById("resultSet").innerHTML="Congratulations, You are PASSED"
            document.getElementById("resultSet").style.color="green"
        }
        else
        {
            document.getElementById("resultSet").innerHTML="Please try in your NEXT CHANCE,You are NOT PASSED"
            document.getElementById("resultSet").style.color="red"
        }
    }
}   

function checkGrade(){
    var mark=parseFloat(document.getElementById("textMarkTotal").value)
    if(mark>100)
    {
        alert("Enter a valied mark")
        document.getElementById("gradeSet").innerHTML=""
        document.getElementById("textMarkTotal").value=""
    }
    else if(mark>=90)
    {
        document.getElementById("gradeSet").innerHTML="Grade: A"
        document.getElementById("gradeSet").style.color="Green"
    }
    else if(mark>=80)
    {
        document.getElementById("gradeSet").innerHTML="Grade: B"
        document.getElementById("gradeSet").style.color="Green"
    }
    else if(mark>=70)
    {
        document.getElementById("gradeSet").innerHTML="Grade: C"
        document.getElementById("gradeSet").style.color="Green"
    }
    else if(mark>=60)
    {
        document.getElementById("gradeSet").innerHTML="Grade: D"
        document.getElementById("gradeSet").style.color="Green"
    }
    else if(mark>=50)
    {
        document.getElementById("gradeSet").innerHTML="Grade: E"
        document.getElementById("gradeSet").style.color="Green"
    }
    else if(mark>=0)
    {
        document.getElementById("gradeSet").innerHTML="You are Failed"
        document.getElementById("gradeSet").style.color="red"
    }
    else
    {
        alert("Something ERROR")
        document.getElementById("gradeSet").innerHTML=""
        document.getElementById("textMarkTotal").value=""
    }
}
function checkDay(){
    var dayCount=parseInt(document.getElementById("textDay").value)
    switch (dayCount)
    {
        case 1: alert("Hi, This is SUNDAY")
                document.getElementById("daySet").innerHTML="Hi, This is SUNDAY"
                break
        case 2: alert("Hi, This is MONDAY")
                document.getElementById("daySet").innerHTML="Hi, This is Monday"
                break
        case 3: alert("Hi, This is Tuesday")
                document.getElementById("daySet").innerHTML="Hi, This is Tuesday"
                break
        case 4: alert("Hi, This is Wednesday")
                document.getElementById("daySet").innerHTML="Hi, This is Wednesday"
                break
        case 5: alert("Hi, This is Thursady")
                document.getElementById("daySet").innerHTML="Hi, This is Thursady"
                break
        case 6: alert("Hi, This is Friday")
                document.getElementById("daySet").innerHTML="Hi, This is Friday"
                break
        case 7: alert("Hi, This is Saturday")
                document.getElementById("daySet").innerHTML="Hi, This is Saturday"
                break
        default: alert("Dont behave as you are too smart")
                document.getElementById("daySet").innerHTML=""
                break
    }
}

function multiplicationTable(){
    let multNumber=parseInt(document.getElementById("textNumMult").value)
    let res;

    document.getElementById("multTableSet").innerHTML=""
    for(let i=1;i<=10;i++)
    {
        res= i * multNumber
        console.log(i+" x "+multNumber+" = "+res)
        document.getElementById("multTableSet").innerHTML+="<br>"+i+" x "+multNumber+" = "+res
    }
        
}
function findOddSum(){
    let oddInput=parseInt(document.getElementById("oddLimit").value)
    let tempForOddSum,sumForOdd=0
    document.getElementById("sumforOdd").innerHTML="0"
    for(tempForOddSum=1;tempForOddSum<=oddInput;tempForOddSum=tempForOddSum+2)
    {
        sumForOdd=sumForOdd+tempForOddSum
        document.getElementById("sumforOdd").innerHTML+=" + "+tempForOddSum
    }

    document.getElementById("sumforOdd").innerHTML+= " ="+sumForOdd
}
function findOddSumSecond(){
    let oddInputSecond=parseInt(document.getElementById("oddLimitSecond").value)
    let tempForOddSumSecond,sumForOddSecond=0
    document.getElementById("sumforOddSecond").innerHTML="0"
    for(tempForOddSumSecond=1;tempForOddSumSecond<=oddInputSecond;tempForOddSumSecond=tempForOddSumSecond+2)
    {
        sumForOddSecond=sumForOddSecond+tempForOddSumSecond
    }

    document.getElementById("sumforOddSecond").innerHTML= "Sum of Odd Numbers upto "+oddInputSecond+ " = "+sumForOddSecond
}

function patternOne(){
    document.getElementById("forPatternOne").innerHTML=""
    let patternLimitOne=parseInt(document.getElementById("patternLimitOne").value)
    for(let line=1;line<=patternLimitOne;line++)
    {
        for(let lineElementOne=1;lineElementOne<=line;lineElementOne++)
        {
            document.getElementById("forPatternOne").innerHTML+=lineElementOne+" "
        }
        document.getElementById("forPatternOne").innerHTML+="<br>"
    }
}
var arrayInt=[], arraylimit,arrayElement,i=0;

function interchangeArray(){

    arraylimit=parseInt(document.getElementById("ArrayLimitFirst").value)
    
    if(i<arraylimit)
    {
        document.getElementById("arrayInputMessage").innerHTML=`Enter Array Elements and Press <span style="color:red;">ADD ARRAY ELEMENTS</span> Button`
        document.getElementById("inputBox").innerHTML=`<input type="text" name="" id="arrayValues"></input>`
        document.getElementById("inputButton").innerHTML=`<button onclick="inputArrayElements()">ADD ARRAY ELEMENTS</button>`
    }
    

}

