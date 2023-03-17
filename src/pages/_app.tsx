import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Make sure autoAddCss is set to false to prevent FontAwesome from automatically adding CSS
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
