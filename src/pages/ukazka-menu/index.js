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
                  <td>Omeletové proužky s ančovičkami</td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Rolky s limetkovým tvarohem a ovocem</td>
                </tr>
                <tr>
                  <td>Oběd</td>
                  <td>
                    <div>
                      Salát z červené řepy se sýrem a sladko-kyselou zálivkou
                    </div>
                    <div>Kuřecí nudličky s bulgurem.</div>
                  </td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Ragú z mořských plodů</td>
                </tr>
                <tr>
                  <td>Večeře</td>
                  <td>Frikasé z krůty a pohanka se zeleninou</td>
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
                  <td>Volské oko se zeleninovou směsí</td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Ovoce v agarovém želé</td>
                </tr>
                <tr>
                  <td>Oběd</td>
                  <td>
                    <div>Ananasový salát s červenou řepou</div>
                    <div>
                      Yakitori z kuřete а perlotto se zeleninou a lanýžovým
                      máslem
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Kokosové palačinky s krevetami a sýrem stracciatella</td>
                </tr>
                <tr>
                  <td>Večeře</td>
                  <td>Cuketové špagety s kuřecím masem a pestem</td>
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
                  <td>Palačinky se sýrem a rajčaty</td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Grilované ananasy s borůvkami</td>
                </tr>
                <tr>
                  <td>Oběd</td>
                  <td>
                    <div>Řecký salát</div>
                    <div>
                      Králičí stehno v houbové omáčce a pečenými brambory
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Salát Nicoise s tuňákem a fazolemi</td>
                </tr>
                <tr>
                  <td>Večeře</td>
                  <td>Zapečený losos gorbuša se zeleninou v páře</td>
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
                  <td>Omeleta s avokádem, rajčaty a sýrem</td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Těstovinový salát</td>
                </tr>
                <tr>
                  <td>Oběd</td>
                  <td>
                    <div>Salát s mandlovým sýrem a rajčaty</div>
                    <div>Jehněčí dušené karé s kořením</div>
                  </td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Salát z mořských plodů</td>
                </tr>
                <tr>
                  <td>Večeře</td>
                  <td>Lenivý brizol s houbovou omáčkou</td>
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
                  <td>Tvarohové lívanečky se smetanou</td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Hruška s ořechy a čokoládou</td>
                </tr>
                <tr>
                  <td>Oběd</td>
                  <td>
                    <div>Pečená řepa s fenyklem a pomeranči</div>
                    <div>
                      Kuřecí šašlik na napichovátce s pečenými bramborovými
                      plátky
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Rolka s krabem</td>
                </tr>
                <tr>
                  <td>Večeře</td>
                  <td>
                    Kuřecí karbanátek s tvarohem a bazalkou a zeleninou v
                    marinádě
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
                  <td>Palačinky špenátovo-zázvorové z amarantové mouky</td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Tvarohový dezert s avokádem</td>
                </tr>
                <tr>
                  <td>Oběd</td>
                  <td>
                    <div>Salát se zelím, okurkami a ředkvičkami</div>
                    <div>Bulgureto</div>
                  </td>
                </tr>
                <tr>
                  <td>Svačina</td>
                  <td>Toast s domácí šunkou</td>
                </tr>
                <tr>
                  <td>Večeře</td>
                  <td>Steak z lososa s pečenou zeleninou</td>
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
