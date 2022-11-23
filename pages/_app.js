import '../styles/globals.css'
import { Amplify } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import Layout from '../src/components/Layout';


Amplify.configure({
  ...awsconfig, ssr: true
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
