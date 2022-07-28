import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ScoreGrid from '../components/ScoreGrid'
import SignupForm from '../components/Form/SignupForm'

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>🥏 Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SignupForm />
      </main>

    </div>
  )
}

export default Login
