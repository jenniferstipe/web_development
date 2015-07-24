$(document).ready(function() {
    $('div').click(function() {
        $('div').effect('explode');  
        $('div').effect('bounce',{times:3},200);     		
        $('div').effect('slide');         
	});
});