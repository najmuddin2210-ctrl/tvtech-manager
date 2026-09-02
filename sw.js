const C='seentv-v2-1';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./manifest.json','./icon.svg'])))});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim().then(()=>caches.keys()).then(a=>Promise.all(a.filter(x=>x!==C).map(x=>caches.delete(x)))));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(C).then(c=>c.put(e.request,x));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html')))));