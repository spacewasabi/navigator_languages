$(document).ready(function(){
  var tbody = document.getElementById('tbody');
  $.ajax({
    url: '../config/config.json',
    dataType: 'json',
    error: function(){
      console.log('JSON FAILED for data');
    },
    success:function(data){
      console.log('test');
    } 
  })
})