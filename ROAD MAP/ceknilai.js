const readline = require ('readline');

const rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

function ceknilai(nilai){
	if (nilai >= 75 ){
		return("Selamat kamu Lulus")
	} else {
		return("Kamu Tidak lulus yekk")
	}
}

rl.question ('Masukkan nama siswa', function(nama){
	rl.question ('Masukkan Nilai siswa', function(siswanilai){

	const nilai = Number(siswanilai);

if (isNaN(nilai)) {
console.log('Mohon Masukkan format angka saja')
rl.close();
} else if (nilai <0 || nilai >100) {
console.log('Mohon Masukkan nilai antara 0 - 100')
rl.close();
} else {
const hasil = ceknilai(nilai)

console.log ("===== HASILL =====")
console.log('Nama Siswa : ', `${nama}`)
console.log('Nilai Siswa', `${nilai}`)
console.log(hasil);
rl.close();
}}
)});