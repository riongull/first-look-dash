"use client"

import styles from "./page.module.css";
import { useEffect, useState } from 'react'

export default function Home() {
  const [blockchainData, setBlockchainData] = useState(null)
  useEffect(() => {
    fetch(`http://localhost:3001/name/${process.env.NEXT_PUBLIC_LABEL}`)
      .then(response => response.json())
      .then(data => setBlockchainData(data))
  }, [])
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Next.js Dash Example</h1>
      <div>
        <h2>Identity:</h2>
        <code>
          {JSON.stringify(blockchainData, null, 2)}
        </code> 
      </div>
    </main>
  )
}