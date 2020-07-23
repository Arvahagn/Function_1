// 1...
let n = [5, 2, 9, 6];

function MaxArray(n){
    let MaxNum = n[0];
    let MaxNum_2;
    for(var i = 1; i < n.length; i++){
        if(MaxNum < n[i]){
            MaxNum_2 = MaxNum;
            MaxNum = n[i];
        }else if(MaxNum_2 < n[i]&& n[i]!==MaxNum){
            MaxNum_2 = n[i];
        }
    }
     return MaxNum_2; 
 }



// 2...
let ArrayRev = [1, 3, 5, 7];
function reversArray(Array){
    let rev;
    for(let i = 0; i < Array.length/2; i++){
        let revInd = Array.length - 1 - i;
        rev = Array[i];
        Array[i] = Array[revInd];
        Array[revInd] = rev;
    }
    return Array;
}
console.log (reversArray(ArrayRev));



// 3...
let str = "Hello everyone, I wish you a good day";
function strToArr(){
    let arr = str.split(" ");
    return arr;
}