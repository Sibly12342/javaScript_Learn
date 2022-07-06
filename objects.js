
var library = [ 
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: 'true'
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: 'true'
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: 'false'
    },
    {
        title:'Wings of Fire',
        author:'APJ Abdul Kalam',
        readingStatus: 'true'

    },
    {
        title: 'Alchemist',
        author:'Paulo Coelho ',
        readingStatus: 'false'
    }
];

function findBookStatus(){
    

    console.log(library)
    var searchkey=document.getElementById("searchBook").value
    var length=library.length
    let key=0
    
    console.log("length :"+length)

    document.getElementById("searchresultLib").innerHTML=""
    if(searchkey=="")
    {
        alert("Enter book name")
    }
    else
    {
        for(let i=0;i<length;i++)
        {


            if((library[i].title)==searchkey)
            {
                
                var findK=library[i]
                
                

                if((findK.readingStatus)=='false')
                {
                    document.getElementById("searchresultLib").innerHTML="You still need to read "+findK.title+" by "+library[i].author;
                }
                else
                {
                    document.getElementById("searchresultLib").innerHTML="Already read "+findK.title+" by"+  findK.author;
                    

                }
                key=0
                break;
        
            }
            else
            {
                key=1;
            }

        }
        if(key==1)
        {
            alert("Book Not find")
        }
    }
}
    


function addLibraryElement(){

var nam=document.getElementById("bookName").value
var auth=document.getElementById("authorName").value
var stat=document.querySelector("input[name=status]:checked").value


var newLib={
    title: nam,
    author:auth,
    readingStatus: stat
}
library.push(newLib)
console.log(library)
}


// class start here

class Area
{  
    circleArea(){
        var rad=0
        var res=3.1415*rad*rad
    }
    squareArea()
    {
        var len=0;
        var res=len*len;
    }
    triArea()
    {
        var len,base;
        var res=.5*b*h
    }
    rectArea(){
        var b,have
        var res=b*h
    }
    
}
class MyClass extends Area
{
    circleArea(rad){
        var res=3.1415*rad*rad
        console.log("Circle: "+res)
        document.getElementById("inpSpan").innerHTML+="</td></td>Area is:"+res
    }
    squareArea(len)
    {

        var res=len*len;
        console.log("square:"+ res)
        document.getElementById("inpSpan").innerHTML+="</td></td>Area is:"+res
    }
    triArea(b,h)
    {
        var res=.5*b*h
        console.log("Triangle:"+res)
        document.getElementById("inpSpan").innerHTML+="</td></td>Area is:"+res
    }
    rectArea(b,h)
    {
        var res=b*h
        console.log("Rectangle:"+res)
        document.getElementById("inpSpan").innerHTML+="</td></td>Area is:"+res
    }

}
function run(a){
    if(a==1)
    {
        document.getElementById("inpSpan").innerHTML=`<input type="text" id="rad" placeholder="Enter radius"></td><td><button onclick="submit(1)">SUBMIT</button>`

    }
    else if(a==2)
    {
        document.getElementById("inpSpan").innerHTML=`</td><td><input type="text" id="side" placeholder="Enter the side"></td><td><button onclick="submit(2)">SUBMIT</button>`

    }
    else if(a==3)
    {
        document.getElementById("inpSpan").innerHTML=`</td><td><input type="text" id="l" placeholder="Enter the length"></td><td><input type="text" id="b" placeholder="Enter the breadth"></td><td><button onclick="submit(3)">SUBMIT</button>`
        
    }
    else if(a==4)
    {
        document.getElementById("inpSpan").innerHTML=`</td><td><input type="text" id="b" placeholder="Enter the base"></td><td><input type="text" id="h" placeholder="Enter the height"></td><td><button onclick="submit(4)">SUBMIT</button>`   
    }

}


function submit(asd){
    console.log("area")
 

  let a=new MyClass()
  if(asd==1)
  {
    var rad=Number(document.getElementById("rad").value)
    a.circleArea(rad)
  }
  else if( asd==2)
  {
    var side=Number(document.getElementById("side").value)
    a.squareArea(side)

  }
  else if(asd==3)
  {
    var side1=Number(document.getElementById("l").value)
    var side2=Number(document.getElementById("b").value)
    a.rectArea(side1,side2)
    
  }
  else if(asd==4)
  {
    var side1=Number(document.getElementById("h").value)
    var side2=Number(document.getElementById("b").value)
    a.triArea(side1,side2)
  }

  

}



// class ends here







function car(name,milage,maxSpeed) {
    this.name = name;
    this.milage=milage;
    this.maxSpeed=maxSpeed
  }
  
  let car1 = new car('swift',22,140)
  
  console.log("Car Name: "+car1.name)
  console.log("Car speed: "+car1.milage)
  console.log("Car maximum speed: "+car1.maxSpeed)

  console.log("This is Constructor: "+car1.constructor)
  







  function pgm28(){

    arrayMy=myArray()
    
    myFilter(arrayMy,callBack)
    

  }


  function myArray(){

     var limit=document.getElementById("arRol").value
     
     var arrayMy=[]
     
     for(let i=0;i<limit;i++)
     {
        let valAr=Number(prompt("Enter array elments"))
        arrayMy[i]=valAr
     }

    //  alert(arrayMy)
     return(arrayMy)
     
  }


  function callBack(arrayMy){
    let sum=0;

    for(let i=0;i<arrayMy.length;i++)
    {
        console.log(arrayMy.length)
        sum=sum+arrayMy[i]
    }
    if(sum%2==0)
    {
        console.log("SUM IS:"+sum)
        return true
    }
    else
    {
        console.log("SUM IS:"+sum)
        return false
    }
  }
  

  function myFilter (arrayMy,callBack){

    alert("array elements are: "+arrayMy)

    rtn=callBack(arrayMy)

    if(rtn==true)
    {
        console.log("TRUE")
    }
    else
    {
        console.log("FALSE")
    }



  }

  function funcTry(){
     
        var str=document.getElementById("tryString").value
        try
        {          
            var strAft2=str.split("").reverse().join("")
            console.log("Reversed string is :"+strAft2)
            alert("Reversed string is :"+strAft2)
        }
        catch(er)
        {
            alert("Inner"+er.message)
        }        

}

function funcThrow(){
    var valInp=document.getElementById("throwString").value
    try
    {
        alert(valInp)
        if(isNaN(valInp))
        {
            alert("OOO")
            throw 'Input is not a number';
   
        }
        if(valInp>250)
        {
            throw 'Height is Outbounced';
        }
        if(valInp<20) 
        {
            throw 'Height is too small' ;  
        }
        document.getElementById("resThrow").innerHTML="You are Great, your height is :"+valInp
    }
    catch(erro)
    {
        document.getElementById("resThrow").innerHTML= `Some thing Error, Error is: `+erro

    }
    finally {
        document.getElementById("resThrow").innerHTML+=`<br> PROGRAM COMPLETED SUCCESSFULLY`
      }
}