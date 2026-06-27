/* =====================================
   DriveNote Official Website
   script.js (修正版：transform切り替え方式)
===================================== */
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;

                // 画面最上部（10pxの青い余白部分）にいる時は必ず表示
                if (currentScrollY <= 10) {
                    header.classList.remove('header-hidden');
                }
                // 下にスクロール ＆ ヘッダーの高さ以上スクロールした場合に隠す
                else if (currentScrollY > lastScrollY && currentScrollY > header.offsetHeight) {
                    header.classList.add('header-hidden');
                } 
                // 上にスクロールした時は表示する
                else if (currentScrollY < lastScrollY) {
                    header.classList.remove('header-hidden');
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true; // スクロール処理の過負荷を防ぐ
        }
    });
});