const kelas  = [
 'Heryana',
 'Jessica',
 'Dewi',
]

const getKelas = (index) => {
 return kelas[index]
}

console.log(getKelas(2))

class Mahasiswa {
 constructor(nama, nim, kelas) {
  this.nama = nama
  this.nim = nim
  this.kelas = kelas
 }

 getKelasMahasiswa = () => {
  return this.nama + ' mengambil kelas ' + this.kelas
 }
}

const mahasiswa1 = new Mahasiswa('Heryana', '12345', 'Bahasa Inggris')

console.log(mahasiswa1.getKelasMahasiswa())