import React from 'react'
import PaymentLeft from '../components/MyComp/PaymentLeft'
import PaymentRight from '../components/MyComp/PaymentRight'
import styled from 'styled-components'
const Wrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    margin-top: 48px;
`

const Payment = () => {
    return (
        <Wrapper>
            <PaymentLeft/>
            <PaymentRight/>
        </Wrapper>
    )
}

export default Payment
