class Thermostat {

    constructor() {
        this.MINIMUM_TEMPERATURE = 10;
        this.DEFAULT_TEMPERATURE = 20;
        this.temperature = this.DEFAULT_TEMPERATURE;
        this.powerSavingMode = true;
        this.MAX_LIMIT_PSM_ON = 25;
        this.MAX_LIMIT_PSM_OFF = 32;
    }

    getCurrentTemperature() {
        return this.temperature;
    }

    up() {
        if (this.isMaximumTemperature()){
            return;
        }
        this.temperature ++
    }

    down() {
        if (this.isMinimumTemperature()) {
            return;
        }
        this.temperature --
    }

    isPowerSavingModeOn() {
        return this.powerSavingMode === true;
    }

    switchPowerSavingModeOff() {
        this.powerSavingMode = false;
    }

    switchPowerSavingModeOn() {
        this.powerSavingMode = true;
    }

    isMinimumTemperature() {
        return this.temperature === this.MINIMUM_TEMPERATURE;
    }

    isMaximumTemperature() {
        if (this.isPowerSavingModeOn() === false) {
            return this.temperature === this.MAX_LIMIT_PSM_OFF;
        }
        return this.temperature === this.MAX_LIMIT_PSM_ON;
    }

    resetTemperature() {
        this.temperature = this.DEFAULT_TEMPERATURE;
    }
}