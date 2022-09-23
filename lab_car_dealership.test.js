
const {Car} = require('./lab_car_dealership');
const {Dealership} = require('./lab_car_dealership');


describe ('Testing Car class', () => {

 const car = new Car ("Toyota", 2300, "f50")

    test('should get car manufacturer',()=>{
       
        expected = "Toyota"
        actual =  car.getManufacturer()
        expect ((actual)).toBe(expected)

});

    test('should set car manufacturer',()=>{
        
        expected = "Honda"
        actual =  car.setManufacturer("Honda")
        expect ((actual)).toBe(expected)

    });

    test('should get car engine type',()=>{

        expected = "f50"
        actual =  car.getEngineType()
        expect ((actual)).toBe(expected)

});

    test('should set car engine type',()=>{
        
        expected = "x76"
        actual =  car.setEngineType("x76")
        expect ((actual)).toBe(expected)

    });

    test('should get car price',()=>{
       
        expected = 2300
        actual =  car.getPrice()
        expect ((actual)).toBe(expected)

});

    test('should set car price',()=>{
        
        expected = 4584
        actual =  car.setPrice(4584)
        expect ((actual)).toBe(expected)

    });


})

describe ('Testing Dealership class', () => {

const car1 = new Car ("Toyota", 2300, "v70")
const car2 = new Car ("Honda", 2660, "x430")
const car3 = new Car ("Audi", 5670, "a103")
const dealer1 = new Dealership("getCars", 71,)
dealer1.addCars(car1);
dealer1.addCars(car2);

   
       test('should get dealership names',()=>{
          
           expected = "getCars"
           actual =  dealer1.getName()
           expect ((actual)).toBe(expected)
   
   });
   
       test('should set dealership names',()=>{
           
           expected = "newDealer"
           actual =  dealer1.setName("newDealer")
           expect ((actual)).toBe(expected)
   
       });
   
       test('should get maxiumum of cars ',()=>{
   
           expected = 71
           actual =  dealer1.getMaximumNumberofCars()
           expect ((actual)).toBe(expected)
   
   });
   
       test('should set maxiumum of cars',()=>{
            
            expected = 106
            actual =  dealer1.setMaximumNumberofCars(106)
            expect ((actual)).toBe(expected)
    
       });
   
       test('should add a car',()=>{
        dealer1.addCars(car3);
          
           expected = 3
           actual =  dealer1.countCars()
           expect ((actual)).toBe(expected)
   
   });
   
       test('should remove a car',()=>{

        dealer1.removeCars(car1)

           expected = 2
           actual = dealer1.countCars()
           expect ((actual)).toBe(expected)
   
       });

       test('get car manufacturers',()=>{

           expected = ['Honda', 'Audi' ]
           actual = dealer1.getCarsManufacturers()
           expect ((actual)).toBe(expected)
   
       });

    //    test('get car with specific manufacturers',()=>{
    //        expected = 1
    //        actual = dealer1.getCarsWithSpecificManufacturers()
    //        expect ((actual)).toBe(expected)
   
    //    });

       test('get total price of cars in stock ',()=>{

        dealer1.getTotalValueOfStock()

           expected = 10630
           actual = dealer1.getTotalValueOfStock()
           expect ((actual)).toBe(expected)
   
       });
   
   
   
   })