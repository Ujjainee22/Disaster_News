export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const encodedStateh = searchParams.get("encodedStateh");


  if (!encodedStateh ) {
    return new Response(JSON.stringify({ error: "Missing name location" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${encodedStateh}&format=json&limit=1`;

  try {
    const response = await fetch(nominatimUrl, {
      headers: {
        "User-Agent": "disasterMap/1.0 (biswasmeghnaa@gmail.com)",
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          error: "Nominatim fetch failed",
          status: response.status,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
