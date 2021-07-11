addEventListener("fetch", (event) => {
  const response = new Response("Hello Worldententg!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
