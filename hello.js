addEventListener("fetch", (event) => {
  const response = new Response("Hello Worldent!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
