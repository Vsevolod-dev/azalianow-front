import styles from '@/components/Header/Header.module.scss'
import Link from "next/link"

export default function Header() {
    return <header className={styles.header}>
        <Link href="/">Main</Link>
        <Link href="/numbers">Numbers</Link>
        <Link href="/messages">Messages</Link>
    </header>
}
