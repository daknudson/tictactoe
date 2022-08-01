import Head from "next/head";
import styles from "../styles/Home.module.css";
import Board from "../containers/Board";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe</title>
        <meta name="description" content="A game By Dayne Knudson" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Board />
      </main>
    </div>
  );
}