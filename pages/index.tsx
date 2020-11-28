import React from 'react'
import Head from 'next/head'

import { Navbar } from '../components/navbar'

// some mocks for testing purposes
const navlinks = [{ name:'foo' , to: 'https://google.com.ar'}, {name: 'bar',  to: 'https://google.com'}];

function Home() {
  return (
    <div>
      <Head>
        <title>Real Estate Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar links={navlinks} />
      <main>
        <h1 className={"p-64"}>
          Welcome!
        </h1>
      </main>
    </div>
  )
}

export default Home;