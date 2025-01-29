// pages/index.js
import Head from 'next/head';
import CveSearch from '../components/CveSearch';

export default function Home() {
    return (
        <div>
            <Head>
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />
              <title>CVE Search App</title>
              <meta name="description" content="Search for CVE vulnerabilities" />
            </Head>
            <main>
                <CveSearch />
            </main>
        </div>
    );
}
