import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar';
import {HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP} from './HeroElements';
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>La mejor pizza!</HeroH1>
                    <HeroP>Lista en 60 segundos</HeroP>
                    <HeroBtn>Ordenar ahora</HeroBtn>
                </HeroItems>

            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
