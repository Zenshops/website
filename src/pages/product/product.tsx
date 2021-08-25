import Head from 'next/head'
import DefaultLayout from '~/components/Layout/Default';

const Product = () => {
	return (
		<>
			<Head>
				<title>Product - Zenshops</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<DefaultLayout>
				<div className="max-h-full">
					Product
				</div>
			</DefaultLayout>
		</>
	)
};

export default Product;
