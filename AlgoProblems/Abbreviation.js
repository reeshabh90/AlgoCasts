function abbreviation(a, b) {
    let aArr = a.split('');
    let bArr = b.split('');
    let res = check(aArr,bArr);
    return (res? 'YES' : 'NO')

}

function check(aArr,bArr, recArr = []){    
        if(aArr.length > 0 && bArr.length === 0){
            if(recArr.filter(x=> x === x.toLowerCase()).length !== recArr.length){
                return false;
            }
            if(aArr.filter(x=> x === x.toLowerCase()).length === aArr.length){
                return true;
            }else{
                return false;
            }
        }
        else if(aArr.length === 0 && bArr.length > 0){ 
             if(recArr.filter(x=> x === x.toLowerCase()).length !== recArr.length){
                return false;
                }           
            return false;
        }

        else if(aArr.length === 0 && bArr.length === 0){
             if(recArr.filter(x=> x === x.toLowerCase()).length !== recArr.length){
                return false;
                }
            return true;
        }
        else {
            if(bArr[bArr.length -1].toLowerCase() === aArr[aArr.length - 1].toLowerCase() || bArr[bArr.length - 1].toUpperCase() === aArr[aArr.length - 1].toUpperCase()){
               bArr.pop();
               aArr.pop();
               return check(aArr,bArr,recArr);
            } else{                
                    recArr.push(aArr.pop()) ;
                    return check(aArr,bArr, recArr);                   
                }
        } 
}
a = 'daBcd';
b = 'ABC';

abbreviation(a, b)