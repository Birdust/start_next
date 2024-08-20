import './globals.css'
export const metadata = {
  title: 'WEB tutorial',
  description: 'Generated by egoing',
}
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
        </ol>
        {children}
        <ul>
          <li><a href="/create">create</a></li>  
          <li><a href="/update/id">update</a></li>
          <li><button>delete</button></li>
        </ul>
      </body>
    </html>
  )
}