function FazzFood(harga, voucher, jarak, pajak){
    let diskon,tarifAwal = 5000,tarifTambah,tarifTotal, hargaTotal,potongan;
    
        
    if(voucher == 'FAZZFOOD50'){ 
        if(harga >= 50000){
            diskon = 50/100
            potongan = harga * diskon
        }
        if(jarak <= 2 ){
            tarifTotal = tarifAwal;
          }else if(jarak > 2){
            tarifTambah = (jarak - 2) * 3000
            tarifTotal = tarifAwal +tarifTambah;
        }if(pajak == true){
           pajak = harga * 5/100
        }else{
            pajak = 0
        }
        hargaTotal= harga - potongan + tarifTotal + pajak
        return `Harga: ${harga}\npotongan: ${potongan}\nBiaya Antar: ${tarifTotal}\n pajak: ${pajak}\nSubTotal: ${hargaTotal}`

    }else if(voucher == 'DITRAKTIR60'){
        if(harga >= 25000){
            diskon = 30/100
            potongan = harga * diskon
            if(potongan > 30000){
                potongan = 30000
            }
        }
        if(jarak <= 2 ){
            tarifTotal = tarifAwal;
          }else if(jarak > 2){
            tarifTambah = (jarak - 2) * 3000
            tarifTotal = tarifAwal +tarifTambah;
        }if(pajak == true){
           pajak = harga * 5/100
        }else{
            pajak = 0
        }
        hargaTotal= harga - potongan + tarifTotal + pajak
        return `Harga: ${harga}\npotongan: ${potongan}\nBiaya Antar: ${tarifTotal}\n pajak: ${pajak}\nSubTotal: ${hargaTotal}`


    }else{
        return 'voucher yang anda masukkan tidak tersedia'
    }
    
}

console.log(FazzFood(75000, 'FAZZFOOD50',5,false))
// console.log(FazzFood(1000000, 'DITRAKTIR60',5,false))
