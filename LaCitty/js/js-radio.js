 /*!
 * JS Radio Lacitty
 * Copyright 2018 Lacharme SAS.
 * By Geco (Giver Edinson Cupaja Olaya)
 */


 	$(document).ready(function(){
        for (var i = 1; i <= 24; i++) {
        	$('#item_'+i).prepend('<img onmouseover="over(this)" onmouseout="out(this)" class="desvanecer" src="img/fila-1-col-'+i+'.png" />');
        	$('#item_'+i).click(function () { clic(this); });
        	if (i<12) {
        		$('#item_'+i).prepend('<div class="time_'+i+' time" style="display:none;">'+i+':00 AM</div>');
        	}else if(i==12){
        		$('#item_'+i).prepend('<div class="time_'+i+' time" style="display:none;">'+i+':00 PM</div>');
        	}else if(i==24){
        		$('#item_'+i).prepend('<div class="time_'+i+' time" style="display:none;">'+(i-12)+':00 AM</div>');
        	}else{
        		$('#item_'+i).prepend('<div class="time_'+i+' time" style="display:none;">'+(i-12)+':00 PM</div>');
        	}
        }
    });

	function over(time) {
		var data = $(time).parents('li');
		var oID = data['0']['id'];
		var div = oID.split('_');
		$( ".dropdownContain" ).remove();
		$('#item_'+div['1']).prepend('<div class="dropdownContain"><div class="dropOut"><div class="triangle"></div><ul><li><a href="#">Radio 1</a></li><li>Radio 2</li><li>Radio 3</li></ul></div></div>');
		$('.time_'+div['1']).show();
	}

	function clic(datos) {
		var oID = datos['id'];
		var div = oID.split('_');
		var src = $('#item_'+div['1']+' > img').attr("src","img/fila-1-col-"+div['1']+"-g.png");
	}

	function borra(datos) {
		$( ".dropdownContain" ).remove();
	}

	function out(time) {
		var data = $(time).parents('li');
		var oID = data['0']['id'];
		var div = oID.split('_');
		$('.time_'+div['1']).hide();
	}