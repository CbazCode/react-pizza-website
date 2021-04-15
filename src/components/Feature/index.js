import React from 'react'
import { FeatureButton, FeatureContainer } from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza del día</h1>
            <p>Salsa a lo alfredo</p>
            <FeatureButton>Ordena Ahora</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
