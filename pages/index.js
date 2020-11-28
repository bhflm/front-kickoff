import React from 'react'
import Head from 'next/head'

function Home() {
  return (
    <div>
      <Head>
        <title>Front Kickoff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={"p-64"}>
          Welcome to your new site!
        </h1>
      </main>
    </div>
  )
}

export default Home;