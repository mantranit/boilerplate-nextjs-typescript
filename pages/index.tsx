import type { ReactElement } from 'react';
import { Layout } from '../components/Layout';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function HomePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home - Man Tran</title>
      </Head>

      <h1 className={styles.title}>
        Welcome to <a onClick={(e) => e.preventDefault()}>Next.js!</a>
      </h1>
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
