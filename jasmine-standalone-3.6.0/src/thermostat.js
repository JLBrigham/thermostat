class Thermostat {

    constructor() {
    this.temperature = 20;
    }

    getCurrentTemperature() {
        return this.temperature;
    }

    increaseTemperature() {
        return this.temperature += 1

    }
}