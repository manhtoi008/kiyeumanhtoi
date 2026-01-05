document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("card");

    // Hiệu ứng xuất hiện
    card.style.opacity = "0";
    card.style.transform = "scale(0.9)";

    setTimeout(() => {
        card.style.transition = "all 0.8s ease";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
    }, 200);

    // Click hiện thông báo
    card.addEventListener("click", () => {
        alert("🎓 Hẹn gặp bạn tại buổi chụp kỷ yếu nhé 💚");
    });
});
