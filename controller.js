$(document).ready(function() {

    var thermostat = new Thermostat()

    $('#temperature').text(thermostat.temp);

    $('#temperature-up').on('click', function(){
      thermostat.up(1);
      $('#temperature').text(thermostat.temp);
    });

    $('#temperature-down').on('click', function(){
      thermostat.down(1);
      $('#temperature').text(thermostat.temp);
    })

    $('#temperature-reset').on('click', function(){
      thermostat.reset();
      $('#temperature').text(thermostat.temp);
    })

    $('#powersaving-off').on('click', function(){
      thermostat.powerSavingMode = false;
      $('#power-saving-status').text('off');
    })

    $('#powersaving-on').on('click', function(){
      thermostat.powerSavingMode = true;
      $('#power-saving-status').text('on');
    })

})
