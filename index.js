
// Themes end

var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Orthographic();
chart.panBehavior = "rotateLongLat";
chart.deltaLatitude = -20;
chart.padding(20, 20, 20, 20);

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;
//polygonSeries.include = ["BR", "UA", "MX", "CI"];

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.fill = am4core.color = "lightgreen";
polygonTemplate.stroke = am4core.color("");
polygonTemplate.strokeWidth = 0;
polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;

var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
graticuleSeries.mapLines.template.line.stroke = am4core.color("");
graticuleSeries.mapLines.template.line.strokeOpacity = 0;
graticuleSeries.fitExtent = false;


chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.8;
chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("cyan");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
// hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

let animation;
setTimeout(function () {
  animation = chart.animate({ property: "deltaLongitude", to: 100000 }, 20000000);
}, 1000)

chart.seriesContainer.events.on("down", function () {
  //  animation.stop();
});



// Play-Pause Button


  let vidClip = $('#myVideo');

  function playVid() {
    myVideo.play();
  }

  function pauseVid() {
    myVideo.pause();
  }

  $('.click-01').on('click', function () {
    $('.first, .second').toggle();
  });

  vidClip.onended = function (e) {
    $('.first, .second').toggle();
  };

  let vidClip01 = $('#videPlay1');

  function playVid01() {
    videPlay1.play();
  }

  function pauseVid01() {
    videPlay1.pause();
  }

  $('.click-02').on('click', function () {
    $('.first-01, .second-01').toggle();
  });

  vidClip01.onended = function (e) {
    $('.first-01, .second-01').toggle();
  };


  let vidClip02 = $('#myVideo02');

  function playVid02() {
    myVideo02.play();
  }

  function pauseVid02() {
    myVideo02.pause();
  }

  $('.click-03').on('click', function () {
    $('.first-02, .second-02').toggle();
  });

  vidClip02.onended = function (e) {
    $('.first-02, .second-02').toggle();
  };

  let vidClip03 = $('#videPlay2');

  function playVid03() {
    videPlay2.play();
  }

  function pauseVid03() {
    videPlay2.pause();
  }

  $('.click-04').on('click', function () {
    $('.first-03, .second-03').toggle();
  });

  vidClip03.onended = function (e) {
    $('.first-03, .second-03').toggle();
  };

  let vidClip04 = $('#videPlay3');

  function playVid04() {
    videPlay3.play();
  }

  function pauseVid04() {
    videPlay3.pause();
  }

  $('.click-05').on('click', function () {
    $('.first-04, .second-04').toggle();
  });

  vidClip03.onended = function (e) {
    $('.first-04, .second-04').toggle();
  };


  $(document).ready(function (){

    $('#container-01').click(function () { 
      $('#video-1').show();
      $('#video-2').hide();
      $('#video-3').hide()
      
    });

    $('#container-02').click(function () { 
      $('#video-1').hide();
      $('#video-2').show();
      $('#video-3').hide()
      
    });

    $('#container-03').click(function () { 
      $('#video-1').hide();
      $('#video-2').hide();
      $('#video-3').show()
      
    });

    $('#box-One').click(function () { 
      $('#myVideo01').show();
      $('#myVideo04').hide();
      $('#myVideo03').hide();
      $('.buttons-01').show();
      $('.buttons-02').hide();
      $('.buttons-04').hide();
      
    });

    $('#box-Two').click(function () { 
      $('#myVideo01').hide();
      $('#myVideo04').show();
      $('#myVideo03').hide();
      $('.buttons-01').hide();
      $('.buttons-02').show();
      $('.buttons-04').hide();
      
    });

    $('#box-Three').click(function () { 
      $('#myVideo01').hide();
      $('#myVideo04').hide();
      $('#myVideo03').show();
      $('.buttons-01').hide();
      $('.buttons-02').hide();
      $('.buttons-04').show();
      
    });

    $('#boxClick').click(function () { 
      $('#videoSec').show();
      $('#imageSec01').hide();
      $('#imageSec02').hide();
      
    });

    $('#boxClick1').click(function () { 
      $('#videoSec').hide();
      $('#imageSec01').show();
      $('#imageSec02').hide();
      
    });

    $('#boxClick2').click(function () { 
      $('#videoSec').hide();
      $('#imageSec01').hide();
      $('#imageSec02').show();
      
    });

  });