// function fun(v1, v2){
//   console.log(`${v1} naach rha hai`);
//   console.log(v1);
// }

// fun(v2=10, v1=8);

//1. Higher order finction-->
function fun(){
  return function(){
    console.log("Heeeeee");
  }
}

// fun()();
// 2. IIFE

// (function(){
//   console.log('hahhahahhahhha');
// })();

//#Array

let arr = [1, 10, 2, 5]; //these convert arr into string then sort lexographically so use fun to sort
/*arr.push(10)// add 10 to end of array
arr.pop();//remove ele form back
arr.shift();//remove from front
arr.pop();//add at start
arr.splice(2,1)//remove 1 ele from 2 index ie 9
arr.slice(0,3)//not modify the existing arr creatnew array //1,8,9 
//sort
let sr=arr.sort(function(a, b){
    return a-b;                      //sort array in ascending order arr.sort() also works
});
//map
let newarr = arr.map(function(val){
      if(val>10) return val;       //map is used when to create new array basi of prev array
});
//filter
let nearr = arr.filter(function (val) {
    if(val>4) return true;     //filter used to apply filter on exis array to crate new arr work on T &F
})
//filter
let aerr = arr.filter(function(accumulator, val){
            return  accumulator+=val;
},0);
//find
let rr=arr.find(function(val){
  return val.key===1;               //return first occurance of key value pair
})
//some  returns true or false if condition matches
//every checks every (all)val in array pass the condition or not*/

//#Object-->

// let obj = {
//   name: "Ashish",
//   age: 26,
//   add: {
//     vil: "khal",
//     loc: {
//       lan: 71,
//       lat: 81
//     }
//   }
// };

// let aa="name";
// obj[aa] //Ashish it replce name as aa
// obj.aa //undefined it find aa in map(which is not present)

// let {lan, lat} = obj.add.loc;//destructuring
//  while using spread operator to copy one object into another it make real copy so changing one objects 
//  property doesn't affect another but when nested object is present it make shallow copy and changes affect both obj

//DOM--->
// let h1 = document.querySelector("h1");
// h1.innerHTML="Ha bhai Ashish Kya Hal hai!"

// let h1=document.createElement("h1");
// h1.textContent = "Hello ji kaise ho";
// document.querySelector("body").append(h1);

//Events Listener-->
/*
let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", function(dets){
  device.textContent=`${dets.target.value} Device Selected`;
  
});*/

/*let h1 = document.querySelector("h1");
window.addEventListener("keydown", function(dets){
  if(dets.key==" "){
    h1.textContent="SPC";
  }
   else{
    h1.textContent=dets.key;
   }
});*/

/*let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function(){
  fileinp.click();
});

fileinp.addEventListener("change", function(dets){
  const file =dets.target.files[0];
  if(file){
    btn.textContent=file.name;
  }
});*/

let form = document.querySelector("form")
let main = document.querySelector("#main")
let inputs = document.querySelectorAll("input")
form.addEventListener("submit", function(evt){
  evt.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");
  
  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value)
  let h3 = document.createElement("h3");
  h3.textContent=inputs[1].value;
  let h5 = document.createElement("h5");
  h5.textContent=inputs[2].value;
  let p = document.createElement("p");
  p.textContent=inputs[3].value;

  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

 main.appendChild(card)

 inputs.forEach(function(inp){
  if(inp.type!=="submit"){
    inp.value=" ";
  };
 });
});