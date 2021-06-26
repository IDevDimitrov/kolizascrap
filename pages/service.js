import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Service.module.css";

const Service = () => {
  return (
    <>
      <h1 className={styles.heading}>Изкупуване на коли</h1>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Взима колите от място, издава удостоверение за дерегистрация пред КАТ" />
        <meta name="keywords" content="Бракува коли, Купува скрап коли" />
        <title>Коли за скрап | Услуги</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.picture}>
          <Image src="/about.jpeg" alt="cars" width={500} height={500} />
        </div>
        <div className={styles.text}>
          <p className={styles.paragraph}>
            При толкова много изоставени излезли от употреба моторни превозни
            средства, захвърлени навсякъде в градската среда, които не само
            отнемат свободните паркоместа, но и сериозно замърсяват околната
            среда оставени на произвола на съдбата, при действията от страна на
            Държавата, която поставя срок на излезлите от употреба моторни
            превозни средства да бъдат предадени за скрап, ние спазваме стриктно
            закона и изпълняваме социалната си функция да облекчаваме гражданите
            при тяхното желание да се отърват от старата си неизползваема кола.
          </p>{" "}
          <p className={styles.paragraph}>
            {" "}
            Осигуряваме безплатен транспорт за колите, които купуваме и ги
            взимаме от мястото, на което са - адресът на клиента. Заплащането е
            в брой, веднага, на място и се удостоверява с документи. Издаваме
            удостоверение за дерегистрация на автомобилите, с което в 14 дневен
            срок трябва да бъдат отписани от КАТ и съответно - Общината. Работим
            всеки ден, без почивка, от 8 до 20 часа
          </p>
        </div>
        <Link href="/contact">
          <a className={styles.button}>Контакти</a>
        </Link>
      </div>
    </>
  );
};

export default Service;
