import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata: Metadata = {
	title: {
		template: '%s - E-commerce online store',
		default: 'E-commerce online store'
	},
	description: 'E-commerce online store, Your one stop shop for all your needs'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className='font-poppins antialiased'>
				<Header></Header>
				{children}
				<Footer></Footer>
			</body>
		</html>
	)
}
