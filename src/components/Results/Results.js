import React from 'react'

const Results = (shelters) => {
  const shelter = shelters.petfinder.shelters.shelter.map(shelter => (shelter.name))

  return(
    <section>
      {shelter}
    </section>
  )
}

export default Results;