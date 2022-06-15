function palindrom (str){
    let output;
    if(str){
        if(typeof(str) == 'string' ){
            result = str.toLowerCase().split('').reverse().join('')
            if(result == str.toLowerCase()){
                output = 'Palindrom'
            }else{
                output = 'Bukan Palindrom'
            }
        
        }else{
            output = 'inputan harus string'
        }
    }else{
        output = "inputan tidak boleh kosong"
    }
    return output
}

console.log(palindrom('Malam'))