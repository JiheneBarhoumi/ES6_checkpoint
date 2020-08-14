let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  

  //function to calculate age
  let getAge = (pet) =>Date().getFullYear() - pet.bornOn;

  //forEach
  let arr =pets.map(pet => ({...pet, age:getAge(pet)}));
  console.log(arr);
  
  
  //filter
  let dogs = pets.filter(pet=>pet.type==="dog")
  console.log(dogs);
  
  //find
  let jasper = pets.find(pet => pet.name==="Jasper");
  console.log("Jasper is " + jasper.age + " years old");
