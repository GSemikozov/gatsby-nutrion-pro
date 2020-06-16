import React from 'react';

import { Button } from '../components/button';
import { Container } from '../components/container';

// import { Link } from 'gatsby';
const ThankYouDT = () => (
  <>
    <Container className="text-center">
      <h1 className="text-center" style={{ marginTop: "100px" }}>
        Vaše žádost byla
        <br />
        <span style={{ color: `var(--color-green)` }}>úspěšně přijata</span>
      </h1>
      <Button type="primary">
        <a href="/">Zpět na hlavní stránku</a>
      </Button>
    </Container>
  </>
)

export default ThankYouDT
