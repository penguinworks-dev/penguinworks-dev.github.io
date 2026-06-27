/* =====================================
   DriveNote Official Website
   script.js
===================================== */
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    let ticking = false;

    // ヘッダーの実際の高さを取得（隠す距離を自動計算）
    const headerHeight = header.offsetHeight;
    const hideOffset = `-${headerHeight + 20}px`;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;

                // iOSなどのバウンススクロール対策（最上部より上へのスクロール時は常に表示）
                if (currentScrollY <= 0) {
                    header.style.top = "0";
                    lastScrollY = currentScrollY;
                    ticking = false;
                    return;
                }

                // 下スクロール ＆ ヘッダーの高さ以上スクロールした場合に隠す
                if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
                    header.style.top = hideOffset;
                } 
                // 上スクロール時は表示する
                else if (currentScrollY < lastScrollY) {
                    header.style.top = "0";
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true; /* スクロール処理の過負荷を防ぐフラグ */
        }
    });
});