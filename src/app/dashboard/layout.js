import Sidebar from "../components/Sidebar"

export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <style>{inter.styles}</style>
            </head>
            <body className={`bg-[#5B0505] ${inter.className}`}>
                <Sidebar />
                {children}
            </body>
        </html>
    )
}