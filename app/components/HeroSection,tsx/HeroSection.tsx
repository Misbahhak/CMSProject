import Image from "next/image";
import CountUpNumber from "../CountUpNumber/CountUpNumber";
import ClientComponent from "./ClientComponent";
import { ImagesSection, headingServer } from "./ServerComponent";


const HeroSection = () => {
    return (
        <>
        < ClientComponent headingServer = {headingServer} ImagesSection = {ImagesSection} />
        </>
    );
}

export default HeroSection;
