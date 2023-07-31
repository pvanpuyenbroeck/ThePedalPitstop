import { useState } from 'react';
import React from 'react';
import styled from 'styled-components'
import {Menu} from 'react-feather';


export default function HamburgerNav() {

    const [active,setActive] = useState(false); 
  return (
    <Menu>HamburgerNav</Menu>
  )
}


