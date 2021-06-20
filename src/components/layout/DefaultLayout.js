import React from 'react'
import { Header } from './defaultLayout/Header';
import { Footer } from './defaultLayout/Footer';



const DefaultLayout = ({ children }) => {
    return (
        <div className="default-layout">
            <header className="header">
                <Header />
            </header>
            <main className="main">
                {children}
            </main>
            <footer className="footer">
                <Footer />
            </footer>

        </div>
    )
}

export default DefaultLayout
