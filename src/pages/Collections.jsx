import { Container } from '@mui/material';
import React from 'react';
import { CollectionListing } from '../components/CollectionListing';

const Collections = () => {
  return (
    <Container maxWidth="md">
      <div
        style={{
          marginTop: '50px',
          width: '100%'
        }}>
        <CollectionListing />
      </div>
    </Container>
  );
};

export default Collections;
