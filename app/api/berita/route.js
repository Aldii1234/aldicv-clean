// app/api/berita/route.js
export async function GET() {
    const apiKey = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=id&pageSize=5&apiKey=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (!response.ok) {
        return Response.json({ error: data.message }, { status: response.status });
      }
  
      // Ambil hanya data yang dibutuhkan (judul + url)
      const berita = data.articles.map((item) => ({
        title: item.title,
        link: item.url,
      }));
  
      return Response.json(berita);
    } catch (error) {
      return Response.json({ error: "Gagal fetch berita." }, { status: 500 });
    }
  }
  