import Document, { Html, NextScript, Main, Head } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true.toString()} />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
                </Head>
                <Main />
                <NextScript />
            </Html>
        );
    };
};

export default MyDocument;