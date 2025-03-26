import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  padding: 0.75rem 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 0.75rem 2rem;
  }
`;