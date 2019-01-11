export class Garage{

    vehicles = ['Honda City', 'Hyundai Santro', 'BMW X3', 'BMW X5'];

    addvehicle(vehicle : string) : void {
        if(vehicle && vehicle.length)
            this.vehicles.push(vehicle);
    }
}