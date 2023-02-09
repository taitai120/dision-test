import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="nav">
                    <div
                        className={`container flex justify-between items-center mx-auto py-2 ${styles.navContainer}`}
                    >
                        <div className={styles.logo}>
                            <Link href="/">
                                <Image
                                    src="/images/logo-bl.svg"
                                    width={100}
                                    height={100}
                                    alt="logo"
                                    className="border-2 border-red-400"
                                />
                            </Link>
                        </div>
                        <div className={styles.menu}>
                            <ul className="flex justify-between items-center gap-x-10">
                                <li>
                                    <Link href="/" className="text-white">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-white">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-white">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-white">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
