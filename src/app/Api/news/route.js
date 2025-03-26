export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const disaster = searchParams.get("disaster");
    const place = searchParams.get("place");
  
    if (!disaster || !place) {
      return new Response(JSON.stringify({ error: "Missing parameters" }), { status: 400 });
    }//ata bad request if date & place are missing
  
    const formattedDisaster = encodeURIComponent(disaster);
    const formattedPlace = encodeURIComponent(place);
    const rssUrl = `https://news.google.com/rss/search?q=${formattedDisaster}+${formattedPlace}&hl=en-IN&gl=IN&ceid=IN:en`;
  
    try {
      const response = await fetch(rssUrl, { headers: { "User-Agent": "Mozilla/5.0" } });
      if (!response.ok) throw new Error(`Google RSS Error: ${response.status}`);
  
      const xmlText = await response.text();
  
      return new Response(JSON.stringify({ xml: xmlText }), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }