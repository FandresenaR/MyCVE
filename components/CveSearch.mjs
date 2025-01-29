"use client"
// components/CveSearch.js
import { useState } from 'react';
import axios from 'axios';

const CveSearch = () => {
    const [cveId, setCveId] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            // Replace 'YOUR_API_KEY' with your actual Vulners API key
            const response = await axios.post('https://vulners.com/api/v3/search/lucene/', {
                query: cveId,
                apiKey: 'YOUR_API_KEY' // Include your API key here
            });
            setResult(response.data);
            setError(null); // Clear previous errors
        } catch (error) {
            console.error('Error fetching CVE data:', error);
            setError('Failed to fetch data. Please check your input or try again later.');
            setResult(null); // Clear previous results
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Enter CVE ID"
                value={cveId}
                onChange={(e) => setCveId(e.target.value)}
                className="cve-input"
            />
            <button onClick={handleSearch} className="search-button">Search</button>
            {error && <div className="error">{error}</div>}
            {result && <div className="result">{JSON.stringify(result)}</div>}
        </div>
    );
};

export default CveSearch;
