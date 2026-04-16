const penjelasanKomponen = {
  resistor: `
    <h2>Resistor</h2>
    <p>Resistor adalah komponen pasif yang berfungsi membatasi arus listrik di dalam rangkaian.</p>
    <p>Pada visualisasi ini, arus ditampilkan sebagai partikel bergerak yang melewati resistor dari sisi kiri ke kanan.</p>
    <p>Ketika arus melewati resistor, muncul efek hambatan dan panas kecil untuk menggambarkan disipasi energi pada resistor.</p>
    <p>Warna gelang pada resistor menunjukkan nilai resistansi dalam satuan Ohm (Ω).</p>
  `,
  kapasitor: `
    <h2>Kapasitor</h2>
    <p>Kapasitor adalah komponen yang digunakan untuk menyimpan muatan listrik sementara dalam medan listrik.</p>
    <p>Nilai kapasitansinya diukur dalam satuan Farad (F).</p>
    <p>Contoh: Kapasitor elektrolit dan kapasitor keramik.</p>
  `,
  dioda: `
    <h2>Dioda</h2>
    <p>Dioda adalah komponen yang hanya mengalirkan arus listrik dalam satu arah saja.</p>
    <p>Biasanya digunakan sebagai penyearah arus (rectifier).</p>
    <p>Contoh dioda yang ditampilkan adalah diode LED.</p>
  `,
  transistor: `
    <h2>Transistor</h2>
    <p>Transistor adalah komponen aktif yang berfungsi sebagai penguat, saklar, atau pemutus arus listrik.</p>
    <p>Terdiri dari tiga kaki: basis, kolektor, dan emitor.</p>
    <p>Contoh: Transistor NPN (BC547), PNP (BC558).</p>
  `,
  flipflop: `
  <h2>Rangkaian Flip-Flop</h2>
  <p>Rangkaian ini adalah jenis multivibrator bistabil yang terdiri dari dua transistor, dua kapasitor, dan empat resistor.</p>
  <p>Ketika diaktifkan, rangkaian akan membuat LED berkedip secara bergantian seperti efek "flip-flop".</p>
  <p>Biasanya digunakan dalam aplikasi lampu kelap-kelip, timer, dan sirkuit logika sederhana.</p>
  <img src="flip flop.gif" alt="Skema Flip Flop" style="width: 100%; margin-top: 10px; border-radius: 8px;">
`,
};
