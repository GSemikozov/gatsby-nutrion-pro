import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../components/button';
import { Container } from '../components/container';
import { LocalizedLink } from '../components/localized-link';
import { useLangContext } from '../utils/lang';

// import { Link } from 'gatsby';
const ThankYou = () => {
  const { lang } = useLangContext()
  const { t } = useTranslation()

  return (
    <>
      <Container className="text-center">
        <h1 className="text-center" style={{ marginTop: "100px" }}>
          {t("forms.TY.titlePart1")}
          <br />
          <span style={{ color: `var(--color-green)` }}>
            {" "}
            {t("forms.TY.titlePart2")}
          </span>
        </h1>
        <Button type="primary">
          <LocalizedLink to="/"> {t("forms.TY.linkBack")}</LocalizedLink>
        </Button>
      </Container>
    </>
  )
}

export default ThankYou
