import * as React from "react"
import Footer from './footer'
import './style.css'
import "@fontsource/open-sans"
import Main from "./main";


const IndexPage = () => {
  return (
    <main>
      <Main/>
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Carrot Quest</title>

