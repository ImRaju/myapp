$( document ).ready(function() {
    $('#make').on('change', function() {
     
    var value= this.value;

    //alert(value);
    if(value !== ''){
 $.ajax({
        url:'http://localhost:3000/model',
        type :'POST',
        data :{id:value},
        success: function(response){
                 
         // alert(response); 
      var selectList = '';
      $.each(response, function(){
                // var q= this.model_name;
          selectList += "<option value='"+this.model_id+"'>"+this.model_name+"</option>";
              //   alert(q);
      });   
      selectList += '';
      //alert(selectList); 
       $('#model').empty();         
       $('#model').append(selectList);
       $('#model').change();
       }
      })
 $.ajax({
        url:'http://localhost:3000/year',
        type :'POST',
        data :{id:value},
        success: function(response){
                 
         // alert(response); 
      var selectList = '';
      $.each(response, function(){
                 var q= this.year;
          selectList += "<option value='"+this.makeyear_id+"'>"+this.year+"</option>";
              //   alert(q);
      });   
      selectList += '';
      //alert(selectList); 
       $('#makeyear').empty();         
       $('#makeyear').append(selectList);
       /*$('#model').change();*/
       }
      })
}
else{
  $('#model').empty();
  $('#variant').empty();
  $('#makeyear').empty();
  $('#model').append("<option value=''>Select Model</option>");
  $('#variant').append("<option value=''>Select Variant</option>");
  $('#makeyear').append("<option value=''>Select MakeYear</option>");
}
    })
  })
$(function() {
    $('#model').on('change', function() {
       //alert("hello"); 
    var value= this.value;
    //alert(value);
 $.ajax({
        url:'http://localhost:3000/variant',
        type :'POST',
        data :{id:value},
        success: function(response){
                 
            // alert(response); 
            var selectList = '';
            $.each(response, function(){
                // var q= this.model_name;
            selectList += "<option value='"+this.variant_id+"'>"+this.variant_name+"</option>";
              //   alert(q);
            });   
            selectList += '';
            //alert(selectList); 
             $('#variant').empty();   
             $('#variant').append(selectList);
       }
      })
    })
  })
