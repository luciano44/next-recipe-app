import Head from "next/head";
import Link from "next/link";

export default function About({ data }) {
  return (
    <>
      <h2>About Page</h2>
      <Link href="/">Home page</Link>
      <p>numbers</p>
      <ul>
        {data.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      data: [12, 63, 74, 7, 73, 3, 463, 34, 2],
    },
  };
}
