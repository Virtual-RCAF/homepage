import Link from "next/link";

export default function NavbarItem({ text, href, dropdown=[]}) {

    return (
        <li className='group text-2xl font-semibold transition hover:scale-105'>
            <Link href={href}>{text}</Link>
            {
            <div className="pt-2">
                <div className={`invisible absolute ${dropdown.length > 0 ? "p-5" : ""} rounded-b-md bg-slate-900 bg-opacity-10 opacity-0 transition delay-70 duration-500 group-hover:visible group-hover:opacity-100`}>
                    <ul className="flex flex-col gap-3">
                    {
                        dropdown.map((item) => (
                            <li className="text-xl transition hover:scale-105" key={dropdown.indexOf(item)}><Link href={item[1]}>{item[0]}</Link></li>
                        ))
                    }
                    </ul>
                </div>
            </div>
            }
        </li>
    )
}