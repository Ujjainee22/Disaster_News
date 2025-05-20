// to fetch the google rss
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const disaster = searchParams.get("disaster");
  const place = searchParams.get("place");
  const dtb4 = searchParams.get("before");
  const dtaft = searchParams.get("after");
  console.log("parameters received in route.js:",disaster, place,dtb4,dtaft);
  if (!disaster || !place) {
    return new Response(JSON.stringify({ error: "Missing parameters" }), { status: 400 });
  }

  // Build the full search query string first
  let query = `${disaster} ${place}`;
  if (dtaft) {
    query += ` after:${dtaft}`;
  }
  if (dtb4) {
    query += ` before:${dtb4}`;
  }

  // Encode the full query and replace %20 with +
  const encodedQuery = encodeURIComponent(query).replace(/%20/g, '+');

  const rssUrl = `https://news.google.com/rss/search?q=${encodedQuery}&hl=en-IN&gl=IN&ceid=IN:en`;

  try {
    const response = await fetch(rssUrl, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    if (!response.ok) throw new Error(`Google RSS Error: ${response.status}`);

    const xmlText = await response.text();

    return new Response(JSON.stringify({ xml: xmlText }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}