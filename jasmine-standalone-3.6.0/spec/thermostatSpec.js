describe('Thermostat', function() {

    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
      });

    describe('has a temperature', function() {

        it('starts at 20', function() {
            expect(thermostat.getCurrentTemperature()).toEqual(20);
        });

        it('can be increased', function() {
            thermostat.up();
            expect(thermostat.getCurrentTemperature()).toEqual(21);
        });

        it('can be decreased', function(){
            thermostat.down();
            expect(thermostat.getCurrentTemperature()).toEqual(19);
        });

        it('has a minimum temperature of 10 degrees', function(){
            for (var i = 0; i < 11; i++) {
                thermostat.down();
            }
            expect(thermostat.getCurrentTemperature()).toEqual(10);
        });   
        
        it('can be reset to the default temperature', function(){
            for (var i = 0; i < 6; i++) {
                thermostat.up();
            }
            thermostat.resetTemperature();
            expect(thermostat.getCurrentTemperature()).toEqual(20);
        });
    });

    describe('has a power saving mode', function() { 

        it('has power saving mode on by default', function(){
            expect(thermostat.isPowerSavingModeOn()).toBe(true);
        });

        it('can be switched off', function() {
            thermostat.switchPowerSavingModeOff()
            expect(thermostat.isPowerSavingModeOn()).toBe(false);
        });

        it('can be switched back on', function() {
            thermostat.switchPowerSavingModeOff();
            expect(thermostat.isPowerSavingModeOn()).toBe(false);
            thermostat.switchPowerSavingModeOn();
            expect(thermostat.isPowerSavingModeOn()).toBe(true);  
        });
    });

    describe('when power saving mode is on', function(){
        it('has a maximum temperature of 25 degrees', function(){
          for (var i = 0; i < 6; i++) {
              thermostat.up();
          }
          expect(thermostat.getCurrentTemperature()).toEqual(25);
        });
    });

    describe('when power saving mode is off', function() {
        it('has a maximum temperature of 32 degrees', function(){
            thermostat.switchPowerSavingModeOff();
            for (var i = 0; i < 13; i ++) {
                thermostat.up();
            }
            expect(thermostat.getCurrentTemperature()).toEqual(32);
        });
    });
});