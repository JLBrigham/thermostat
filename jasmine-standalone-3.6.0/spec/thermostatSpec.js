describe('Thermostat', function() {

    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
      });

    describe('has a temperature', function() {

        it('starts at 20', function() {
            thermostat = new Thermostat();
            expect(thermostat.getCurrentTemperature()).toEqual(20);
        });

        it('that can be increased', function() {
            thermostat = new Thermostat();
            expect(thermostat.increaseTemperature()).toEqual(21);
        });
    });


});