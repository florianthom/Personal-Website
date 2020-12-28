import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import type { AppProps } from "next/app";

interface Props {
    test?: {
        test: string;
    };
}

const IndexPage: NextPage<Props> = (props: Props) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Florian Thom</title>
            </Head>
            <main>
                <div>
                    <h1>index.tsx</h1>
                </div>
            </main>
        </div>
    );
};

export default IndexPage;
