// Logika Pembelajaran AR Elektronika Dasar
function launchAR() {
    const viewer = document.querySelector("model-viewer");
    if (viewer) {
        viewer.activateAR();
    }
}

// Pengaturan overlay & navbar responsif (Bugs fixed dari versi lawas)
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    
    if (menuToggle) {
        // Buat element overlay secara dinamis jika belum ada
        let overlay = document.querySelector(".overlay");
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.classList.add("overlay");
            document.body.appendChild(overlay);
        }

        // Tampilkan/sembunyikan overlay saat hamburger dicentang
        menuToggle.addEventListener("change", function () {
            if (this.checked) {
                overlay.style.display = "block";
            } else {
                overlay.style.display = "none";
            }
        });

        // Tutup menu jika area luar (overlay) diklik
        overlay.addEventListener("click", function () {
            menuToggle.checked = false;
            overlay.style.display = "none";
        });
    }
});
