var feet = document.getElementById("feet");
      var inch = document.getElementById("inch");
      feet.addEventListener("input", function () {
        let f = this.value;
        let i = f * 12;
        inch.value = i;
      });
      var feet = document.getElementById("feet");
      var inch = document.getElementById("inch");
      inch.addEventListener("input", function () {
        let i = this.value;
        let f = i / 12;
        if (!Number.isInteger(f)) {
          f = f.toFixed(2);
        }
        feet.value = f;
      });



var input=document.getElementById('input');
var result=document.getElementById('result');
var inptype=document.getElementById('inptype');
var restype=document.getElementById('restype');
var ivalue,rvalue;
input.addEventListener("keyup",func);
inptype.addEventListener("change",func);
restype.addEventListener("change",func);
ivalue=inptype.value;
rvalue=restype.value;

function func(){
    ivalue=inptype.value;
    rvalue=restype.value;
    
    if(ivalue=="Meter" && rvalue=="KiloMeter"){
        result.value=Number(input.value)*0.001;
    }
    else if(ivalue=="Meter" && rvalue=="DeciMeter"){
        result.value=Number(input.value)*10;
    }
    else if(ivalue=="Meter" && rvalue=="CentiMeter"){
        result.value=Number(input.value)*100;
    }
    else if(ivalue=="Meter" && rvalue=="MilliMeter"){
        result.value=Number(input.value)*1000;
    }
    else if(ivalue=="Meter" && rvalue=="Meter"){
        result.value=Number(input.value);
    }

    if(ivalue=="KiloMeter" && rvalue=="Meter"){
        result.value=Number(input.value)*1000;
    }
    else if(ivalue=="KiloMeter" && rvalue=="DeciMeter"){
        result.value=Number(input.value)*10000;
    }
    else if(ivalue=="KiloMeter" && rvalue=="CentiMeter"){
        result.value=Number(input.value)*100000;
    }
    else if(ivalue=="KiloMeter" && rvalue=="MilliMeter"){
        result.value=Number(input.value)*1000000;
    }
    else if(ivalue=="KiloMeter" && rvalue=="KiloMeter"){
        result.value=Number(input.value);
    }

    if(ivalue=="DeciMeter" && rvalue=="KiloMeter"){
        result.value=Number(input.value)*0.0001;
    }
    else if(ivalue=="DeciMeter" && rvalue=="Meter"){
        result.value=Number(input.value)*0.1;
    }
    else if(ivalue=="DeciMeter" && rvalue=="CentiMeter"){
        result.value=Number(input.value)*10;
    }
    else if(ivalue=="DeciMeter" && rvalue=="MilliMeter"){
        result.value=Number(input.value)*100;
    }
    else if(ivalue=="DeciMeter" && rvalue=="DeciMeter"){
        result.value=Number(input.value);
    }
    
    if(ivalue=="CentiMeter" && rvalue=="KiloMeter"){
        result.value=Number(input.value)*0.00001;
    }
    else if(ivalue=="CentiMeter" && rvalue=="DeciMeter"){
        result.value=Number(input.value)*0.1;
    }
    else if(ivalue=="CentiMeter" && rvalue=="Meter"){
        result.value=Number(input.value)*0.01;
    }
    else if(ivalue=="CentiMeter" && rvalue=="MilliMeter"){
        result.value=Number(input.value)*10;
    }
    else if(ivalue=="CentiMeter" && rvalue=="CentiMeter"){
        result.value=Number(input.value);
    }
    
    if(ivalue=="MilliMeter" && rvalue=="KiloMeter"){
        result.value=Number(input.value)*0.000001;
    }
    else if(ivalue=="MilliMeter" && rvalue=="DeciMeter"){
        result.value=Number(input.value)*0.01;
    }
    else if(ivalue=="MilliMeter" && rvalue=="CentiMeter"){
        result.value=Number(input.value)*0.1;
    }
    else if(ivalue=="MilliMeter" && rvalue=="Meter"){
        result.value=Number(input.value)*0001;
    }
    else if(ivalue=="MilliMeter" && rvalue=="MilliMeter"){
        result.value=Number(input.value);
    }
}