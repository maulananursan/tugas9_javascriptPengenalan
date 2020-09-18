function dataObject(){
var motor = {
	merek: 'Yamaha',
	nomol: 'T 1234 TM',
	warna: 'Merah',
	harga: 10000000
	}

for(var tampil in motor)
	console.log(motor[tampil])
}

dataObject();