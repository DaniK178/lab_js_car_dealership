const Car = function (manufacturer, price, engineType){
    let _manufacturer = manufacturer;
    let _price = price;
    let _engineType = engineType;

    this.getManufacturer = ()=> manufacturer;
    this.setManufacturer = (manufacturer)=> _manufacturer = manufacturer; 
    this.getPrice = ()=> _price;
    this.setPrice = (price)=> _price = price;
    this.getCourses = () => _courses;
    this.setPrice = (price)=> _price = price;
}


}