import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Lite.space - Coming Soon</title>
				<meta
					name="description"
					content="Lite.space - Mempool Block Explorer for Litecoin"
				/>
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					<span style={{ color: "#345D9D" }}>Lite</span>
					<span style={{ color: "#333" }}>.space</span>
				</h1>
				<p className={styles.p}>A Litecoin Mempool Explorer - Coming Soon</p>
				<p className={styles.p2}>A fork of Mempool.space</p>
				<div className={styles.socialIcons}>
					<a
						href="https://twitter.com/litespace_"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/twitter.svg" alt="Twitter Icon" width="24" height="24" />
					</a>
					<a
						href="https://discord.gg/EksJTdeRTS"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/discord.svg" alt="Discord Icon" width="24" height="24" />
					</a>
				</div>
			</main>
		</div>
	);
};

export default Home;
