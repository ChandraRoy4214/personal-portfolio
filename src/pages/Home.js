import React from 'react'

import { Hero, FeaturedProjects, About, Certificates
} from "../components"

const Home = () => {
    document.title = "Chandra Roy  |  Home"
    return (
        <main>
            <Hero/>
            <About/>
            <Certificates/>
            <FeaturedProjects/>
        </main>
    )
}



export default Home
