import React from 'react'
import { connect } from 'react-redux'

const Results = (props) => {
  const shelters = props.shelters.map(shelter => {
    return shelter.$t
  })
  return(
    <section>
       { shelters }
    </section>
  )
}

export const mapStateToProps = (state) => ({
  shelters: state.shelters
})

export default connect(mapStateToProps)(Results)