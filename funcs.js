let isFive=num=>num===5;

let isOdd=num=>{
  if(typeof num!=="number"){
    throw Error("Error");
  }
  
  return Math.abs(num)%2===1;
};

let myRange=(min, max, step = 1)=> {
  // Your code here
  let arr=[];
  for(let i=min;i<=max;i+=step){
    arr.push(i);
  }
  return arr;
}


module.exports = { isFive, isOdd, myRange };