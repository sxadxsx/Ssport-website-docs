export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-tw">
      <body>{children}</body>
    </html>
  )
}
