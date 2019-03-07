describe('Thermostat', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat()
  })

  it('should have a starting temperature of 20 degrees', function() {
    expect(thermostat.temp).toEqual(20)
  })

  it('should increase the temperature by 10', function() {
    thermostat.up(5)
    expect(thermostat.temp).toEqual(25)
  })

  it('should decrease the temperature by 10', function() {
    thermostat.down(10)
    expect(thermostat.temp).toEqual(10)
  })

  it("doesn't go below 10 degrees", function() {
    var error = function() {
      thermostat.down(11)
    }
    expect(error).toThrow('Min temperature is 10 degrees')
  })

  it("should limit to max temp of 25 if power saving mode is on (which is default)", function() {
    var increaseTempBeyondMax = function() {
      thermostat.up(6)
    }
    expect(increaseTempBeyondMax).toThrow('Max temperature is 25 degrees')
  })

  it("should limit to max temp of 32 degrees if power saving mode is off", function() {
    thermostat.powerSavingMode = false
    var increaseTempBeyondMax = function() {
      thermostat.up(13)
    }
    expect(increaseTempBeyondMax).toThrow('Max temperature is 32 degrees')
  })

  it("should reset temperature to 20", function() {
    thermostat.up(5)
    thermostat.reset()
    expect(thermostat.temp).toEqual(20)
  })

  it("it sets energy usage to low-usage if temperature is less than 18", function() {
    thermostat.temp = 17
    expect(thermostat.energyUsage()).toEqual("low-usage")
  })

  it("it sets energy usage to medium-usage if temperature is less than 25 and more than 17", function() {
    thermostat.temp = 18
    expect(thermostat.energyUsage()).toEqual("medium-usage")
  })

  it("it sets energy usage to high-usage if temperature is more than 24", function() {
    thermostat.temp = 25
    expect(thermostat.energyUsage()).toEqual("high-usage")
  })
})
