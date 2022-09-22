
const {Car} = require('./lab_car_dealership');


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