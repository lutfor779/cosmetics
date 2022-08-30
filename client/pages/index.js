import Banner from "../components/Home/Banner";
import SubBanner from "../components/Home/SubBanner";
import Treatments from "../components/Home/Treatments";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout title={"Cosmetics Home"}>
			<Banner />
			<SubBanner />
			<Treatments />
		</Layout>
	);
}
