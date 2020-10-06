class BMI { //Class
    constructor(height, weight){ //Contructor
        this.height = height;
        this.weight = weight;
    }
    
    calculateBMI(){ //method to calculate BMI
        let bmi = this.weight/(this.height**2); 
        return bmi;
     }
}

let MyBmi = new BMI(1.8, 82); //class instance
let calculatedBMI = MyBmi.calculateBMI(); //Method Envoked
console.log(calculatedBMI); //What the comnsoel will read out