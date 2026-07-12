const CACHE='oio-telegrafo-v9';
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./icon-192.png','./icon-512.png'])).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.url.includes('supabase'))return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});

