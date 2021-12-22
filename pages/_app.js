import '../styles/global.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' //app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
