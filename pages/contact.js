import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <h1 className={styles.heading}>За контакти</h1>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Работи всеки ден, без почивка, от 8 до 20 часа"
        />
        <meta
          name="keywords"
          content="Изкупуване в град Пазарджик, автоскрап"
        />
        <title>Коли за скрап | Контакти</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.picture}>
          <Image src="/contact.jpg" alt="cars"  width={900}
            height={540}
            style={{
              maxWidth: "100%",
              height: "auto",
            }} />
        </div>
        <p>
          Може да отправите своето запитване по имейл, а за да оценим колата Ви
          за скрап, е необходимо да ни кажете марката, моделът, година на
          производство, тип на двигател - дизел или бензин, обем в кубици, тип
          на купето - седан, комби или хечбек, както и местонахождение.
        </p>
        <Link href="mailto:cars@ecometal.bg">
          <a className={styles.button}>Пишете ни</a>
        </Link>

        <p>
          Може да ни позвъните и на номерата ни с питане относно цената на кола
          за скрап. Централата работи всеки ден от 8 до 20 часа.
        </p>

        <Link href="tel: 0878817777">
          <a className={styles.button}>Звънете</a>
        </Link>

        <p>Може да ни намерите и в социалните мрежи</p>

        <Link href="https://www.facebook.com/ecometal">
          <a className={styles.button}>Facebook</a>
        </Link>

        <h3>Често задавани въпроси</h3>
        <details>
          <summary>Каква е цената?</summary>
          <p>
            Всяка една кола се оценява индивидуално. Взима се предвид
            състоянието и окомплектовката. Питаме за марка, модел, година на
            производство, тип на двигателя - дизел или бензин, обем в кубици,
            тип на купето - хечбек, комби или седан и местонахождение
          </p>
        </details>
        <details>
          <summary>В кои градове работите?</summary>
          <p>
            Работим в град Пазарджик и в радиус от 50 км вкллючително Пещера,
            Панагюрище, Велинград, Пловдив и др.
          </p>
        </details>
        <details>
          <summary>Безплатен ли е транспортът за колите?</summary>
          <p>
            Извозването на колите става от адреса на клиента до базите ни
            безплатно, като след предварителна уговорка за удобни ден и час,
            идваме на място, до адреса, на който е колата, извозваме я с наш
            транспорт безплатно и оставяме документ за това
          </p>
        </details>
        <details>
          <summary>Издавате ли документ за бракуване?</summary>
          <p>
            За всяка една кола, която взимаме от адреса на клиента, издаваме
            пълния комплект необходими документи за отписване на колата от КАТ и
            Общината - удостоверение за дерегистрация
          </p>
        </details>
        <details>
          <summary>Какво е работното Ви време?</summary>
          <p>
            Работим всеки ден, включително събота и неделя, от 08 сутринта до 20
            часа вечерта
          </p>
        </details>
      </div>
    </>
  );
};

export default Contact;
