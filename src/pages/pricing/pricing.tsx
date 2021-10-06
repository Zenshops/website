import Head from 'next/head'
import DefaultLayout from '~/components/Layout/Default';

const Pricing: React.FC = () => {
	return (
		<>
			<Head>
				<title>About - Zenshops</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<DefaultLayout>
				Pricing
			</DefaultLayout>
		</>
	)
};

export default Pricing;
