$(document).ready(function(){
    $('.carousel').carousel();
  });
  $(document).on("change",'.typesearch',function(){
    if($(this).val()!=''){ $(this).addClass("validtxt"); } else { $(this).removeClass("validtxt"); }
  });
  $(document).on("click",'.dropcaty',function(){
    $("#catyMenuButton").html($(this).text());
  });
  $(document).on("click",'.dropfrom',function(){
    $("#fromcal-MenuButton").html($(this).text());
  });
  $(document).on("click",'.dropto',function(){
    $("#tocal-MenuButton").html($(this).text());
  });