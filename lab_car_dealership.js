
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
    this.addCars = (car)=> _cars.push(car);
    this.removeCars = (car)=> _cars.splice(_cars.indexOf(car), 1);
    this.getCars = () => _cars;
    this.countCars = () => _cars.length

    this.getCarsManufacturers = ()=> this.getCars().getManufacturer()
    this.
    //... from the get cars - get the 
}

// const Customer = function (name, maximumNumberofCars){
    
//     let _name = name;
//     let _cars = [];
//     let _maximumNumberofCars = maximumNumberofCars;
   

//     this.getName = ()=> name;
//     this.setName= (name)=> _name = name; 
//     this.getMaximumNumberofCars = ()=> _maximumNumberofCars;
//     this.setMaximumNumberofCars = (maximumNumberofCars)=> _maximumNumberofCars = maximumNumberofCars;
//     this.addCars = (car)=> _cars.push(car);
//     this.removeCars = (car)=> _cars.splice(_cars.indexOf(car), 1);
//     this.getCars = () => _cars;
//     this.countCars = () => _cars.length

//     this.getCarsManufacturers = ()=> this.getCars.C
//     //... from the get cars - get the 
// }



module.exports = {Car, Dealership};