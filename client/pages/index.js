import Banner from "../components/Home/Banner";
import Features from "../components/Home/Features";
// import SubBanner from "../components/Home/SubBanner";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout title={"Cosmetics Home"}>
			<Banner />
			{/* <SubBanner /> */}
			<Features />
		</Layout>
	);
}
