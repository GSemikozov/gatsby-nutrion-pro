import cx from 'classnames';
import React from 'react';

import { Container } from '../../components/container';
import SEO from '../../components/seo';
import dishIcon from './dish-icon.svg';
import styles from './menu.module.css';

const MenuPage = () => {
  return (
    <>
      <SEO title="Vzorové menu" />
      <Container>
        <h1 className={cx("text-center", styles.title)}>Vzorové menu</h1>
        <div className={styles.menuGrid}>
          <section>
            <h3 className={styles.menuTitle}>
              <span>Pondeli</span>
            </h3>
            <table className={styles.menuTable}>
              <tr>
                <td>Snidane</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Omeletové proužky s ančovičkami
                </td>
              </tr>
              <tr>
                <td>Svacina</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Rolky s limetkovým tvarohem a ovocem
                </td>
              </tr>
              <tr>
                <td>Obed</td>
                <td>
                  <div>
                    <img src={dishIcon} alt="dish-icon" />
                    Salát z červené řepy se sýrem a sladko-kyselou zálivkou
                  </div>
                  <div>
                    <img src={dishIcon} alt="dish-icon" />
                    Kuřecí nudličky s bulgurem.
                  </div>
                </td>
              </tr>
              <tr>
                <td>Svacina</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Ragú z mořských plodů
                </td>
              </tr>
              <tr>
                <td>Vecere</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Frikasé z krůty a pohanková se zeleninou
                </td>
              </tr>
            </table>
          </section>
          <section>
            <h3 className={styles.menuTitle}>
              <span>Utery</span>
            </h3>
            <table className={styles.menuTable}>
              <tr>
                <td>Snidane</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Volské oko se směsí zeleniny
                </td>
              </tr>
              <tr>
                <td>Svacina</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Ovoce v agarovém želé
                </td>
              </tr>
              <tr>
                <td>Obed</td>
                <td>
                  <div>
                    <img src={dishIcon} alt="dish-icon" />
                    Salát ananasový s červenou řepou
                  </div>
                  <div>
                    <img src={dishIcon} alt="dish-icon" />
                    Yakitori z kuřete а perlotto se zeleninou a lanýžovým máslem
                  </div>
                </td>
              </tr>
              <tr>
                <td>Svacina</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Kokosové palačinky s krevetami a sýrem stracciatella
                </td>
              </tr>
              <tr>
                <td>Vecere</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Cuketové špagety s kuřecím masem a pestem
                </td>
              </tr>
            </table>
          </section>
          <section>
            <h3 className={styles.menuTitle}>
              <span>Streda</span>
            </h3>
            <table className={styles.menuTable}>
              <tr>
                <td>Snidane</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Palačinky z sýrem a rajčaty
                </td>
              </tr>
              <tr>
                <td>Svacina</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Ananasy grilované s borůvkami
                </td>
              </tr>
              <tr>
                <td>Obed</td>
                <td>
                  <div>
                    <img src={dishIcon} alt="dish-icon" />
                    Řecký salát
                  </div>
                  <div>
                    <img src={dishIcon} alt="dish-icon" />
                    Králičí stehno v houbové omáčce a Brambory pečené
                  </div>
                </td>
              </tr>
              <tr>
                <td>Svacina</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Salát Nicoise s tuňákem a fazolemi
                </td>
              </tr>
              <tr>
                <td>Vecere</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Losos gorbuša zapečený se zeleninou v páře
                </td>
              </tr>
            </table>
          </section>
          <section>
            <h3 className={styles.menuTitle}>
              <span>Ctvrtek</span>
            </h3>
            <table className={styles.menuTable}>
              <tr>
                <td>Snidane</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Omeleta s avokádem, rajčaty a sýrem
                </td>
              </tr>
              <tr>
                <td>Svacina</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Univerzální salát z pasty
                </td>
              </tr>
              <tr>
                <td>Obed</td>
                <td>
                  <div>
                    <img src={dishIcon} alt="dish-icon" />
                    Salát s mandlovým sýrem a rajčaty
                  </div>
                  <div>
                    <img src={dishIcon} alt="dish-icon" />
                    Jehněčí karé dušené s kořením
                  </div>
                </td>
              </tr>
              <tr>
                <td>Svacina</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Salát z mořských plodů
                </td>
              </tr>
              <tr>
                <td>Vecere</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Lenivý brizol s houbovou omáčkou
                </td>
              </tr>
            </table>
          </section>
          <section>
            <h3 className={styles.menuTitle}>
              <span>Patek</span>
            </h3>
            <table className={styles.menuTable}>
              <tr>
                <td>Snidane</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Tvarohové lívanečky se smetanou
                </td>
              </tr>
              <tr>
                <td>Svacina</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Hruška s ořechy a čokoládou
                </td>
              </tr>
              <tr>
                <td>Obed</td>
                <td>
                  <div>
                    <img src={dishIcon} alt="dish-icon" />
                    Pečená řepa s fenyklem a pomeranči
                  </div>
                  <div>
                    <img src={dishIcon} alt="dish-icon" />
                    Kuřecí šašlik na napichovátce s pečenými bramborovými plátky
                  </div>
                </td>
              </tr>
              <tr>
                <td>Svacina</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Rolka s krabem
                </td>
              </tr>
              <tr>
                <td>Vecere</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Kuřecí karbanátek s tvarohem a bazalkou a zeleninou v marinádě
                </td>
              </tr>
            </table>
          </section>
          <section>
            <h3 className={styles.menuTitle}>
              <span>Sobota</span>
            </h3>
            <table className={styles.menuTable}>
              <tr>
                <td>Snidane</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Palačinky špenátovo-zázvorové z amarantové mouky
                </td>
              </tr>
              <tr>
                <td>Svacina</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Tvarohový dezert s avokádem
                </td>
              </tr>
              <tr>
                <td>Obed</td>
                <td>
                  <div>
                    <img src={dishIcon} alt="dish-icon" />
                    Salát se zelím, okurkami a ředkvičkami
                  </div>
                  <div>
                    <img src={dishIcon} alt="dish-icon" />
                    Bulgureto
                  </div>
                </td>
              </tr>
              <tr>
                <td>Svacina</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Toast s domácí šunkou
                </td>
              </tr>
              <tr>
                <td>Vecere</td>
                <td>
                  <img src={dishIcon} alt="dish-icon" />
                  Steak z lososa s pečenou zeleninou
                </td>
              </tr>
            </table>
          </section>
        </div>
      </Container>
    </>
  )
}

export default MenuPage
