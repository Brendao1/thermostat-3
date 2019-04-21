$(document).ready(function() {

  function updateTemperature() {
    $('#temperature').text(thermostat.temp + '\xB0');
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function updateWeather() {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=765b7effb4fe3023c06c61344f418207', function(data) {
    $('#current-temperature').text(data.name + ": " + data.main.temp + '\xB0')
  })
  }


    var thermostat = new Thermostat()
    updateTemperature()
    updateWeather()

    $('#temperature').text(thermostat.temp + '\xB0')

    $('#temperature-up').on('click', function(){
      thermostat.up(1);
      updateTemperature();
      $('#temperature').text(thermostat.temp + '\xB0');
    });

    $('#temperature-down').on('click', function(){
      thermostat.down(1);
      updateTemperature();
    })

    $('#temperature-reset').on('click', function(){
      thermostat.reset();
      updateTemperature();
    })

    $('#powersaving-off').on('click', function(){
      thermostat.powerSavingMode = false;
      $('#power-saving-status').text('off');
    })

    $('#powersaving-on').on('click', function(){
      thermostat.powerSavingMode = true;
      $('#power-saving-status').text('on');
    })

    //$('#energy-usage').text(thermostat.energyUsage());


})
