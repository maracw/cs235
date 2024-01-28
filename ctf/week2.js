// const companies = [
//     {name: "One", category: "Finance", start: 1981, end: 2003},
//     {name: "Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Four", category: "Retail", start: 1989, end: 2014},
//     {name: "Five", category: "Technology", start: 2009, end: 2010},
//     {name: "Six", category: "Finance", start: 1986, end: 1989},
//     {name: "Seven", category: "Auto", start: 2011, end: 2017},
//     {name: "Eight", category: "Retail", start: 1981, end: 1989},
// ];

// const ages = [33, 12,20,16,5,54,21,44,61,13,15,45,25,64,11];

// //forEach
// //takes an arrow function

// // for(let i = 0; i<companies.length; i++){
// //     console.log(companies[i]);
// // }

// companies.forEach(function(c) {
//     console.log(c.name);
// });
// //do you need to use the word function? YES
// //do you need to use a particular variable name? NO
// companies.forEach(function(company) {
//     console.log(company.name);
// });

// //filter
// let over21 = [];

// for (let i=0; i<ages.length; i++){
//     if(ages[i]>=21){
//         over21.push(ages[i]);
//     }
// }

// console.log(over21);

// let canDrink2 = ages.filter(function(age){
//     // if(age>=21){
//     //     return true;
//     // }
//     //more expressive
//     return age>=21;
// });
// console.log(canDrink2);
// //most expressive
// const canDrink = ages.filter(age => age>=21);
// console.log(canDrink);

// //more expressive than an if statement
// const retailCompanies = companies.filter(function (company){
//     return company.category=="Retail";
// });

// const retailCompanies2 = companies.filter(company => company.category=="Retail");
// const financeCompanies = companies.filter(company => company.category==="Finance");
// console.log(retailCompanies2);
// console.log(financeCompanies);

// const eightiesCompanies = companies.filter(company => (company.start >=1980 && company.end<1990));
// console.log(eightiesCompanies);

// const tenYearsCompanies = companies.filter(company => (company.end-company.start)>=10);
// console.log(tenYearsCompanies);

// //map 
// //makes new array from a an old array
// //can transform, 

// //create array of company names
// const names = companies.map(function(company){
//     return company.name;
// });

// const names2 = companies.map(company =>`${company.name} is a company`);
// console.log(names2);

// const agesSquared = ages.map(age => Math.sqrt(age));

// console.log(agesSquared);

// //sort
// //takes 2 params
// //returns 1 or -1
// //but true and false worked too
// // const sortedByStart = companies.sort(function(c1, c2){
// //     return c1.start>c2.start? true: false;
// // });

// // const sortedByStart = companies.sort((a, b) =>
// //     a.start>b.start? 1: -1);
// // console.log(sortedByStart);

// // //ascending
// // const sortAges = ages.sort((a,b)=>a-b);
// // console.log(sortAges);

// // const sortAgesDesc = ages.sort((a,b)=>b-a);
// // console.log(sortAgesDesc);

// //reduce 
// //TRICKY - watch out

// //try to add them all together
// let ageSum = 0;
// for(let i=0; i<ages.length; i++){
//     ageSum+=ages[i];
// };

// console.log(ageSum);

// const ageReduced = ages.reduce((total, age) => total + age, 0);
// console.log(ageReduced);

// //add up how many years each company existed

// const totalYears = companies.reduce((total, company) => (company.end - company.start)+ total, 0);
// //or

// const totalYearsE5 = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);
// console.log(totalYearsE5);

// //combo time

// const combined = ages
//     //each age doubled
//     .map(age => age*2)
//     //filter out numbers under 40 (keep ones over 40)
//     .filter(age=> age>=40)
//     //then sort acsending
//     .sort((a,b)=> a-b)
//     //then add them up
//     .reduce((total, age)=> total+=age, 0);

// console.log(combined);

const data = {
    "name": "Pooja",
    "pets": { 
      "bird": "Tweety",
      "cat": "Shadow",
      "dog": "Fido"
    }
  };

  const petNames = Object.values(data.pets); // get array of all values in pets

  console.log(petNames);
console.log(petNames.map
((pet) => `  ${pet}`).join("\n"));

const mappedPets =petNames.map
    ((pet) => `  ${pet}`).join("\n");
console.log(mappedPets);

//what is the map here doing? its the only one that works (though I think you might get reduce to do it)
//join can only happen on an array
const reducedPets=petNames.reduce(function(output, pet){return output+=pet +'\n';}, '');
console.log(reducedPets);