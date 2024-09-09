//console.log("hello from wasm/sw.js");

 self.addEventListener('install', (event) => {
      console.log('Service Worker installing.');
      // Perform install steps if needed
    });

    self.addEventListener('activate', (event) => {
      console.log('Service Worker activating.');
      // Perform activate steps if needed
    });

    self.addEventListener('fetch', (event) => {
      console.log('Fetch intercepted for:', event.request.url);

      var  url = new URL(event.request.url);
      if( url.search === '')
      {

         // Optionally respond with something, or let the request pass through
        event.respondWith(
          fetch(event.request).then(response => {
            // You can clone the response and do additional processing here if needed
            return response;
          }).catch(error => {
            console.error('Fetch failed:', error);
            throw error;
          })
        );
      }
      else
      {
	event.respondWith(new Response("You are served Sir or Madam from a service worker :)"));

      }
    });
