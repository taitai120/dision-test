import "@/styles/globals.css";
import Layout from "@/components/Layout/layout";

function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
