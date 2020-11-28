import { link } from 'fs';
import React from 'react'

type linkProps = { name: string, to: string };
type NavbarProps =  { links: Array<linkProps> }; 

export const Navbar = (props: NavbarProps) => {
    const { links } = props;
    const NavLinks: any = () =>  links.map((link: linkProps) => <a href={link.to}>{link.name}</a>);
    return (
    <>
    <div>
        <h1>navbar title</h1>
        <NavLinks />
    </div>
    </>);
};