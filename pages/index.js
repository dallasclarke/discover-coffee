import Head from "next/head";
import Image from "next/image";

import Banner from "../components/Banner";
import Card from "../components/card";

import coffeeStores from "../data/coffee-store.json";

import styles from "../styles/Home.module.css";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("Hi from banner btn");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View Stores Nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src="/static/hero.png" width={700} height={400} />
        </div>
        <div className={styles.cardLayout}>
          {coffeeStores.map((coffeeStore) => {
            return (
              <Card
                className={styles.card}
                name={coffeeStore.name}
                imgUrl={coffeeStore.imgUrl}
                href={`/coffee-store/${coffeeStore.id}`}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
