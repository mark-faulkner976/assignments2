import React from 'react'
import Header from './components/Header'
import Places from './components/Places'
import data from './data'


export default function App() {
    console.log(data)
    const places = data.map(place => {
        return (
            <Places 
                key={place.googleMapsUrl}
                title={place.title}
                location={place.location}
                startDate={place.startDate}
                endDate={place.endDate}
                description={place.description}
                img={place.imageUrl}
                google={place.googleMapsUrl}
            />
        )
    })
    return (
        <div>
            <Header />
            <section>
                {places}
            </section>
        </div>
    )
}