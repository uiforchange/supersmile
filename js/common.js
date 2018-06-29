/* Numbers only*/

    function AllowNumberOnly(e) {
        var charCode = (e.which) ? e.which : e.keyCode;
        if (charCode == 8) return true;

        var keynum;
        var keychar;
        var charcheck = /[0-9]/;
        if (window.event) // IE
        {
            keynum = e.keyCode;
        }
        else {
            if (e.which) // Netscape/Firefox/Opera
            {
                keynum = e.which;
            }
            else return true;
        }
            if (keynum==13)
        {
            enterval();
            stopEvent = "";
            stopEvent1 = "";
        if(!cc_validation(focusval))
        {
            return false;
        }
        }
        keychar = String.fromCharCode(keynum);
        return charcheck.test(keychar);
    }

function AllowAlphabetOnly(e){var charCode=(e.which)?e.which:e.keyCode;if(charCode==8)return true;var keynum;var keychar;var charcheck=/[a-zA-Z ]/;if(window.event){keynum=e.keyCode;}else{if(e.which){keynum=e.which;}else return true;}keychar=String.fromCharCode(keynum);return charcheck.test(keychar);}


jQuery(document).ready(function() {



	jQuery("#ScheduleConsul").click(function(){	
		jQuery(".ssp_error_field").text("");
		
	var BookNowNm =	jQuery.trim(jQuery("#sspName").val());
	var BookNowmailme =	jQuery.trim(jQuery("#sspEmail").val());
	var BookNowMobno =	jQuery.trim(jQuery("#sspMob").val());
	var EnqState = jQuery.trim(jQuery("#sspTextArea").val());
	var nameExpression = /^[A-Za-z\s]{3,30}$/;
	var mobExpression = /^[0-9]*$/;
	var emailExpression = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9\-]+)\.(([a-zA-Z]{2,})|([a-zA-Z]{2,}\.[a-zA-Z]{2,})|([a-zA-Z]{2,}\.[a-zA-Z]{2,}\.[a-zA-Z]{2,}))$/;
	
		if(BookNowNm == '' || BookNowNm == 'NAME*')
		{
		jQuery(".ssp_error_field_exname").text("Please enter your name");
		jQuery("#sspName").focus();
				return false;
		}
		
		
		else if(!nameExpression.test(BookNowNm)  || (BookNowNm.length<=2)|| (BookNowNm.length>30))
		{
		
		jQuery(".ssp_error_field_exname").text("Please enter your valid name");
		jQuery("#sspName").focus();
		
		return false;
		
		}
		
		else if(BookNowMobno == '' || BookNowMobno == 'LANDLINE/MOBILE NUMBER*')
		{
		jQuery(".ssp_error_field_extel").text("Please enter your mobile/landline number");
		jQuery("#sspMob").focus();
		
		return false;	
			
		}
		
		else if((!mobExpression.test(BookNowMobno) || BookNowMobno.length<10) || (BookNowMobno.length>12 || BookNowMobno==0))
		{
		jQuery(".ssp_error_field_extel").text("Please enter your valid mobile/landline number");
		jQuery("#sspMob").focus();
		return false;	
		
		}
		
		else if(BookNowmailme == '' || BookNowmailme == 'LANDLINE/MOBILE NUMBER*')
		{
		jQuery(".ssp_error_field_exmail").text("Please enter your EmailID");
		jQuery("#sspEmail").focus();
		
		return false;	
			
		}
		
		
		else if((!emailExpression.test(BookNowmailme) || (BookNowmailme.length<=4) || (BookNowmailme.length>70)) && (BookNowmailme!=''))
		{
		jQuery(".ssp_error_field_exmail").text("Please enter your valid Email ID");
		jQuery("#sspEmail").focus();
		return false;	
			
		}
		
		else if (EnqState == ''){
			jQuery(".ssp_error_field_exproduct").text("Please enter your comments");
				jQuery("#sspTextArea").focus();
				return false;
			
		}
		else{
			
			alert("Form Submitted Successfully");
			
			jQuery("#sspName").val("");
			jQuery("#sspMob").val("");
			jQuery("#sspEmail").val("");
			jQuery("#sspTextArea").val("");
			
	  /*var form=jQuery("#sspFormHead");
  
    jQuery.ajax({
            type:"POST",
            url:form.attr("action"),
            data:jQuery("#sspFormHead").serialize(),//only input
            success: function(response){
			window.location.replace("https://webdev.xerago.com/gmmco/fg-wilson-thank-you/");
			
	setTimeout(function() {
    

    
    
}, 4000);

	
		}
		
			 });  Ajax End */
			
		}
		
	
	}); /* Submit End */
	
	jQuery('.fa-star').click(function(){
		
			jQuery(this).toggleClass('checked');
		
		
	});


});