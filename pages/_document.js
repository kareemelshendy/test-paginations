import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head></Head>
                <Main />
                <NextScript />
            </Html>
        );
    }
}

export default MyDocument;
