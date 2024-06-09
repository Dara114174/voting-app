const siswa = [
    "ADIT", "AJENG", "ANNISA AULIA PUTRI", "MUHAMMAD FAHREZA MUSLIM", "MULYANI",
    "NAJWUDIN", "NURAENI", "NURUL FAJRIYAH", "PAZRI ALI", "RASINTO",
    "REZA MAULANA", "Rijki", "RISKA ANUGRAH PUTRI", "RIZWAN", "ROHIMAH",
    "SYIFA ANDINI", "TANTRI AZAHRA RAMDAYASIH"
];

const aspekPenilaian = ["Perilaku/Sikap", "Kedisiplinan", "Tanggung Jawab"];

const tbody = document.querySelector('tbody');

siswa.forEach(nama => {
    const tr = document.createElement('tr');
    
    const tdNama = document.createElement('td');
    tdNama.textContent = nama;
    tr.appendChild(tdNama);

    aspekPenilaian.forEach(aspek => {
        const td = document.createElement('td');
        const select = document.createElement('select');
        ['Sangat Baik', 'Baik', 'Cukup', 'Kurang'].forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText;
            option.textContent = optionText;
            select.appendChild(option);
        });
        td.appendChild(select);
        tr.appendChild(td);
    });

    tbody.appendChild(tr);
});

function simpanData() {
    const data = [];

    document.querySelectorAll('tbody tr').forEach(tr => {
        const nama = tr.children[0].textContent;
        const perilaku = tr.children[1].querySelector('select').value;
        const kedisiplinan = tr.children[2].querySelector('select').value;
        const tanggungJawab = tr.children[3].querySelector('select').value;

        data.push({ nama, perilaku, kedisiplinan, tanggungJawab });
    });

    localStorage.setItem('penilaianSiswa', JSON.stringify(data));
    alert('Data berhasil disimpan!');
}
