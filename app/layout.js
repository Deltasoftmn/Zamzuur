import './globals.css'

export const metadata = {
  title: 'Dream Oasis - Restaurant & Lounge',
  description: 'Dream Oasis Restaurant & Lounge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  )
}
