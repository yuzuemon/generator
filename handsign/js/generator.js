$(function(){
  $('#generate').on('click', function(){
    var $this = $(this);

    if ($this.hasClass('btn-warning')){

      $('#handsign-sample').show();
      $('#handsign').empty();
      $this
        .addClass('btn-success')
        .removeClass('btn-warning')
        .html('画像生成');
      $('#handsign-status').text('画像を保存するには, 画像生成ボタンを押してください.');

    } else {

      html2canvas($('#handsign-sample').get(0), {
        onrendered: function(canvas){
          $('#handsign').append('<img src=' + canvas.toDataURL() + '></img>');
          $('#handsign-sample').hide();
          $this
            .addClass('btn-warning')
            .removeClass('btn-success')
            .html('もう一度作り直す');
          $('#handsign-status').text('↓が画像になりました, 画像を保存してご利用ください.');
        }
      });

    }

  });
});
