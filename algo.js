var reverse = function(x) { 
    
    let num = x.toString();
    let array = num.split("");
    var answer = "";
    var negative = false;
    for (var i = array.length-1; i>=0; i-- ){
        if(array[i] == "-"){
            negative = true;
        }
       
        else{
            answer = answer + array[i];
        }
        
        
    }
    if (negative == true){
        answer = "-" + answer;
    }
    var neg_checker = (Math.pow(2,31)-1)*-1;
  
    if (answer  > Math.pow(2,31)-1 || answer < neg_checker) {
        return 0;
    }
    return parseInt(answer);
    
};