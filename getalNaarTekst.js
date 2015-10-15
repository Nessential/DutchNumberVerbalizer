function getalNaarTekst(getal){ 
	getal = getal.toString();
	getal = getal.replace(/[^0-9.,]/g, "");

  if (getal.indexOf('.') >= 0){
      getal = getal.split('.', 2);
      decimalen = getal[1];
      getal = getal[0];
  }
  else if (getal.indexOf(',') >= 0){
      getal = getal.split(',', 2);       
      decimalen = getal[1];
      getal = getal[0];
  }else{
      decimalen = 00;
  }
	
	getalS = getal;
  getal = parseInt(getal);
  decimalen = parseInt(decimalen);
	var resultaat = "";
	
	if(getal >= 1000 && getal < 1000000){
      resultaat = duizendtallen(getal);   
  }
	
	if(getal >= 100 && getal < 1000){
  		resultaat = honderdtallen(getal);
  }
	
  if(getal > 0 && getal < 10){
      resultaat = eenheden(getal); 
  }
	
	if(getal >= 10 && getal < 100){
		resultaat = tientallen(getal);
	}
	
	if(resultaat ==''){
        return "Getal ligt niet tussen de 0 - 1.000.000";
  }
    
  resultaat = resultaat + " euro";
  
  if(decimalen > 0 && decimalen < 10){
      resultaat = resultaat + " en " + eenheden(decimalen) + " cent";
  }else if(decimalen >= 10 && decimalen < 100){
      resultaat = resultaat + " en " + tientallen(decimalen) + " cent";
  }
    
  return resultaat.replace(/[-]+/gi," ");
}

function duizendtallen(getal){
	if(getal < 1000){
		return honderdtallen(getal);
	}
	
	if(getal >= 1000 && getal < 10000){
		if(getal < 2000){
			resultaat = "duizend"
		}else{
			resultaat = eenheden(parseInt(getal.toString().charAt(0))) + "duizend ";
		}
		
		resultaat += honderdtallen(parseInt(getal.toString().substring(1,4)));
		return resultaat;
		
	}else if(getal >= 10000 && getal < 100000){
		resultaat = tientallen(parseInt(getal.toString().substring(0,2))) + "duizend " + honderdtallen(parseInt(getal.toString().substring(2,5)));
		return resultaat;
	
	}else if(getal >= 100000 && getal < 1000000){
		resultaat = honderdtallen(parseInt(getal.toString().substring(0,3))) + "duizend " + honderdtallen(parseInt(getal.toString().substring(3,6)));
		return resultaat;
	}else{
		alert('er ging iets mis');
		return;
	}
}

function honderdtallen(getal){
		if(getal < 100){
			return tientallen(getal);
		}
		
		if(getal >= 100 && getal < 200){
			resultaat = "honderd";
		}else{
			resultaat = eenheden(parseInt(getal.toString().charAt(0))) + "honderd";
		}
		
		resultaat += " "+tientallen(parseInt(getal.toString().substring(1,3)));
		return resultaat;

}
    
function tientallen(getal){
	if(getal < 10 && getal > 0){
		return eenheden(getal);
	}
		
    if (getal >=10 && getal < 20)
    {
        switch(getal)
        {
            case 10:
                return "tien";
				break;
            case 11:
                return "elf";
				break;
            case 12:
                return "twaalf";
				break;
            case 13:
                return "dertien";
				break;
            case 14:
                return "veertien";
				break;
            case 15:
                return "vijftien";
				break;
            case 16:
                return "zestien";
				break;
            case 17:
                return "zeventien";
				break;
            case 18:
                return "achtien";
				break;
            case 19:
                return "negentien";
				break;
        }
		
    } else 
    {
        var tiental = "";
        switch(parseInt(getal.toString().charAt(0))){
            case 1:
                tiental = "tien";
				break;
            case 2:
                tiental = "twintig";
				break;
            case 3:
                tiental = "dertig";
				break;
            case 4:
                tiental = "veertig";
				break;
            case 5:
                tiental = "vijftig";
				break;
            case 6:
                tiental = "zestig";
				break;
            case 7:
                tiental = "zeventig";
				break;
            case 8:
                tiental = "tachtig";
				break;
            case 9:
                tiental = "negentig"; 
				break;
			default:
				return "";
				break;
        }
        if(getal%10 != 0){
			resultaat = eenheden(parseInt(getal.toString().charAt(1))) + " en " + tiental;
		}else{
			resultaat = tiental;
		}
            return resultaat;        
    }
}

function eenheden(getal){
    switch(getal){
        case 1: 
            return "een";
				break;
        case 2: 
            return "twee";
				break;
        case 3: 
            return "drie";
				break;
        case 4: 
            return "vier";
				break;
        case 5: 
            return "vijf";
				break;
        case 6: 
            return "zes";
				break;
        case 7: 
            return "zeven";
				break;
        case 8: 
            return "acht";
				break;
        case 9: 
            return "negen";
				break;
        default: 
            return "";
				break;
    }
}
