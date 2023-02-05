console.log("hee")
var billAmount=document.querySelector('#billamount')
var cashAmount=document.querySelector('#cashamount')
var checkButton=document.querySelector('#check')
var errorshow=document.querySelector('#error')
var notes=document.querySelectorAll('.notes')
checkButton.addEventListener('click',function(){
    errornone();
    var message;

    if(billAmount.value>0){
        // console.log("ew")
        // console.log(typeof(cashAmount.value))
        // console.log(billAmount.value)
        if(Number(cashAmount.value) >= Number(billAmount.value)){
            console.log("ew2")
            // console.log(typeof(cashAmount.value))
  const remamount=cashAmount.value-billAmount.value;
   process(remamount);
        }else{
            message="you need to wash dish."
            errorshow1(message);

        }

    } else{
      message="Invalid bill amount or should be greater than 0"
      errorshow1(message);

    }
});

function errornone(){
    errorshow.style.display='none';
}
function errorshow1(message){
    errorshow.style.display='block';
    errorshow.innerText=message;
}
function process(remamount){
arr=[2000,500,100,20,10,5,1]
let res;
// console.log(remamount)
for(let i=0;i<arr.length;i++){
res=Math.trunc(remamount/arr[i]);
console.log(res)
notes[i].innerText=res;
remamount%=arr[i];
}


}