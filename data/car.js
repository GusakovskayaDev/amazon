class Car {
	#brand;
	#model;
	speed = 0; //shortcut 
	isTrunkOpen = false;

	constructor (item) {
		this.#brand = item.brand;
		this.#model = item.model;
	}

	displayInfo() {
		console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk is: ${this.isTrunkOpen}`);
	}

	go() {
		if (!this.isTrunkOpen) {
			if (this.speed + 5 <= 200) {
				this.speed += 5;
			} else {
				console.log('The speed greater then 200');
			}
		} else {
			console.log('The trink is open');
		}
	
		// this.speed + 5 <= 200 
		// ? this.speed += 5
		// : console.log('The speed greater then 200');
	}

	brake() {
		if (this.speed - 5 >= 0) {
			this.speed -= 5;
		} else {
			console.log('The speed less then 0');
		}
		// this.speed - 5 >= 0 
		// ? this.speed -= 5
		// : console.log('The speed less then 0');
	}

	openTrunk() {
		if (this.speed === 0) {
			this.isTrunkOpen = true;
		} else {
			console.log('The car is moving!');
		}
	}

	closeTrunk() {
		this.isTrunkOpen = false;
	}
}

const car1 = new Car ({
	brand: 'Toyota',
	model: 'Corolla'
});
const car2 = new Car ({
	brand: 'Tesla',
	model: 'Model 3'
});
// console.log(car1);
// console.log(car2);

/*
car1.displayInfo();
car1.openTrunk();
car1.displayInfo();
car1.go();
car1.closeTrunk();
car1.go();
car1.go();
car1.go();
car1.displayInfo();
*/
// car1.displayInfo();
// car1.go();
// car1.displayInfo();
// car1.go();
// car1.displayInfo();
// car1.go();
// car1.displayInfo();
// car1.brake();
// car1.displayInfo();

/*
car2.displayInfo();
car2.go();
car2.go();
car2.displayInfo();
car2.openTrunk();
car2.brake();
car2.brake();
car2.displayInfo();
car2.openTrunk();
car2.displayInfo();
*/
// car2.displayInfo();
// car2.go();
// car2.displayInfo();
// car2.brake();
// car2.displayInfo();
// car2.brake();
// car2.displayInfo();

class RaceCar extends Car{
	acceleration; 

	constructor(item) {
		super(item);
		this.acceleration = item.acceleration;
	}

	go() {
		if (this.speed + 300 <= 300) {
			this.speed += 300;
		} else {
			console.log('The speed greater then 300');
		}
	}

	openTrunk() {
		console.log('The RaceCar do not have a trunk');
	}

	closeTrunk() {
		console.log('The RaceCar do not have a trunk');
	}
}

const race1 = new RaceCar({
	brand: 'McLaren',
	model: 'F1',
	acceleration: 20
});

/*
console.log(race1);
race1.displayInfo();
race1.go();
race1.displayInfo();
race1.go();
race1.openTrunk();
race1.brake();
race1.brake();
race1.brake();
race1.brake();
race1.brake();
race1.brake();
race1.displayInfo();
*/






// const obj = [{
// 	brand: 'Toyota',
// 	model: 'Corolla'
// }, {
// 	brand: 'Tesla',
// 	model: 'Model 3'
// }];


// console.log(Car);



