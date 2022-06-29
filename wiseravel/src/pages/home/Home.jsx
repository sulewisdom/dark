import "./Home.css";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";

import Chart from "../../components/chart/chart";
export default function Home(){
    return(
        <div className="home">
            <FeaturedInfo />
            <Chart />
        </div>
    );
}
