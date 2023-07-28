
import { Metadata } from 'next'
import './globals.css'

export const metadata:Metadata = {
    title:"Upgard Resume"
}
export default function RootLayout({children}:{children:React.ReactNode}){
    
    return <html lang="en" >
        <body className='antialiased bg-gray-600 transition '>
            {children}
        </body>
    </html>
}