// src/data/iptekData.js

export const iptekData = [
    // Gen 1 (RI 1.0): Era Mekanis
    {
      id: 101,
      name: 'Mesin Uap Efisien',
      era: 'Revolusi Industri 1.0',
      generation: 1, 
      description: 'Peningkatan besar pada desain Mesin Uap James Watt memungkinkan aplikasi yang lebih luas, seperti pada kereta api dan kapal, menggantikan tenaga air dan manusia.',
      evolution: ['Pompa Uap Newcomen', 'Mesin Watt', 'Lokomotif Uap'],
      effects: [
        { type: 'Transportasi', effect: 'Menciptakan jaringan kereta api dan pelayaran yang cepat.' },
        { type: 'Sosial', effect: 'Urbanisasi massal, penarikan pekerja ke pusat-pusat manufaktur.' },
      ],
    },
    // Gen 2 (RI 2.0): Era Elektrik/Produksi Massal
    {
      id: 201,
      name: 'Listrik (Sistem AC)',
      era: 'Revolusi Industri 2.0',
      generation: 2, 
      description: 'Sistem arus bolak-balik (AC) memungkinkan transmisi daya listrik jarak jauh, mendukung penerangan kota dan motor pabrik.',
      evolution: ['Generator DC', 'Transformator', 'Jaringan Listrik Nasional'],
      effects: [
        { type: 'Produksi', effect: 'Memungkinkan pabrik beroperasi 24 jam sehari melalui jalur perakitan.' },
        { type: 'Sosial', effect: 'Pencahayaan listrik meningkatkan keamanan dan kenyamanan rumah tangga.' },
      ],
    },
    // Gen 3 (RI 3.0): Era Digital/Komputasi
    {
      id: 301,
      name: 'Mikroprosesor',
      era: 'Revolusi Industri 3.0',
      generation: 3, 
      description: 'Penemuan sirkuit terpadu dan mikroprosesor yang memungkinkan komputer menjadi kecil, murah, dan kuat. Contoh awalnya adalah Intel 4004.',
      evolution: ['Tabung Vakum', 'Transistor', 'Sirkuit Terpadu (IC)'],
      effects: [
        { type: 'Teknologi', effect: 'Menjadi otak dari semua perangkat digital, dari PC hingga smartphone.' },
        { type: 'Otomatisasi', effect: 'Memungkinkan robotika canggih dan kontrol numerik komputer (CNC) di pabrik.' },
      ],
    },
    // Gen 4 (RI 4.0): Era Siber-Fisik/Konektivitas
    {
      id: 401,
      name: 'Sistem Siber-Fisik (IoT & AI)',
      era: 'Revolusi Industri 4.0',
      generation: 4, 
      description: 'Penggabungan dunia fisik dan digital melalui sensor, kecerdasan buatan, dan jaringan (Internet of Things), menciptakan "pabrik pintar".',
      evolution: ['Sistem Kontrol Jaringan', 'Cloud Computing', 'Kembar Digital (Digital Twins)'],
      effects: [
        { type: 'Ekonomi', effect: 'Menciptakan model bisnis layanan berdasarkan data (as-a-service).' },
        { type: 'Manufaktur', effect: 'Meningkatkan fleksibilitas dan personalisasi dalam produksi (customization).' },
      ],
    },
];

// PENTING: Export generations untuk Generations.jsx
export const generations = [ 
  { id: 1, name: 'Gen 1 (RI 1.0)', era: 'Revolusi Industri 1.0' },
  { id: 2, name: 'Gen 2 (RI 2.0)', era: 'Revolusi Industri 2.0' },
  { id: 3, name: 'Gen 3 (RI 3.0)', era: 'Revolusi Industri 3.0' },
  { id: 4, name: 'Gen 4 (RI 4.0)', era: 'Revolusi Industri 4.0' },
];