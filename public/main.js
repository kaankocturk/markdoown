$(document).ready(init);
function init(e){
    $('.button1').on('click', handleEntry);
}
function handleEntry(e){
  // e.preventDefault();
  var markedstring = $('textarea').val();
  $.post('/markthat', {markit: markedstring}).success(function(){
    console.log('asdsad');
      $.get('/markit').success(function(data){
        console.log(data);
        $('.html').append($.parseHTML(JSON.parse(data)));
      }).fail(function(){
        console.log('failed');
    });
  });
}
