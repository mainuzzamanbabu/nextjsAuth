import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
// import styles from '../styles/Home.module.css'
import Layout from '../layouts/Layout'

export default function Home() {
  const [message, setMessage] = useState('')
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    (
      async () => {
        try {
          const response = await fetch('http://localhost:8000/api/user', {
            credentials: 'include',
          });
          const content = await response.json();
          setMessage(`Hi, ${content.name}`);
          setAuth(true)
          console.log(response)
        }
        catch (e) {
          setMessage("You are not logged in")
          setAuth(false)
        }
      }
    )();

  });
  return (
    <Layout auth={auth}>
      <div>
        <h1>{message}</h1>

        <p>This is Your Dashboard</p>
      </div>
    </Layout>
  )
}
