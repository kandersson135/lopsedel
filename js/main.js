$(document).ready(function() {

  // Clear button click
  $('#clear-btn').click(function() {
    $('.input').val('');
    scale();
  });

  // Print button click
	$('#print-btn').click(function() {
    window.print();
  });

  // Remove img click
  $("#clear-img-btn").click(function() {
    jQuery('#img > img').remove();
    jQuery('#img').css('height','0');
    scale();
  });
  
  $(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
  });

  function imageIsLoaded(e) {
      $('#img').append('<img src="'+e.target.result+'" />');
          $(function() {
              $("#img > img").draggable({
                  axis: "y"
          });
      });
      $('#img').css('height','300px');
      scale();
  }

  function scale(){
      $('.text1').text($("#r1").val());
      $('.text2').text($("#r2").val());
      $('.text3').text($("#r3").val());
      $('.text4').text($("#r4").val());
      $('.text5').text($("#r5").val());
      $('.text').each(function() {
          if(!$(this).is(':empty')){
              $(this).addClass('info');
          }
          else{
              $(this).removeClass('info');
          }
      });
      var value = 0.5;
      var topVal = "";
      if($('#img img').length>0){
          if($('.info').length==1){
              value = 1.2;
              topVal = 160;
          }
          if($('.info').length==2){
              value = 1;
              topVal = 160;
          }
          if($('.info').length==3){
              value = 0.7;
              topVal = 60;
          }
          if($('.info').length==4){
              value = 0.5;
              topVal = 0;
          }
          if($('.info').length==5){
              value = 0.35;
              topVal = -25;
          }
      }
      else{
          if($('.info').length==1){
              value = 1.4;
              topVal = 300;
          }
          if($('.info').length==2){
              value = 1.4;
              topVal = 300;
          }
          if($('.info').length==3){
              value = 1;
              topVal = 150;
          }
          if($('.info').length==4){
              value = 0.7;
              topVal = 80;
          }
          if($('.info').length==5){
              value = 0.55;
              topVal = 30;
          }
      }
      $('.text').each(function() {
          var $this = $(this);
          $this.removeAttr('style');
          $this.css({
                  'transform':'scale('+$('#poster-container').width()/$this.width()+','+value+')',
          });
          $this.css('margin-top',topVal+'px');
      });

  }
  $("input").blur(function() {
      scale();
  });
});
