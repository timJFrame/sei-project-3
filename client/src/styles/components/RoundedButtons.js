import React from 'react'
import styled from 'styled-components'

import { RiCheckLine, RiCloseLine } from 'react-icons/ri'

const Button = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 30px;
  background: ${props => props.color || 'rgb(8, 99, 8)'};
  
`


function RoundedButtons({ type = 'green' }) {
  return (

    <Button color={type}>
      {type === 'green' ? <RiCheckLine /> : <RiCloseLine />}

    </Button>

  )
}

export default RoundedButtons
