/**
 * Add The service worker.
 */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('/sw.js', {scope: '/'})
  .then((reg) => {
    // Registration was successful :)
    if(reg.installing) {
        console.log('Service worker installing');
      } else if(reg.waiting) {
        console.log('Service worker installed');
      } else if(reg.active) {
        console.log('Service worker active');
      }
    console.log('ServiceWorker registration successful with scope: ' + reg.scope);
  })
  .catch((err) => {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  }); 
}