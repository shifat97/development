class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    move() {
        console.log("Car can move.");
    }
}

class Bus extends Vehicle {
    constructor(name, price, seat, ticketPrice) {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

class Truck extends Vehicle {
    constructor(name, price, load) {
        super(name, price);
        this.load = load;
    }
}

const bus = new Bus("Green Line", 2000000, 40, 1200);
console.log(bus);

const truck = new Truck("Yamaha", 1000000, "100 Kg");
console.log(truck);