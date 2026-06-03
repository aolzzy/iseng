const penjelasanKomponen = {
    resistor: `
        <h2>Resistor Pasif</h2>
        <p>Resistor merupakan komponen elektronik pasif yang didesain khusus untuk membatasi, mengatur, dan menahan laju arus listrik dalam suatu sirkuit sistem sirkular.</p>
        <p><strong>Fungsi Utama:</strong> Menghindari kelebihan beban arus pada komponen sensitif seperti LED atau Transistor.</p>
        <p><strong>Sistem Kode Warna:</strong> Gelang warna pada badan fisik resistor menunjukkan nilai resistansi (Ohm / Ω) beserta tingkat toleransinya.</p>
    `,
    kapasitor: `
        <h2>Kapasitor / Kondensator</h2>
        <p>Kapasitor adalah elemen pasif elektrostatik yang mengumpulkan dan menyimpan muatan listrik sementara waktu di dalam medan listrik internalnya.</p>
        <p><strong>Fungsi Utama:</strong> Sebagai penyaring frekuensi (filter), perata arus AC ke DC, dan penyedia delay waktu muatan daya (charging/discharging) sirkuit multivibrator.</p>
        <p><strong>Satuan:</strong> Nilai kapasitas diukur dalam Farad (F), umumnya mikroFarad (µF) atau nanoFarad (nF).</p>
    `,
    dioda: `
        <h2>Dioda Semi-Konduktor (LED)</h2>
        <p>Dioda adalah komponen aktif dua kutub (Anoda dan Katoda) yang mengalirkan arus listrik hanya ke satu arah mutlak dan memblokir arus dari arah sebaliknya.</p>
        <p><strong>Light Emitting Diode (LED):</strong> Jenis dioda khusus yang mampu memancarkan cahaya emisi foton ketika dilewati arus bias maju (forward bias).</p>
    `,
    transistor: `
        <h2>Transistor Aktif NPN</h2>
        <p>Transistor merupakan pilar utama elektronika modern yang berfungsi sebagai penguat sinyal, regulator tegangan, dan saklar otomatis kecepatan tinggi.</p>
        <p><strong>Konfigurasi Kaki:</strong> Terdiri dari 3 terminal utama yaitu Basis (B) sebagai pengendali/gerbang, Kolektor (C) sebagai pintu masuk arus beban, dan Emitor (E) sebagai pintu keluar arus.</p>
    `,
    flipflop: `
        <h2>Sistem Rangkaian Flip-Flop</h2>
        <p>Rangkaian ini menerapkan sistem Multivibrator Bistabil interaktif yang memicu kondisi ON/OFF secara bergantian pada dua buah lampu LED.</p>
        <p><strong>Cara Kerja Mekanis:</strong> Ketika power aktif, kapasitor pertama akan melakukan pengisian daya (Charging). Setelah penuh, ia melepaskan muatan ke basis Transistor untuk mengaktifkannya menjadi saklar ON, menyalakan LED pertama, sementara sirkuit seberangnya bersiap melakukan pembalikan siklus (Delay Circuit Time).</p>
    `
};

// Auto render konten ke div ID yang dituju sesuai halaman aktif
document.addEventListener("DOMContentLoaded", function() {
    for (const [key, value] of Object.entries(penjelasanKomponen)) {
        const targetElement = document.getElementById(`penjelasan-${key}`);
        if (targetElement) {
            targetElement.innerHTML = value;
        }
    }
});
