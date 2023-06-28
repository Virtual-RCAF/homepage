import Link from 'next/link'
import NavbarItem from './navbar-item'

export default function Navbar() {
    return (
        <nav className='m-8 h-1/6 w-full absolute bg-transparent'>
            <ul className='flex justify-center gap-20 text-white'>
                <NavbarItem text={"Home"} href={"/"}></NavbarItem>
                <NavbarItem text={"About Us"} href={"/"} dropdown={[["Staff", "/staff"], ["Partners", "/partners"]]}></NavbarItem>
                <NavbarItem text={"Operations"} href={"/"} dropdown={[["Squadrans", "/squadrans"], ["Roster", "/roster"]]}></NavbarItem>
                <NavbarItem text={"Enlist"} href={"/"}></NavbarItem>
                <NavbarItem text={"STARS"} href={"/"}></NavbarItem>
            </ul>
        </nav>
    )
}