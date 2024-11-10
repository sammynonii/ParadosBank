import React from 'react'
import HomeContent1 from './HomeContent1'
import HomeContent2 from './HomeContent2'
import HomeContent3 from './HomeContent3'
import HomeContent4 from './HomeContent4'
import FrequentlyAsked from './FrequentlyAsked'
import Testimonials from './Testimonials'
import FinancialJourney from './FinancialJourney'

function Home() {
    return (
        <div>
            <HomeContent1 />
            <HomeContent2 />
            <HomeContent3 />
            <HomeContent4 />
            <FrequentlyAsked />
            <Testimonials />
            <FinancialJourney />
        </div >

    )
}

export default Home
