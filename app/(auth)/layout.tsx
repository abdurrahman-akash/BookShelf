import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <main className="auth-container">
        <section className="auth-form">
            <div className="auth-box">
                <div className="flex flex-row gap-3">
                    <Image src="/icons/logo.svg" alt="Logo" width={37} height={37} />
                    <h1 className="text-2xl font-semibold text-white">BookShelf</h1>
                </div>

                <div>{children}</div>
            </div>
        </section>
        </main>
}