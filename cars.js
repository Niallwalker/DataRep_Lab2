class Vehicle{//class created

    constructor(make, model, year){ //constructor created
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){ 
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`); //Information console log
    }
}

//Vehicle Class

//let myVehicle = new Vehicle('VW', 'Golf', '2011'); 
//let info = myVehicle.Information();
//

class Cars extends Vehicle { //creating car class and extending it from vehicle
    constructor(make, model, year, doors){ //constructor class addimg doors
        super(make, model, year);
        this.doors = doors;
    }

    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`); //Adding doors to information
    }
}

let myCar = new Cars('VW', 'Golf R-Line', 2011, 3); //adding details into myCar 
myCar.Information();