import { Link } from 'gatsby';
import React from 'react';

import { Button } from '../components/button';
import { Container } from '../components/container';
import { Layout } from '../components/layout';

const ThankYou = () => (
  <Layout>
    <Container className="text-center">
      <h1 className="text-center" style={{ marginTop: "100px" }}>
        Vaše žádost byla
        <br />
        <span style={{ color: `var(--color-green)` }}>úspěšně přijata</span>
      </h1>
      <Button type="primary">
        <Link to="/">Zpět na hlavní stránku</Link>
      </Button>
    </Container>
  </Layout>
)

export default ThankYou
