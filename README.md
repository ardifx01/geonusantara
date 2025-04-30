<p align="center">
    <a href="https://github.com/muhamdaily/geonusa" target="_blank">
        <img src="https://raw.githubusercontent.com/muhamdaily/assets/refs/heads/main/geonusa.png" width="400" alt="Thumbnail">
    </a>
</p>

<p align="center">
    API ini menyajikan data wilayah Indonesia yang mencakup provinsi, kabupaten, kecamatan, dan desa secara lengkap, terstruktur, dan terbaru. Data ini diambil dari sumber resmi pemerintah dan diperbarui secara berkala untuk memastikan akurasi dan keandalan informasi.
</p>

### 🚀 Fitur

- Menampilkan semua data provinsi.
- Menampilkan data provinsi berdasarkan ID.
- Menampilkan data kabupaten berdasarkan ID provinsi.
- Menampilkan data kecamatan berdasarkan ID kabupaten.
- Menampilkan data desa/kelurahan berdasarkan ID kecamatan.

### 🛠️ Tech Stack

| Teknologi         | Deskripsi |
|-------------------|-----------|
| `Node.js`         | Platform untuk menjalankan JavaScript di sisi server. |
| `Express.js`      | Framework web minimalis untuk membangun REST API. |
| `Vercel`          | Platform untuk deployment aplikasi Node.js secara instan. |

### 📦 Instalasi

```bash
# Clone repositori ini
git clone https://github.com/muhamdaily/geonusantara.git

# Masuk ke direktori proyek
cd geonusantara

# Instal dependensi
npm install

# Menjalankan server dalam mode pengembangan
npm run dev

# Atau jalankan dalam mode produksi
npm run start
```

## 📚 Dokumentasi API

API ini menyediakan berbagai endpoint untuk mengakses data wilayah Indonesia. Berikut adalah daftar endpoint yang tersedia.

### 🔁 Parameter Umum

| Parameter         | Contoh                             | Deskripsi |
|------------------|-------------------------------------|-----------|
| `:id`          | `11`                      | ID provinsi, kabupaten, kecamatan, atau desa. |

### 📌 Contoh Response

```json
{
    "status": true,
    "data": [
        {
            "id": "11",
            "provinsi": "ACEH"
        },
        {
            "id": "12",
            "provinsi": "SUMATERA UTARA"
        },
        {
            "id": "13",
            "provinsi": "SUMATERA BARAT"
        },
        {
            "id": "14",
            "provinsi": "RIAU"
        }
    ]
}
```

## 🌐 Endpoint & Route API

### 🔗 URL Dasar
```bash
https://geonusantara.vercel.app/api/v1/${endpoint}
```

### 📂 Daftar Endpoint

| Endpoint | Deskripsi | Contoh |
|----------|-----------|--------|
| `GET /provinsi` | Menampilkan semua data provinsi. | `/provinsi` |
| `GET /provinsi/:id` | Menampilkan data provinsi berdasarkan ID. | `/provinsi/35` |
| `GET /kabupaten/:id` | Menampilkan data kabupaten berdasarkan ID provinsi. | `/kabupaten/35` |
| `GET /kecamatan/:id` | Menampilkan data kecamatan berdasarkan ID kabupaten. | `/kecamatan/3508` |
| `GET /kelurahan/:id` | Menampilkan data desa/kelurahan berdasarkan ID kecamatan. | `/kelurahan/350807` |

## 🤝 Kontribusi

Ingin ikut mengembangkan **GeoNusantara**? Berikut langkah-langkahnya:

1. Fork repositori ini.
2. Buat branch baru:
   ```bash
   git checkout -b nama-cabang
   ```
3. Lakukan perubahan dan commit:
   ```bash
   git commit -m "Deskripsi perubahan"
   ```
4. Push ke repositori Anda:
   ```bash
   git push origin nama-cabang
   ```
5. Buat pull request melalui GitHub.

Lihat juga dokumentasi GitHub mengenai [cara membuat pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 👥 Kontributor

Terima kasih kepada semua yang telah berkontribusi:

- [@muhamdaily](https://github.com/muhamdaily) 📖

## 📬 Kontak

Jika ada pertanyaan, ide, atau saran, hubungi saya melalui email:  
📧 **muhammadmauribi@gmail.com**

## 📄 Lisensi

Proyek ini dilisensikan di bawah [Lisensi MIT](LICENSE) dan bersifat open-source.