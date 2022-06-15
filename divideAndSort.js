function divideAndSort(num){
let result = ''
if(num){
    if(typeof(num) == 'number'){

    let temp = num.toString().split(0)
    temp.forEach(element => {
    result = result + element.split('').sort().join('')
    });
    console.log(result)
    } else{
        return 'inputan harus angka'
    }
}else{
    return 'inputan tidak boleh kosong'
}
}
divideAndSort(5956560159466056)

