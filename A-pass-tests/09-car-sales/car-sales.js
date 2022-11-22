function sales(carsSold) {
   let car = {};
   for(let i = 0; i < carsSold.length; i++){
    if (car[carsSold[i].make]) {
        car[carsSold[i].make] += carsSold[i].price;
    } else {
        car[carsSold[i].make] = carsSold[i].price;
   }
   
    }
    return car;
}  

module.exports = sales;

    