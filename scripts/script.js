function hitungBMI() {
    const berat = parseFloat(document.getElementById("beratBadan").value);
    const tinggi = parseFloat(document.getElementById("tinggiBadan").value) / 100; // Ubah tinggi ke meter
    const gender = document.getElementById("gender").value;

    if (berat > 0 && tinggi > 0) {
        const bmi = berat / (tinggi * tinggi);
        document.getElementById("hasilBMI").innerText = bmi.toFixed(1);

        let kategori;
        if (bmi < 18.5) {
            kategori = "KEKURANGAN";
        } else if (bmi >= 18.5 && bmi <= 25) {
            kategori = "NORMAL";
        } else if (bmi > 25 && bmi <= 30) {
            kategori = "KELEBIHAN";
        } else {
            kategori = "OBESITAS";
        }
        document.getElementById("kategori").innerText = kategori;
    } else {
        document.getElementById("hasilBMI").innerText = "0";
        document.getElementById("kategori").innerText = "N/A";
        alert("Masukkan berat dan tinggi badan yang valid.");
    }
}

function resetForm() {
    document.getElementById("gender").value = "male";
    document.getElementById("beratBadan").value = "0";
    document.getElementById("tinggiBadan").value = "0";
    document.getElementById("hasilBMI").innerText = "0";
    document.getElementById("kategori").innerText = "N/A";
}
