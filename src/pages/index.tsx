import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faReddit,
	faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Lite.space - Litecoin Mempool Explorer</title>
				<meta
					name="description"
					content="A Litecoin Mempool Explorer, a fork from Mempool.space"
				/>
				<link rel="icon" href="/favicon.png" />
			</Head>

			<div className={styles.content}>
				<main className={styles.main}>
					<h1 className={styles.title}>Lite.space</h1>
					<p className={styles.description}>
						A Litecoin Mempool Explorer, a fork from Mempool.space
					</p>
					<p className={styles.description}>Coming Soon</p>
				</main>

				<footer className={styles.footer}>
					<div className={styles.socialIcons}>
						<a
							href="https://twitter.com/litespace_"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faTwitter} size="2x" />
						</a>
						<a
							href="https://discord.gg/HPn3FpskHW"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faDiscord} size="2x" />
						</a>
					</div>
				</footer>
			</div>

			<style jsx>{`
				main {
					background-image: url("../../public/Sphere (1).webm");
					background-size: cover;
					background-position: center;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}

				.socialIcons {
					display: flex;
					justify-content: space-around;
					width: 50%;
					margin-top: 1rem;
				}

				.socialIcons a {
					color: inherit;
					margin: 0 1rem;
					transition: color 0.3s ease;
				}

				.socialIcons a:hover {
					color: #your-color;
				}
			`}</style>
		</div>
	);
}
