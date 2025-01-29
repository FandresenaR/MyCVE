// pages/index.js
import Head from 'next/head';
import CveSearch from '../components/CveSearch';

export default function Home() {
    return (
        <div>
            <Head>
                <title>CVE Search App</title>
                <meta name="description" content="Search for CVE vulnerabilities" />
            </Head>
            <main>
                <CveSearch />
            </main>
        </div>
    );
}
