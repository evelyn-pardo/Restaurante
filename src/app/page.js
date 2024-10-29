"use client"; // Indica que este componente es un Client Component
import Image from "next/image"; // Importación correcta del componente Image
import styles from './styles/page.module.css'; // Importación de estilos
import { useEffect, useState } from "react"; // Importa useState
import { MenuItem } from "@/components/Menu/Menu";
import axios from 'axios'
import { Navbar } from "@/components/Navbar/Navbar";
import { Card } from "@/components/Card/Card";
import Link from "next/link";


export default function Home() {
  const [menuActive, setMenuActive] = useState(false); // Estado para el menú
  const [menuData, setMenuData] = useState([]); // Estado para los datos del menú

  useEffect(() => {
    const getMenu = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/menu/");
        setMenuData(res.data);
      } catch (error) {
        console.error("Error al obtener el menú:", error);
      }
    };
    getMenu();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Navbar />

      <section className={`${styles.heroSection} ${menuActive ? styles.inactive : ''}`}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1 className={styles.fondo}> DISFRUTA UN AMBIENTE <span className={styles.unico}>ÚNICO Y ESPECIAL</span></h1>
          <div className={styles.buttons}>
            <a href="#carta" className={styles.button}>VER CARTA</a>
            
            <a href="#reservar" className={styles.buttonYellow}>RESERVAR MESA</a>
          </div>
        </div>
      </section>

      <section className={styles.descriptionSection} id="restaurante">
        <div className={styles.overlay}></div>
        <Card 
          cardTitle="El Restaurante"
          cardSubTitle="Siéntete como en casa"
          cardDescription="Bienvenido a Restaurante Misku, donde la calidad de nuestros ingredientes y la dedicación de nuestro personal
            se unen para ofrecerte una experiencia gastronómica inigualable. Ven y disfruta de un ambiente acogedor,
            deliciosos platillos y un servicio excepcional."
          cardMoreInfo="Ofrecemos una variedad de platillos, desde opciones vegetarianas hasta los más suculentos cortes de
                  carne. Nuestro equipo está listo para hacer de tu visita una experiencia inolvidable."
          cardBtnTxt="RESERVAR MESA"
        />
      </section>
      <section className={styles.descriptionSectionhistory} id="historia">
        <div className={styles.overlay}></div>
        <Card 
          cardTitle="Historia"
          cardSubTitle="20 años sintiendo la gastronomía"
          cardDescription="Bienvenido a Restaurante Misku, donde la calidad de nuestros ingredientes y la dedicación de nuestro personal
            se unen para ofrecerte una experiencia gastronómica inigualable. Ven y disfruta de un ambiente acogedor,
            deliciosos platillos y un servicio excepcional."
          cardMoreInfo="Aquí puedes incluir información adicional sobre el restaurante, como el menú, eventos especiales,
                  o detalles sobre la experiencia que ofreces. "
          cardBtnTxt="VER CARTA"
        />
      </section>

      <section className="menuContainer" id="carta"> 
        <div className="menuContent"> 
            <div className="menuHeader"> 
                <h1>Menú Misku</h1> 
            </div>
            <div className="menuItems"> 
                {menuData.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </div>
      </section>

      <section className={styles.reservationSectionlocation} id="localizacion">
        <div className={styles.overlay}></div>
        <div className={styles.reservationContainerlocation}>
          <div className={styles.locationSection}>
            <h3>Localización</h3>
            <h1>Te esperamos</h1>
            <p><strong>Horario</strong></p>
            <p>De Martes a Domingo, de 8:00h a 22:00h.</p>
            <hr className={styles.divider} />
            <p><strong>Dirección</strong></p>
            <p>Calle Cualquiera 123, Cualquier Lugar, CP: 12345</p>
            <p><strong>Teléfono</strong></p>
            <p>91-1234-567</p>
            <p><strong>Email</strong></p>
            <p><a href="mailto:hola@unsitiogenial.es">restaurante@misku.com</a></p>
            <p><strong>Redes sociales</strong></p>
            <p><a href="#">@restaurantemisku</a></p>
          </div>

          <div className={styles.reservationFormSection} id="reservar">
            <h1 className={styles.reservationtitle}>Haz una reserva</h1>
            <h3 className={styles.reservationparrafo}>Ven a vivir la experiencia Misku, reserva tu ​mesa y evita la espera, 
              tenemos promociones ​para tus eventos especiales como cumpleaños, 
              ​aniversarios, cenas de navidad, 
              despedidas de ​soltera... pregunta por nuestros paquetes.</h3>
          <Link href="/terjetas_reserva">
            <button className={styles.reserveButton}>
              Reservar mesa
            </button>
          </Link> 

          </div>
        </div>

        <footer className={styles.footer}>
          Restaurante Misku 2024 - <a href="#">Política de privacidad</a>
        </footer>

        <div id="sfcpzrqek5hy8jy7m84n7jahus57bchee8x"></div>
        <script type="text/javascript" src="https://counter6.optistats.ovh/private/counter.js?c=pzrqek5hy8jy7m84n7jahus57bchee8x&down=async" async></script>
        <noscript>
          <a href="https://www.contadorvisitasgratis.com" title="contador de visitas para blogger">
            <img src="https://counter6.optistats.ovh/private/contadorvisitasgratis.php?c=pzrqek5hy8jy7m84n7jahus57bchee8x" border="0" title="contador de visitas para blogger" alt="contador de visitas para blogger"/>
          </a>
        </noscript>
      </section>
    </div>
  );
}
