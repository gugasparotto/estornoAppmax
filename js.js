

document.addEventListener('DOMContentLoaded', function () {
    
    var estorno = document.getElementById('estorno') ;
    var estornoParcial=document.getElementById('estornoParcial') ;
    estorno.addEventListener('click', function() {
        var idPedido=$("#nPedido").val();
        var token= $("#token").val();
           
        var jsonText =
		{
            
          "order_id":""+idPedido+"",
          "refund_type":"total"
        }        
          
        var myJSON = JSON.stringify(jsonText);
		var myHEADER = "https://admin.appmax.com.br/api/v3/refund?access-token="+token+"";
		var xmlhttp = new XMLHttpRequest(); 
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           var res= JSON.parse(this.response);
       }
    }
    
		xmlhttp.open("POST", myHEADER);
		xmlhttp.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
		xmlhttp.send(myJSON);
        console.log('acabou');
        


    });
    
    estornoParcial.addEventListener('click', function() {
        
        let idPedido=$("#nPedidoParcial").val();
        let token= $("#token").val();
        var valorParcial=$("#valorParcial").val();
        
      
           
        let jsonText =
		{
            
          "order_id":""+idPedido+"",
          "refund_type":"partial",
          "refund_amount":""+valorParcial+""
        }        
          
        var myJSON = JSON.stringify(jsonText);
		var myHEADER = "https://admin.appmax.com.br/api/v3/refund?access-token="+token+"";
		var xmlhttp = new XMLHttpRequest(); /// new HttpRequest instance
           //pega a response no sucesso
          xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           var res= JSON.parse(this.response);
       }
    }
    
		xmlhttp.open("POST", myHEADER);
		xmlhttp.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
		xmlhttp.send(myJSON);
        console.log('acabou');
        


    });
        
    });

