const reverseWords = (word) =>{
    let output;
    if(word){
        if(typeof word == 'string'){
            output =  word.split(' ').reverse().join(' ')
        }else{
            output = 'inputan harus string'
        }
    }else{
        output = 'inputan tidak boleh kosong'
    }
    return output

}

console.log(reverseWords(123))


