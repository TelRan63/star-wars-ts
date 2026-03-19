import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {defaultHero} from "../utils/constants.ts";

const NavItem = ({itemTitle}: { itemTitle: string }) => {
    const {hero} = useContext(SWContext);

    return (
        <NavLink to={`/${itemTitle.toLowerCase()}/${hero || defaultHero}`}>
            <Button>{itemTitle}</Button>
        </NavLink>
    )
}

export default NavItem;