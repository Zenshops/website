import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import '../styles/index.css';

function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider storageKey="preferred-theme" attribute="class">
        <DefaultSeo
          defaultTitle="Your Online Shop In Less Than 60 Seconds - Zenshops"
          titleTemplate="%s | Zenshops"
          description="Welcome to Zenshops!"
        />
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default App;