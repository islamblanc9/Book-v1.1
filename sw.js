self.addEventListener('install', (e) => {
    console.log('[Service Worker] تم التثبيت');
});
self.addEventListener('fetch', (e) => {
    // خليه فارغ، دورو فقط تفعيل ميزة التثبيت
});
