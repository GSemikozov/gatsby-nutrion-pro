import cx from 'classnames';
import React from 'react';

import { Breadcrumbs, BreadcrumbsItem } from '../../components/breadcrumbs';
import { Button2 } from '../../components/button2';
import { Container } from '../../components/container';
import { OrderConsultationForm } from '../../components/forms/order-consultation-form';
import { useModal } from '../../components/modal';
import SEO from '../../components/seo';
import dishIcon from './dish-icon.svg';
import styles from './menu.module.css';

const ModalForm = () => (
  <>
    <h3 className={cx("text-center", styles.heroModalTitle)}>Mám zájem</h3>
    <OrderConsultationForm />
  </>
)

const MenuPage = () => {
  const { show, RenderModal } = useModal()

  return (
    <>
      <SEO title="Vzorové menu" />
      <Container isWide={true}>
        <Breadcrumbs style={{ margin: "24px 0" }}>
          <BreadcrumbsItem link="/">Domu</BreadcrumbsItem>
          <BreadcrumbsItem link="/ukazka-menu">Vzorové menu</BreadcrumbsItem>
        </Breadcrumbs>
      </Container>
      <Container isWide="true">
        <h3
          class={cx(
            "fancyUnderlineText sectionTitleNew text-center",
            styles.title
          )}
        >
          Vzorové <span>menu</span>
        </h3>
        <div className={styles.menuGrid}>
          <section>
            <table className={styles.menuTable}>
              <thead>
                <tr>
                  <th>Pondělí</th>
                  <th>
                    <span className={cx(styles.active, styles.orange)}></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Snídaně</td>
                  <td>Tvarohové lívanečky s ovocnou omáčkou</td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Ovocný salát s domácí arašídovou omáčkou</td>
                </tr>
                <tr>
                  <td>Oběd</td>
                  <td>
                    <div>Kuřecí frikasé s bramborovou kaší</div>
                  </td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>
                    Quesadilla se strouhaným sýrem cheddar, krůtí šunkou,
                    rajčaty a BBQ omáčkou
                  </td>
                </tr>
                <tr>
                  <td>Večeře</td>
                  <td>Hovězí maso provence a pečená zelenina po římsku</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <table className={styles.menuTable}>
              <thead>
                <tr>
                  <th>Úterý</th>
                  <th>
                    <span
                      className={cx(styles.active, styles.orangeBlur)}
                    ></span>
                    <span className={cx(styles.active, styles.green)}></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Snídaně</td>
                  <td>Krůtí šunka se sýrem, cottage a žitný chléb, zelenina</td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Ovocný salát s karobovým sirupem a kešu oříšky</td>
                </tr>
                <tr>
                  <td>Oběd</td>
                  <td>
                    <div>
                      Karbanátky z červené čočky, bramborovo-batátové puré
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Palačinky s lososem a sýrem</td>
                </tr>
                <tr>
                  <td>Večeře</td>
                  <td>
                    Kuřecí medajlonky s omáčkou ze sušených rajčat, ratatouille
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <table className={styles.menuTable}>
              <thead>
                <tr>
                  <th>Středa</th>
                  <th>
                    <span
                      className={cx(styles.active, styles.orangeBlur)}
                    ></span>
                    <span
                      className={cx(styles.active, styles.greenBlur)}
                    ></span>
                    <span className={cx(styles.active, styles.orange)}></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Snídaně</td>
                  <td>Čokoládová granola s nizkotučným řeckým jogurtem</td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Cuketové bramboráčky se sýrem a mandlovou moukou</td>
                </tr>
                <tr>
                  <td>Oběd</td>
                  <td>
                    <div>Krůtí maso na mexický způsob s rýží</div>
                  </td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Řecké Tzatziky s pita chlebem</td>
                </tr>
                <tr>
                  <td>Večeře</td>
                  <td>Treska s omáčkou Aioli a gratinovaný květák se sýrem</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <table className={styles.menuTable}>
              <thead>
                <tr>
                  <th>Čtvrtek</th>
                  <th>
                    <span
                      className={cx(styles.active, styles.orangeBlur)}
                    ></span>
                    <span
                      className={cx(styles.active, styles.greenBlur)}
                    ></span>
                    <span
                      className={cx(styles.active, styles.orangeBlur)}
                    ></span>
                    <span className={cx(styles.active, styles.green)}></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Snídaně</td>
                  <td>
                    Ovesná kaše s kokosovým mlékem, borůvkami a tmavou čokoládou
                  </td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Ovesné banánové cookies s čokoládou</td>
                </tr>
                <tr>
                  <td>Oběd</td>
                  <td>
                    <div>
                      Hovězí kýta dušená s kořením a bylinkovými bramborami
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Snack Caprese</td>
                </tr>
                <tr>
                  <td>Večeře</td>
                  <td>
                    Kuřecí ragú s grilovanou zeleninou, a rajčatový bulgur
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <table className={styles.menuTable}>
              <thead>
                <tr>
                  <th>Pátek</th>
                  <th>
                    <span
                      className={cx(styles.active, styles.orangeBlur)}
                    ></span>
                    <span
                      className={cx(styles.active, styles.greenBlur)}
                    ></span>
                    <span
                      className={cx(styles.active, styles.orangeBlur)}
                    ></span>
                    <span
                      className={cx(styles.active, styles.greenBlur)}
                    ></span>
                    <span className={cx(styles.active, styles.orange)}></span>
                    <span></span>
                    <span></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Snídaně</td>
                  <td>Omeleta se špenátem a krůtí šunkou</td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Vanilkový dezert s granolou</td>
                </tr>
                <tr>
                  <td>Oběd</td>
                  <td>
                    <div>
                      Kuřecí řízek v italském stylu s pohankovými nudlemi s
                      omáčkou teriyaki
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Domácí hummus s grilovanou karotkou</td>
                </tr>
                <tr>
                  <td>Večeře</td>
                  <td>
                    Mahi-Mahi na limetách s bazalkou na máslové kukuřici s
                    karotkou, pečené bramborové plátky
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <table className={styles.menuTable}>
              <thead>
                <tr>
                  <th>Sobota</th>
                  <th>
                    <span
                      className={cx(styles.active, styles.orangeBlur)}
                    ></span>
                    <span
                      className={cx(styles.active, styles.greenBlur)}
                    ></span>
                    <span
                      className={cx(styles.active, styles.orangeBlur)}
                    ></span>
                    <span
                      className={cx(styles.active, styles.greenBlur)}
                    ></span>
                    <span
                      className={cx(styles.active, styles.orangeBlur)}
                    ></span>
                    <span className={cx(styles.active, styles.green)}></span>
                    <span></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Snídaně</td>
                  <td>Palačinky se sýrem a rajčaty</td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Grilovaný ananas s borůvkami</td>
                </tr>
                <tr>
                  <td>Oběd</td>
                  <td>
                    <div>Řecká musaka</div>
                  </td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>
                    Tabouleh z kuskusu, zeleniny, bylinek a balkánským sýrem
                  </td>
                </tr>
                <tr>
                  <td>Večeře</td>
                  <td>Roastbeef s pečenými batáty a brokolicí</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <div className="text-center" style={{ marginBottom: "120px" }}>
          <Button2
            color="primary"
            size="lg"
            handleClick={show}
            style={{ minWidth: "247px", justifyContent: "center" }}
          >
            Mám zájem
          </Button2>
          <RenderModal className="modalForm">
            <ModalForm />
          </RenderModal>
        </div>
      </Container>
    </>
  )
}

export default MenuPage
