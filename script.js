// Fungsi untuk menyembunyikan atau menampilkan jawaban
function toggleAnswer() {
    const answer = document.getElementById("answer");
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

// Fungsi untuk menyoroti pilihan jawaban yang benar
function highlightCorrectAnswer(selectedElement) {
    const listItems = document.querySelectorAll(".alpha-list li");
    
    // Reset semua pilihan agar tidak disorot
    listItems.forEach((item) => {
        item.style.backgroundColor = "";
        item.style.color = "";
    });
    
    // Sorot pilihan yang benar
    selectedElement.style.backgroundColor = "#d4edda"; // Warna hijau muda
    selectedElement.style.color = "#155724"; // Warna teks hijau tua
}

function highlightnotCorrectAnswer(selectedElement) {
    const listItems = document.querySelectorAll(".alpha-list li");
    
    // Reset semua pilihan agar tidak disorot
    listItems.forEach((item) => {
        item.style.backgroundColor = "";
        item.style.color = "";
    });
    
    // Sorot pilihan yang salah
    selectedElement.style.backgroundColor = "pink"; // warna pink
    selectedElement.style.color = "red";// warna merah
}
