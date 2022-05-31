import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  const recipes = data.recipes;

  return (
    <div className={styles.container}>
      <Head>
        <title>Recipes App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>RECIPES</h1>

      <ul>
        {recipes.map((r, i) => (
          <Link key={i} href="/about">
            {r.title}
          </Link>
        ))}
      </ul>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      data: {
        recipes: [{ title: "Pineapple Smoothie" }],
      },
    },
  };
}