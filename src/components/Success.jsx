import React from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'

const Container = styled.div`

`
const SuccessText = styled.div`

`

const Success = () => {
    const location = useLocation()
    
    console.log(location)
    return (
        <Container>
            <SuccessText>
                Successfull
            </SuccessText>
        </Container>
    )
}

export default Success
