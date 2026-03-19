import {SWContext} from "../utils/context.ts";
import {useContext} from "react";
import {characters, defaultHero} from "../utils/constants.ts";

const Hero = () => {
    const value = useContext(SWContext);
    const hero = value.hero || defaultHero;

    return (
        <section className="float-left w-1/4 mt-2 mr-4">
            <img className="w-full shadow-hero" src={characters[hero].img} alt={characters[hero].name}/>
        </section>
    )
}

export default Hero;