import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav className="p-4">
                <ul className="container flex gap-8">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/fetch">Fetch</Link>
                    </li>
                    <li>
                        <Link href="/motion">Motion</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}