function loadDoc() {
var longo = $('input#graflong').val();
var longa = $('input#graflat').val();
if ($.trim(longo) != ''){
	$.post('ajax/grafittigetajax.php', {longo:longo,longa:longa},function(data){
		$('div#grafData').text(data);
		});
};

