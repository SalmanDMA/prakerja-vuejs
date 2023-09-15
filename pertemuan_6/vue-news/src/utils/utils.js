const formatDate = (dateString) => {
 const tanggal = new Date(dateString);
 const namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
 const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

 const jam = tanggal.getHours().toString().padStart(2, '0');
 const menit = tanggal.getMinutes().toString().padStart(2, '0');
 const detik = tanggal.getSeconds().toString().padStart(2, '0');

 const tanggalTampilan = `${namaHari[tanggal.getDay()]}, ${tanggal.getDate()} ${namaBulan[tanggal.getMonth()]} ${tanggal.getFullYear()} - ${jam}.${menit}.${detik}`;

 return tanggalTampilan;
};

export { formatDate };
