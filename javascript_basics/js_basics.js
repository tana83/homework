var a = 256;
var b = 357;
console.log(a+b)

var c = "Cats don't like dogs";
var d = "Dogs don't like cats";
console.log(c+d)


var dogs = ["Pitbull", "Siberean Husky", "Pug", "Beagle"];
var cats = ["Persian cat", "Siamse cat", "Ragdoll", "Bengal cat"];
var animals = [dogs, cats];
var animals = [["Pitbull", "Siberean Husky", "Pug", "Beagle"], ["Persian cat", "Siamse cat", "Ragdoll", "Bengal cat"]]
console.log(animals[0][2])
console.log(animals[1][3])

k = 99
if (k<100){
 alert("the variable is less than a hundred")
} else {
  console.log("the variable is greater than a hundred");
}

function alertName(Name){
  return alert(Name);
}
alertName ("Mike")
alertName ("David")

function enter(door){
  if(door == 1){
    alert("trip to Vegas");
  } else if(door == 2){
    alert("stay in a 5-star hotel");
  } else{
    alert("start all over again");
  }
}
enter(1)
enter(2)
enter(3)
