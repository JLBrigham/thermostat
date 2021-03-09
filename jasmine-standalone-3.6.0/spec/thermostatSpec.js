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
    });


});