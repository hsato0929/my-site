//HTML読み込み後にスクリプトを実行する
document.addEventListener("DOMContentLoaded", () => {
    //スクロールアニメーション
    const fadeElements = document.querySelectorAll(".fade-in");

    window.addEventListener("scroll", () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight - 100) {
                el.classList.add("show");
            }
        });
    });

    //ハンバーガーメニュー
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        toggle.classList.toggle("active");
    });

    //メニューを選択したらメニューを閉じる
    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", () => {
        toggle.classList.remove("active");
        document.querySelector(".nav").classList.remove("active");
        });
    });
});
