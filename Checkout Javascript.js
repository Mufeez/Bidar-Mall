( function() {
    
	document.getElementById("billing_first_name").value="Guest";
    document.getElementById("billing_last_name").value="User";
    document.getElementById("billing_address_1").value="Chitguppa";
    document.getElementById("billing_city").value="Chitguppa";
    document.getElementById("billing_postcode").value="585412";
    document.getElementById("billing_email").value="Bidarmall@outlook.com";
    document.getElementById("billing_state").value="KA";
    document.getElementById("billing_phone").placeholder="9012345678";
    
	//Generating Link for Confirming Order Details Over Whats APP

    var order_summary=document.getElementsByClassName("shop_table")[0].innerText;

    var orderDetails="";

    for (var i=0;i<document.getElementsByClassName("product-name").length;i++)
    {
        if (i>=1)
        {
        orderDetails=orderDetails+i+")"+document.getElementsByClassName("product-name")[i].innerText+"++:++"+document.getElementsByClassName("product-total")[i].innerText+"+%0A%0D";
        
        }

        else
        {
            orderDetails=orderDetails+document.getElementsByClassName("product-name")[i].innerText+"++:++"+document.getElementsByClassName("product-total")[i].innerText+"+%0A%0D";
        }
    }

    orderDetails=orderDetails+document.getElementsByClassName("cart-subtotal")[0].getElementsByTagName("th")[0].innerText+"++:++"+document.getElementsByClassName("cart-subtotal")[0].getElementsByTagName("td")[0].innerText+"++:++%0A%0D";
    orderDetails=orderDetails+document.getElementsByClassName("shipping")[0].getElementsByTagName("th")[0].innerText+"++:++"+document.getElementsByClassName("shipping")[0].getElementsByTagName("td")[0].innerText+"%0A%0D";
    orderDetails=orderDetails+document.getElementsByClassName("order-total")[0].getElementsByTagName("th")[0].innerText+"++:+++"+document.getElementsByClassName("order-total")[0].getElementsByTagName("td")[0].innerText+"%0A%0D";
    
    orderDetails=orderDetails.replace(" ","+");

    var message="%0A"+"Confirm Your Order By Cicking Send Button ->";
  
    var confirmOrderLinkWhatsApp = document.createElement('a');
    confirmOrderLinkWhatsApp.setAttribute("style", "float:left; width:100%; line-height: 65px; text-align:left; font-size:1.41575em; padding-left:8px; height:65px;");
    confirmOrderLinkWhatsApp.id="confirm_order_link_whatsapp";
    confirmOrderLinkWhatsApp.href ='https://api.whatsapp.com/send?phone=+916362123009&text='+orderDetails+message+''; // Insted of calling setAttribute 
    confirmOrderLinkWhatsApp.innerHTML = "Place Order on WhatsApp" // <a>INNER_TEXT</a>
 
    document.body.appendChild(confirmOrderLinkWhatsApp);
	
	 var confirmOrderLinkSms = document.createElement('a');
    confirmOrderLinkSms.setAttribute("style", "float:left; width:100%; line-height: 65px; text-align:left; font-size:1.41575em; padding-left:8px; height:65px;");
    confirmOrderLinkSms.id="confirm_order_link_sms";
	confirmOrderLinkSms.href ='sms:+916362123009?body='+orderDetails+message+''; // Insted of calling setAttribute 
    confirmOrderLinkSms.innerHTML = "Place Order on WhatsApp" // <a>INNER_TEXT</a>
 
    document.body.appendChild(confirmOrderLinkSms);
 
 
   
     var order_total=parseInt(document.getElementsByClassName("order-total")[0].getElementsByTagName("td")[0].innerText.replace("?","").replace(" ",""));
  
	
	
	
	 var createAccountCheckBox = document.getElementById("createaccount");
	
	
	
	
      if(createAccountCheckBox){
		
		 document.getElementById("createaccount").addEventListener("change", function () {
	
		 if(this.checked) {
        // Checkbox is checked..
			  if (document.getElementById("billing_phone").value.toString().length>3)
                                    {
		  
                document.getElementById("billing_email").value=document.getElementById("billing_phone").value.toString()+"@Bidarmall.com";
	 
		  
		  
		  
                                   }
			 
			 setTimeout(function(){ document.getElementById("account_password").value="password"; }, 1000);
			 
                           } 
	
     
  });
		
	
	  
              }
	
	
	 var getOtpLink = document.getElementById("getotplink");
	
	
      if(getOtpLink){
		  
		 document.getElementById("place_order").style.display="none";
		  
		 document.getElementById("otpid").addEventListener('input', function (evt) {
                 document.getElementById("place_order").style.display="block";
			
			if(createAccountCheckBox)
			{
			    // document.getElementById("createaccount").checked=true;
				
				 document.getElementById("billing_email").value=document.getElementById("billing_phone").value.toString()+"@Bidarmall.com";
				
			    // setTimeout(function(){ document.getElementById("account_password").value="password"; }, 1000);
				
			}
         });
		
		
	
	  
              }
	
	
      
		 document.getElementById("billing_phone").addEventListener('input', function (evt) {
                
			
			if(createAccountCheckBox)
			{
			    // document.getElementById("createaccount").checked=true;
				
				 document.getElementById("billing_email").value=document.getElementById("billing_phone").value.toString()+"@Bidarmall.com";
				
			    // setTimeout(function(){ document.getElementById("account_password").value="password"; }, 1000);
				
			}
         });
	
	
	
	

	
	
    document.getElementsByName("checkout")[0].addEventListener("submit", function () {
		
      if (document.getElementById("billing_phone").value.toString().length>3)
      {
		  
      
		  
  // document.getElementById("confirm_order_link_whatsapp").click();
 // document.getElementById("confirm_order_link_sms").click();
		  
      }
    
  });
  
    } )();
