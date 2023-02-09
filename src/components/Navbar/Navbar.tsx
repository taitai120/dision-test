import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="nav border-2 border-red-400">
                    <div className="container border-2 border-blue-400 mx-auto py-8">
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
                        <div className="menu">menu</div>
                    </div>
                </div>
            </nav>
        </>
    );
}
