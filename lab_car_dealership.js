
const Car = function (manufacturer, price, engineType){
    
    let _manufacturer = manufacturer;
    let _price = price;
    let _engineType = engineType;

    this.getManufacturer = ()=> manufacturer;
    this.setManufacturer = (manufacturer)=> _manufacturer = manufacturer; 
    this.getPrice = ()=> _price;
    this.setPrice = (price)=> _price = price;
    this.getEngineType = () => _engineType;
    this.setEngineType= (engineType)=> _engineType = engineType;
}


const myName = new Car("Toyota", 2300, "f50");

//module.exports = {Car};

const Dealership = function (name, maximumNumberofCars){
    
    let _name = name;
    let _cars = [];
    let _maximumNumberofCars = maximumNumberofCars;
   

    this.getName = ()=> name;
    this.setName= (name)=> _name = name; 
    this.getMaximumNumberofCars = ()=> _maximumNumberofCars;
    this.setMaximumNumberofCars = (maximumNumberofCars)=> _maximumNumberofCars = maximumNumberofCars;
    this.countCars = () => _cars.length
    this.addCars = (car) =>_cars.push(car)
    this.removeCars = (car)=> _cars.splice(_cars.indexOf(car), 1);
    this.getCars = () => _cars;
    this.getCarsManufacturers = ()=> this.getCars().map((car) => car.getManufacturer()) 
    this.getTotalValueOfStock = ()=> {
      const newArray =  this.getCars().map((car) => car.getPrice())
      const sumOfArray = newArray.reduce(
        ( partialSum, a) => partialSum + a, 0
        );
         return sumOfArray
         } 

    this.getCarsWithSpecificManufacturers = (manufacturer) => {

    const checkManufacturer = (manufacturer) => {
    return this.getCarsManufacturers() === manufacturer};

    const chosenManufacturer = this.getCars().filter((manufacturer)=> {
        return checkManufacturer(manufacturer);
    });
    };

}
 // chosenManufacturer.map(())

//const chosenManufacturer = this.getCars().filter((this.getCarsManufacturers())=> { this.getCarsManufacturers() === manufacturer
    // this.getCarsWithSpecificManufacturers = (manufacturer) => if (this.getCars().getManufacturer() == manufacturer{}
    //we want to look at the cars in the dealership
    //for each car look at their manufactor
    //if the cars manufacter = manufacteror entered
    //return this car

//     this.getCarsWithSpecificManufacturers = (manufacturer) => {if(this.getCars().getManufacturer() === manufacturer){return this.getCarsManufacturers()
//     } else {return "are you sure this is the right manufacturer?"}
// }

//Find all the cars from a given manufacturer
//filter
// this.getCarsWithSpecificManufacturers = (manufacturer) => {
//     this.getCarsManufacturers === manufacturer
//     this.getCars().filter((_cars()) => {
//         return this.getCarsManufacturers() === manufacturer

//     });
// };
  

module.exports = {Car, Dealership};

// const Customer = function (name, wallet){
    
//     let _name = name;
//     let _wallet = wallet;
//     let _boughtCars = null;
   

//     this.getName = ()=> name;
//     this.setName= (name)=> _name = name; 
//     this.wallet= ()=> _waller;
//     this.wallet = (wallet)=> _wallet = wallet;
//
//     this.buyCar = removeCars().
// }

// this.addCars = (car)=> 
    // {if(this.getMaximumNumberofCars<this.countCars){_cars.push(car);
    // } else { "You can't add this car, we dont have enough space"}}