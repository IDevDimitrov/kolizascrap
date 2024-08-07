import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Купува изоставени автомобили" />
        <meta name="keywords" content="Автомобили за скрап" />
        <title>Коли за скрап | За нас</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className={styles.heading}>За нас</h1>

      <div className={styles.container}>
        <div className={styles.picture}>
          <Image src="/about.jpeg" alt="cars" width={900}
            height={540}
            style={{
              maxWidth: "100%",
              height: "auto",
            }} />
        </div>
        <div className={styles.text}>
          <p className={styles.paragraph}>
            Ние сме компания с основна дейност изкупуване на метални отпадъци от
            черни и цветни метали. Изкупуваме <Link href="https://ecometal.bg"><a><strong>коли за скрап</strong></a></Link> – ударени,
            катастрофирали, повредени, изоставени, остарели и всякакви други
            ненужни автомобили. Компанията притежава модерни съоръжения и
            съвременна база за екологичното рециклиране на Излезлите от употреба
            моторни превозни средства, които на по-късен етап намират приложение
            за повторна употреба на преработеното желязо в индустрията и тежката
            промишленост. Организацията притежава няколко бази в различни
            градове в България. Ние сме се прицелили в амбициозната цел да
            изчистим големите градове от всички изоставени и неизползвани
            автомобили, на които вече им е дошло времето да бъдат бракувани.
            Търсим такива коли и сме готови да платим за тях най-добрата
            възможна цена в България. Компанията ни притежава всички необходими
            лицензи и разрешителни за екологично обработване на метални отпадъци
            и тяхната повторна употреба. Компанията разполага с най-модерните
            рециклиращи машини, които обработват металите природосъобразно и
            екологично.
          </p>
        </div>
        <Link href="tel:0878817777">
          <a className={styles.button}>Позвънете</a>
        </Link>
      </div>
    </>
  );
};

export default About;
