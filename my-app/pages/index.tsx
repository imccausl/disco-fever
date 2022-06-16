import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ScoreGrid from '../components/ScoreGrid'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Disco Fever 🥏 🤒 🥳 </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ScoreGrid />
      </main>

    </div>
  )
}

export default Home
