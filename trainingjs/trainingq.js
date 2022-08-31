// function createmops(n){
//   return function(){
//     console.log(1+n);
//   }
// }

// let mops = createmops(50)
// mops()
// function createIncrementor(n){
//   return function(num) {
//     return n + num
//   }
// }

// let addOne = createIncrementor(1)
// let addTen = createIncrementor(10)

// console.log(addOne(11))
// console.log(addTen(1));

// function urlGenerator(domain){
//   return function(url){
//     return `htpps://${url}.${domain}`
//   }
// }
// let ruUrl = urlGenerator("ru")
// let comUrl = urlGenerator("com")

// console.log(ruUrl("yandex"));
// console.log(comUrl("google"));





/*Написать свою функцию bind
  Пример работы:
  function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, %{this.job}`)
  }

  const person1 = {name: "Михаил" , age: 22, job: "Frontend"}
  const person2 = {name" "Елена" , age: 19, job: "SMM"}

  bind(preson1, logPerson)
  bind(preson2, logPerson)
// */
// function bind(context, fn) {
//   return function (...args /*массив?*/) {
//     fn.apply(context, args);
//   };
// }
// function logPerson(){
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = { name: "Михаил", age: 22, job: "Frontend" };
// const person2 = { name: "Елена", age: 19, job: "SMM" };

// bind(person1, logPerson)()
// bind(person2, logPerson)()

// function createAddress(type){
//   const address = type.toUpperCase();
//   return function(name){
//     return `${address} ${name}`;
//   }
// }

//   const addressGrazhdanin = createAddress("Гражданин")
//   const addressGrazhdanka = createAddress("Гражданка")

//   console.log(addressGrazhdanin("Василий"));

function meps(num){
  return function(x){
    let summ = x / num;
    return summ
  }
}
let y = meps(10);
console.log(y(5));