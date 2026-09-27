# yudha-mega-p
aplikasi

## 📝 Belajar Membuat Aplikasi: Daftar Tugas (To-Do List)

Aplikasi web sederhana untuk belajar dasar pemrograman. Tidak perlu install apa pun, cukup pakai browser.

### Cara menjalankan
1. Download / clone repo ini.
2. Klik dua kali file `index.html`, nanti file itu terbuka di browser (Chrome, Firefox, dll).
3. Selesai! Coba tambah, centang, dan hapus tugas.

### Tiga bahan utama aplikasi web

| File | Peran | Analogi rumah |
|------|-------|---------------|
| `index.html` | **Struktur**: apa saja yang ada di layar | Tembok & ruangan |
| `style.css` | **Tampilan**: warna, ukuran, jarak | Cat & dekorasi |
| `app.js` | **Logika**: apa yang terjadi saat diklik | Listrik & air |

Buka ketiga file itu. Setiap bagian sudah diberi komentar berbahasa Indonesia.

### Alur kerja aplikasi (inti dari hampir semua aplikasi)

```
Pengguna klik / ketik  →  EVENT
        ↓
Fungsi AKSI mengubah   →  DATA (array tugasTugas)
        ↓
Data disimpan          →  localStorage (tidak hilang saat refresh)
        ↓
Fungsi tampilkan()     →  LAYAR diperbarui
```

Kalau kamu paham pola **Event → Data → Tampilan** ini, kamu sudah paham dasar
cara kerja aplikasi, termasuk aplikasi besar seperti Instagram atau Tokopedia.

### 🏋️ Latihan (coba sendiri, dari yang mudah ke yang sulit)
1. **Ganti warna** tombol di `style.css` (cari `#2f6fed`).
2. **Ganti judul** aplikasi di `index.html`.
3. **Tambah tombol "Hapus semua yang selesai"**.
   Petunjuk: pakai `tugasTugas.filter(t => !t.selesai)`.
4. **Tambah filter**: tombol "Semua / Aktif / Selesai".
5. **Tambah tanggal** pada setiap tugas (petunjuk: `new Date().toLocaleDateString('id-ID')`).

### Langkah belajar berikutnya
- HTML & CSS dasar: https://developer.mozilla.org/id/docs/Learn
- JavaScript dasar: https://javascript.info
- Setelah itu: coba framework seperti React, atau buat aplikasi HP dengan Flutter.
