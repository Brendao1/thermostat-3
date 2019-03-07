function Thermostat() {
  this.temp = 20
  this.minTemp = 10
  this.powerSavingMode = true
}

Thermostat.prototype.up = function(increaseInTemp) {
  this.throwErrorIfAboveMaxtemp(increaseInTemp)
  this.temp += increaseInTemp

}

Thermostat.prototype.down = function(decreaseInTemp) {
  this.throwErrIfBelowMinTemp(decreaseInTemp)
  this.temp -= decreaseInTemp
}

Thermostat.prototype.throwErrIfBelowMinTemp = function(decreaseInTemp) {
  var newTemp = this.temp - decreaseInTemp
  if (newTemp < this.minTemp) {
    throw 'Min temperature is 10 degrees'
  }
}

Thermostat.prototype.throwErrorIfAboveMaxtemp = function(increaseInTemp) {
  var newTemp = this.temp + increaseInTemp
  if (newTemp > this.maxTemp()) {
    throw `Max temperature is ${this.maxTemp()} degrees`
  }
}

Thermostat.prototype.maxTemp = function(){
  if (this.powerSavingMode == true) { return 25 }
  return 32
}

Thermostat.prototype.reset = function(){
  this.temp = 20
}

Thermostat.prototype.energyUsage = function(){
  if ((this.temp > 17 ) && (this.temp < 24)) {
    return 'medium-usage'
  } else if (this.temp < 18) {
    return 'low-usage'
  } else {return 'high-usage'
  }
}
