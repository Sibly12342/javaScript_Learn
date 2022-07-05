function interchangeArray(){
    let arraylimit=parseInt(document.getElementById("ArrayLimit").value)
    let arrayOne=[], arrayTwo=[], tempArray=[]
     
    for(let i=0;i<arraylimit;i++)
     {
        let val=prompt("Enter the FIRST array elements")
        arrayOne[i]=val
     }
     for(let i=0;i<arraylimit;i++)
     {
        let val=prompt("Enter the SECOND array elements")
        arrayTwo[i]=val
     }

     document.getElementById("arrayDisplaylOne").innerHTML="The First Array is"
     document.getElementById("arrayOne").innerHTML=arrayOne
     document.getElementById("arrayDisplayTwo").innerHTML="The Second Array is"
     document.getElementById("arrayTwo").innerHTML=arrayTwo

     tempArray=arrayOne
     arrayOne=arrayTwo
     arrayTwo=tempArray

     document.getElementById("arrayIntDisplaylOne").innerHTML="The Interchanged First Array is"
     document.getElementById("arrayIntOne").innerHTML=arrayOne
     document.getElementById("arrayIntDisplaylTwo").innerHTML="The Interchanged Second Array is"
     document.getElementById("arrayIntTwo").innerHTML=arrayTwo
 }
 











 function arraySearchEven(){
    let arraylimit=parseInt(document.getElementById("ArrayLimitEven").value)
    let arrayOne=[]
     
    for(let i=0;i<arraylimit;i++)
     {
        let val=prompt("Enter the array elements")
        arrayOne[i]=val
     }
    document.getElementById("searchArrayDisplay").innerHTML="The array elements are :"
    document.getElementById("searchArray").innerHTML=arrayOne

    for(let i=0;i<arraylimit;i++)
     {
        if(((arrayOne[i]%2)==0))
        {
            document.getElementById("searchArrayResult").innerHTML="The Even numbers in the array are :"
            document.getElementById("searchArrayEvenResult").innerHTML+=arrayOne[i]+" "
        }
        
     }
     
 }









 function arrayDescending(){
    let arraylimit=parseInt(document.getElementById("ArrayLimitDescend").value)
    let arrayOne=[]
     
    for(let i=0;i<arraylimit;i++)
     {
        let val=Number(prompt("Enter the array elements"))
        arrayOne[i]=val
     }
     document.getElementById("descendArraylabel").innerHTML="The array is :"
     document.getElementById("descendArray").innerHTML=arrayOne

     for(let i=0;i<arraylimit-1;i++)
     {
        for(let j=i+1;j<arraylimit;j++)
        {
            if(arrayOne[j]>arrayOne[i])
            {
                let temp=arrayOne[i]
                arrayOne[i]=arrayOne[j]
                arrayOne[j]=temp
                console.log(arrayOne)
            }
        }
     }

     document.getElementById("descendArrayResultLabel").innerHTML="The array after sorting in descending order :"
     document.getElementById("descendArrayResult").innerHTML=arrayOne
 }









 function arrayPaindrome(){
    let stringArray=document.getElementById("ArrayPalindrome").value
    let flag=0
    let len=stringArray.length;

    for(let i=0,j=len-1;i<(len/2);i++,j--)
    {
        if(stringArray[i]!==stringArray[j])
        {
            flag=1;
            break;
        }
    }

    if(flag==0)
    {
        document.getElementById("palinArrayResultLabel").innerHTML="STRING IS PALINDROME"
    }
    else
    {
        document.getElementById("palinArrayResultLabel").innerHTML="STRING IS NOT PALINDROME"

    }
 }








 function array2D(){

    
    let arraylimit=Number(document.getElementById("arrayLimit2D").value)
    let arrayOne=[], arrayTwo=[], arrayThree=[]

    for(let i=0;i<arraylimit;i++)
    {
        arrayOne[i]=[]

        for(let j=0;j<arraylimit;j++)
        {
            let val=Number(prompt("Enter the FIRST array elements"))
            arrayOne[i][j]=val
        }
    }

    for(let i=0;i<arraylimit;i++)
    {
        arrayTwo[i]=[]

        for(let j=0;j<arraylimit;j++)
        {
            let val=Number(prompt("Enter the SECOND array elements"))
            arrayTwo[i][j]=val
        }
    }
    for(let i=0;i<arraylimit;i++)
    {
        arrayThree[i]=[]

        for(let j=0;j<arraylimit;j++)
        {
            arrayThree[i][j]=arrayOne[i][j]+arrayTwo[i][j]
        }
    }

    document.getElementById("2dArrayOneLabel").innerHTML="First array"
    for(let i=0;i<arraylimit;i++)
    {
        for(let j=0;j<arraylimit;j++)
        {
            document.getElementById("2dArrayOne").innerHTML+=arrayOne[i][j]+" "
        }
        document.getElementById("2dArrayOne").innerHTML+="<br> "

    }
    document.getElementById("2dArrayTwoLabel").innerHTML="Second array"
    for(let i=0;i<arraylimit;i++)
    {
        for(let j=0;j<arraylimit;j++)
        {
            document.getElementById("2dArrayTwo").innerHTML+=arrayTwo[i][j]+" "
        }
        document.getElementById("2dArrayTwo").innerHTML+="<br>"

    }

    document.getElementById("labelSum2dArray").innerHTML="Array after addition :"
    for(let i=0;i<arraylimit;i++)
    {
        for(let j=0;j<arraylimit;j++)
        {
            document.getElementById("2dArrayResult").innerHTML+=arrayThree[i][j]+" "
        }
        document.getElementById("2dArrayResult").innerHTML+="<br> "

    }
    
    console.log(arrayOne)
    console.log(arrayTwo)
    console.log(arrayThree)
 }






 // Array Using Multiple Fuctions starts
 function arrayUsingMultFunctions(){
    let arraylimit=Number(document.getElementById("ArrayLimitFunc").value)
    let arrayOne=[]
    getArray(arrayOne,arraylimit);
}
function getArray(arrayOne,arraylimit){
    for(let i=0;i<arraylimit;i++)
     {
        let val=prompt("Enter the array elements")
        arrayOne[i]=val
     }

     dispArray(arrayOne,arraylimit);

}
     
function dispArray(arrayOne)
{
    document.getElementById("funcArrayDisplay").innerHTML="The array elements are :"
    document.getElementById("funcArray").innerHTML=arrayOne
 }
// Array Using Multiple Fuctions ENDS






 function primeNumber(){
    let num=Number(document.getElementById("NumberPrime").value)
    let flag=0;
    
    for(let i=2;i<=(num/2);i++)
    {
        if((num%i)==0)
        {
            flag=1
            break
        }
    }
    if(flag==0)
    {
        document.getElementById("primeResultLabel").innerHTML="Number is Prime"
    }
    else
    {
        document.getElementById("primeResultLabel").innerHTML="Number is NOT Prime"
    }
 }








 function weightedAvg(){

    let markWritten=parseFloat(document.getElementById("writtenMark").value)
    let markLab=parseFloat(document.getElementById("labMark").value)
    let markAssignment=parseFloat(document.getElementById("asignmentMark").value)
    let grade=((markWritten*70)+(markLab*20)+(markAssignment*10))/100
    document.getElementById("weightedAvg").innerHTML="Your weighted Average is: "+grade
 }

 














 function findIncomeTax(){

    let annualINcome=parseFloat(document.getElementById("annualIncome").value)
    let tax;
    if(annualINcome>5000000)
    {
        tax=(annualINcome*.4)
        document.getElementById("incomeTaxIs").innerHTML="You have 40% tax and Your taxable amount is "+tax

    }
    else if(annualINcome>1000000)
    {
        tax=(annualINcome*.3)
        document.getElementById("incomeTaxIs").innerHTML="You have 30% tax and Your taxable amount is "+tax

    }
    else if(annualINcome>500000)
    {
        tax=(annualINcome*.2)
        document.getElementById("incomeTaxIs").innerHTML="You have 20% tax and Your taxable amount is "+tax

    }
    else if(annualINcome>250000)
    {
        tax=(annualINcome*.05)
        document.getElementById("incomeTaxIs").innerHTML="You have 5% tax and Your taxable amount is "+tax
    }
    else
    {
        document.getElementById("incomeTaxIs").innerHTML="Oooh, YOu have no amount to pay as Tax"
    }
 }











 function patternCont(){
    document.getElementById("forPatternOne").innerHTML=""
    let patternLimitOne=parseInt(document.getElementById("patternLimitOne").value)
    let cont=1
    for(let line=1;line<=patternLimitOne;line++)
    {
        for(let lineElementCount=1;lineElementCount<=line;lineElementCount++,cont++)
        {
            document.getElementById("forPatternOne").innerHTML+=cont+" "
        }
        document.getElementById("forPatternOne").innerHTML+="<br>"
    }
 }










 function arrayAdjMult(){
    let arrayOne=[],arrayTwo=[]
    let limit=Number(document.getElementById("ArrayLimitAdj").value)


        for(let i=0;i<limit;i++)
        {
            let val=Number(prompt("Enter thr array Elements"))
            arrayOne[i]=val
        }
        document.getElementById("ArrayLabel").innerHTML="Entered array"
        document.getElementById("AdjDisp").innerHTML=arrayOne

        for(let i=0,j=1,ind=0;i<limit&&j<limit;i++,j++,ind++)
        { 
          arrayTwo[ind]=arrayOne[i]*arrayOne[j]
          console.log(arrayTwo[ind])
        }
        console.log(arrayOne)
        console.log(arrayTwo)
        document.getElementById("ArrayAdjResLabel").innerHTML="Resultant array: "
        document.getElementById("AdjDispResult").innerHTML=arrayTwo
 }

function divisionOpe(){
    let first=parseFloat(document.getElementById("NumberFirstOpe").value)
    let second=parseFloat(document.getElementById("NumberSecondOpe").value)
    let res=first/second
    document.getElementById("resLabel").innerHTML=first+" / "+second+" = "
    document.getElementById("resOpe").innerHTML=`<input type="text" name="" id="resOpeInp">`
    document.getElementById("resOpeInp").value=res
}
function ProductOpe(){
    
    let first=parseFloat(document.getElementById("NumberFirstOpe").value)
    let second=parseFloat(document.getElementById("NumberSecondOpe").value)
    let res=first*second
    document.getElementById("resLabel").innerHTML=first+" x "+second+" = "
    document.getElementById("resOpe").innerHTML=`<input type="text" name="" id="resOpeInp">`
    document.getElementById("resOpeInp").value=res
}
function subsractionOpe(){
    let first=parseFloat(document.getElementById("NumberFirstOpe").value)
    let second=parseFloat(document.getElementById("NumberSecondOpe").value)
    let res=first-second
    document.getElementById("resLabel").innerHTML=first+" - "+second+" = "
    document.getElementById("resOpe").innerHTML=`<input type="text" name="" id="resOpeInp">`
    document.getElementById("resOpeInp").value=res
    
}
function addOpe(){
    
    let first=parseFloat(document.getElementById("NumberFirstOpe").value)
    let second=parseFloat(document.getElementById("NumberSecondOpe").value)
    let res=first+second
    document.getElementById("resLabel").innerHTML=first+" + "+second+" = "
    document.getElementById("resOpe").innerHTML=`<input type="text" name="" id="resOpeInp">`
    document.getElementById("resOpeInp").value=res
}





