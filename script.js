function darkMode() {
    document.body.classList.toggle("dark");

    let btn = document.querySelector(".dark-btn");

    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "☀️ Light Mode";
    } else {
        btn.innerHTML = "🌙 Dark Mode";
    }
}

function tampilkan() {
    let teks = document.getElementById("tambahan");

    if (teks.style.display === "none") {
        teks.style.display = "block";
    } else {
        teks.style.display = "none";
    }
}

function validasiForm() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;

    if (nama === "" || email === "") {
        alert("Nama dan Email wajib diisi!");
        return false;
    }

    alert("Pesan berhasil dikirim!");
    return true;
}