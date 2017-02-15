
$(document).ready(function() {

  var queryServer = function(object){
    $.ajax({
      type: 'POST',
      url: '/ip/querylink',
      data: object,
      timeout: 0,
      success: function(data){
        //do something with the data without reload using front-end framework
        data=JSON.parse(data);
        console.log(data);
        
      },
      error: function(x, t, m) {
        if(t==="timeout") {
            alert("got timeout");
        } else {
            alert(t);
        }
      }
    });
  }
});