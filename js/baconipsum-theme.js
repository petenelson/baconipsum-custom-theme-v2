jQuery(document).ready(function() {
	
	jQuery("#baconButton").click(function() {
	
		jQuery.getJSON('https://baconipsum.com/api/?callback=?', { 'type':'meat-and-filler', 'start-with-lorem':'1', 'paras':'3' }, function(baconGoodness) {
	
			if (baconGoodness && baconGoodness.length > 0) {
	
				jQuery("#baconIpsumOutput").html('');
				
				for (var i = 0; i < baconGoodness.length; i++)
					jQuery("#baconIpsumOutput").append('<p>' + baconGoodness[i] + '</p>');
				jQuery("#baconIpsumOutput").show(); 					
			} 				
		}); 			
	}); 		
});
