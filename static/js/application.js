// Google Analytics 초기화
(function () {
    // 개발 환경에서는 실행하지 않음 (선택적)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('개발 환경에서는 로드되지 않습니다');
        return;
    }

    // Google Analytics 초기화
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-DL4SWDGV72');

    // Google Analytics 스크립트 로드
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-DL4SWDGV72';
    document.head.appendChild(script);
})();
