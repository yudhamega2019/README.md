/*
  LANGKAH 3: JavaScript = OTAK / LOGIKA aplikasi.
  JavaScript membuat halaman bisa "berbuat sesuatu":
  menambah tugas, mencentang, menghapus, dan menyimpan data.
*/

// --- 1. Ambil elemen HTML yang akan kita pakai ---
const form = document.getElementById('form-tugas');
const input = document.getElementById('input-tugas');
const daftar = document.getElementById('daftar-tugas');
const info = document.getElementById('info');

// --- 2. DATA: semua tugas disimpan di sebuah array (daftar) ---
// Setiap tugas adalah objek: { id, teks, selesai }
// Kita coba ambil data lama dari localStorage (penyimpanan di browser),
// supaya tugas tidak hilang saat halaman di-refresh.
let tugasTugas = muatData();

function muatData() {
  try {
    const dataTersimpan = localStorage.getItem('tugas');
    return dataTersimpan ? JSON.parse(dataTersimpan) : [];
  } catch {
    return []; // kalau gagal, mulai dengan daftar kosong
  }
}

function simpanData() {
  try {
    localStorage.setItem('tugas', JSON.stringify(tugasTugas));
  } catch {
    // Abaikan: aplikasi tetap jalan walau tidak bisa menyimpan
  }
}

// --- 3. TAMPILKAN: ubah data menjadi elemen HTML di layar ---
function tampilkan() {
  daftar.innerHTML = ''; // kosongkan dulu, lalu gambar ulang

  for (const tugas of tugasTugas) {
    const li = document.createElement('li');
    li.className = tugas.selesai ? 'tugas selesai' : 'tugas';

    const centang = document.createElement('input');
    centang.type = 'checkbox';
    centang.checked = tugas.selesai;
    centang.addEventListener('change', () => ubahStatus(tugas.id));

    const teks = document.createElement('span');
    teks.textContent = tugas.teks; // textContent aman dari kode jahat
    teks.addEventListener('click', () => ubahStatus(tugas.id));

    const hapus = document.createElement('button');
    hapus.className = 'tombol-hapus';
    hapus.textContent = '✕';
    hapus.title = 'Hapus tugas';
    hapus.addEventListener('click', () => hapusTugas(tugas.id));

    li.append(centang, teks, hapus);
    daftar.append(li);
  }

  // Ringkasan di bawah daftar
  const sisa = tugasTugas.filter((t) => !t.selesai).length;
  info.textContent = tugasTugas.length === 0
    ? 'Belum ada tugas. Yuk tambahkan satu!'
    : `${sisa} dari ${tugasTugas.length} tugas belum selesai.`;
}

// --- 4. AKSI: fungsi-fungsi yang mengubah data ---
function tambahTugas(teks) {
  tugasTugas.push({ id: Date.now(), teks: teks, selesai: false });
  simpanData();
  tampilkan();
}

function ubahStatus(id) {
  const tugas = tugasTugas.find((t) => t.id === id);
  tugas.selesai = !tugas.selesai; // balik: true <-> false
  simpanData();
  tampilkan();
}

function hapusTugas(id) {
  tugasTugas = tugasTugas.filter((t) => t.id !== id);
  simpanData();
  tampilkan();
}

// --- 5. EVENT: jalankan aksi saat pengguna menekan tombol "Tambah" ---
form.addEventListener('submit', (event) => {
  event.preventDefault(); // cegah halaman reload (perilaku bawaan form)
  const teks = input.value.trim();
  if (teks === '') return;
  tambahTugas(teks);
  input.value = '';
  input.focus();
});

// Tampilkan daftar pertama kali saat halaman dibuka
tampilkan();
