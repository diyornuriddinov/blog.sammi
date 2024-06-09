import { IChildProps } from '@/types'
import './globals.css'
import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import { ThemeProvider } from '@/providers/theme-provider'

const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
})

const workSans = Work_Sans({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-workSans',
})

export const metadata: Metadata = {
	title: 'Sammi dasturlashga oid maqolalar',
	description:
		"Dasturlash haqida yangiliklari, maslahatlar, va dasturlash sohasidagi eng so'nggi xabarlar. Bizning blogda dasturlashni o'rganish va rivojlantirish uchun qo'llanma topishingiz mumkin.",
}

function RootLayout({ children }: IChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
				suppressHydrationWarning
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
export default RootLayout
