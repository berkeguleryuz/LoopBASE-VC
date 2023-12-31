"use client"
import React from 'react'
import Link from 'next/link';
import {FaFulcrum} from 'react-icons/fa'

import styles from './styles.module.css'

function Header() {
    return (
    <header className={`${styles.header} container fluid`}>
        <div className={styles.headerWrapper}>
            <Link href="/" className={styles.logo}>
                <FaFulcrum /> LoopBASE
            </Link>
            <nav className = {styles.navigationMenu}>
                <Link href="/">Movies</Link>
                <Link href="/">Series</Link>
                <Link href="/">Kids</Link>
            </nav>
        </div>
    </header>
    );
}

export default Header;
