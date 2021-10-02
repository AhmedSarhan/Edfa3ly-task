import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppContextProvider } from '../context/AppContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppContextProvider>
			<Component {...pageProps} />
		</AppContextProvider>
	);
}
export default MyApp;
