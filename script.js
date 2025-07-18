let btn= document.querySelector("#button2");
let nam= document.querySelector("#name");
let fnam= document.querySelector("#fname");
let enroll= document.querySelector("#Enroll");
let roll= document.querySelector("#rollno");
btn.addEventListener("click",function(event){
    event.preventDefault();
    document.querySelector("#tname").innerText=nam.value;
    document.querySelector("#trollno").innerText=roll.value;
    document.querySelector("#tfname").innerText=fnam.value;
    document.querySelector("#tEnroll").innerText=enroll.value;
    nam.value="";
    fnam.value="";
    enroll.value="";
    roll.value="";
})
let btn1=document.querySelector("#button1");
let div=document.querySelector("#Division");
let boar=document.querySelector("#board");
let sch=document.querySelector("#school");
let year=document.querySelector("#Year");
let gro=document.querySelector("#group");
btn1.addEventListener("click",function(event){
    event.preventDefault();
    document.querySelector("#tDivision").innerText=div.value;
    document.querySelector("#tboard").innerText=boar.value;
    document.querySelector("#tschool").innerText=sch.value;
    document.querySelector("#tyear").innerText=year.value;
    document.querySelector("#tgroup").innerText=gro.value;
    div.value="";
    boar.value="";
    sch.value="";
    year.value="";
    gro.value="";
})

let sub=document.querySelector("#sub");
let marks=document.querySelector("#marks");
let p1=document.querySelector("#p1");
let p2=document.querySelector("#p2");
function display(){
    let result=sum();
    let percentresult=percent();
    let srn=sr();
    let grde=grade();
    let trow=document.createElement("tr");
    let tab=document.querySelector("table");
    tab.appendChild(trow);
    let tdsr=document.createElement("td");
    let tdsub=document.createElement("td");
    tdsub.innerText=sub.value;
    let tmark=document.createElement("td");
    tmark.innerText=marks.value;
    let tp1=document.createElement("td");
    tp1.innerText=p1.value;
    let tp2=document.createElement("td");
    tp2.innerText=p2.value;
    let tper=document.createElement("td");
    tper.innerText=percentresult;
    tdsr.innerText=srn;
    let tsum=document.createElement("td");
    tsum.innerText=result;
    let grad=document.createElement("td");
    grad.innerText=grde;
    trow.appendChild(tdsr);
    trow.appendChild(tdsub);
    trow.appendChild(tmark);
    trow.appendChild(tp1);
    trow.appendChild(tp2);
    trow.appendChild(tsum);
    trow.appendChild(tper);
    trow.appendChild(grad);
    sub.value="";
    marks.value="";
    p1.value="";
    p2.value="";
}

let btn3=document.querySelector("#button3");
btn3.addEventListener("click",function(event){
    event.preventDefault();
})

function sr(){
    let i=1;
    while(i<9){}
}
function sum(){
    let n=parseFloat(document.querySelector("#p1").value);
    let m =parseFloat(document.querySelector("#p2").value);
    return n+m;
}
function percent(){
    let s=sum();
    let mm=parseFloat(document.querySelector("#marks").value);
    return s*100/mm;
}
function grade(){
    let g = percent();
    if(g>90 && g<100){
        return "A";
    }
    else if(g>80 && g<=90){
        return "B+";
    }
    else if(g>70 && g<=80){
        return "B"
    }
    else if(g>60 && g<=70){
        return "C";
    }
    else if(g>50 && g<=60){
        return "D";
    }
    else if(g<=50){
        return "Fail";
    }
}