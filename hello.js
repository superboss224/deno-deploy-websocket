addEventListener("fetch", (event) => {
  const response = new Response("Hello Worldentent!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
