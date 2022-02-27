import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            {/* <footer>2022 Kareem</footer> */}
        </>
    );
}

export default MyApp;
