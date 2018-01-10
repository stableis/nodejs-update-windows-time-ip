

request('https://timezoneapi.io/api/ip', function(err, res, dat){

    /* Parse */
    var data = JSON.parse(dat);

    /* Request OK? */
    if(data.meta.code == '200'){
        
    var time = data.data.datetime.date_time_txt;
		var exacttime = data.data.datetime.time; /*get exact time */
		var exacttimezone = timeZoneSuper[data.data.timezone.id];
		alert('I.P time is '+exacttime);
		alert('I.P timezone is '+exacttimezone);
		/* change timezone */
		var options = { name: 'Zone' }; 
    sudo.exec('tzutil /s "'+exacttimezone+'" && time '+exacttime, options, function(error, stdout, stderr) 
    {     

	    if (error) { throw error;     console.log('timezone stdout: ' + stdout);  
   		 } else {
			alert('changed timezone to '+exacttimezone);
			alert('changed time to '+exacttimezone);
		} 
    
    }
		);
	
    }
});
