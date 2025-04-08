import { parseStringPromise } from 'xml2js'; /*func to xml-js from nodejs lib xml2js */

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    
    try {
        const xmlData = req.body.xml;
        
        if (!xmlData) {
            return res.status(400).json({ error: 'XML data is required' });
        }
        
        // Convert XML to JSON
        const jsonData = await parseStringPromise(xmlData, { explicitArray: false });
        /* Converts XML into a JavaScript object.The { explicitArray: false } option ensures that 
        single elements are returned as values instead of arrays.*/
        
        return res.status(200).json(jsonData); // shob ok hole
    } catch (error) {
        return res.status(500).json({ error: 'Error parsing XML', details: error.message });
    }
}
