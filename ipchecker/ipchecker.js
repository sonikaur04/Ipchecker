var varIpChecker = document.getElementById("txtIpAddress")


//Event handler
function checkIp_Click(){
  
    var ipAddress=varIpChecker.value;
    var isCorrect=checkIpAddress(ipAddress);
  if(isCorrect==true){
    alert("IP Address is Correct");
  }
  else{
    alert("IP Address is InCorrect");
  }
}
  
  //bll code  
    
    function checkIpAddress(ipAddress){
        var ipParts=ipAddress.split('.');
        if(ipParts.length==4){
                for(var i in ipParts){
                    var e=ipParts[i];
                    e=parseInt(e);
                    if(e>=0 && e<=255){
    
                    }
                    else{
    
                        return false;
                    }
                }
                return true;
        }
        else{
            return false;
        }
    
    }
