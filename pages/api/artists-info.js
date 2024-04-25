export default async function handler(req, res) {
    const { artistName } = req.query;
    try {
        const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=${encodeURIComponent(artistName)}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching artist info:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}