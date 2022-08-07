import Banner from "../components/Home/Banner";
import Features from "../components/Home/Features";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout title={"Keya Cosmetics"}>
			<Banner />
			<Features />
		</Layout>
	);
}
