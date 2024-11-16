self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    // Voeg cache functionaliteit toe als je wil
});

self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
    // Voeg cache handling hier toe voor offline ondersteuning
});
