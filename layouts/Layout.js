import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
const Layout = (props) => {
    const router = useRouter()
    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            // body: JSON.stringify({
            //     email,
            //     password
            // })
        });
        await router.push('/login')
    }
    let menu;
    if (!props.auth) {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link href="/login" legacyBehavior >
                        <a className="nav-link active"> Login </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/register" legacyBehavior >
                        <a className="nav-link active"> Register </a>
                    </Link>
                </li>
            </ul>
        )
    } else {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    {/* <Link href="/login" legacyBehavior > */}
                    <a className="nav-link active" href="#" onClick={logout}> Logout </a>
                    {/* </Link> */}
                </li>

            </ul>
        )
    }
    return (
        <div >
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
            </Head>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <Link href="/" legacyBehavior>
                        <a className="navbar-brand">Home</a>
                    </Link>
                    {/* <a className="navbar-brand" >Home</a> */}
                    <div>
                        {menu}
                    </div>

                </div>
            </nav>
            <main className="form-signin w-100 m-auto">
                {props.children}
            </main>

        </div>
    )
}
export default Layout;