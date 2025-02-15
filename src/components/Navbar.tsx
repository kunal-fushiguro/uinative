import { NavLink } from "react-router-dom"

const links = [
    {
        href: "/",
        text: "Home"
    },
    {
        href: "/components",
        text: "Components"
    },
    {
        href: "https://github.com/kunal-fushiguro/uinative",
        text: "Github"
    }
]

const Navbar = () => {
    return (
        <div className="absolute top-12 min-w-[50vh] bg-neutral-800 h-[7vh] rounded-4xl grid grid-cols-3 left-1/2 -translate-x-1/2 z-40">
            {links.map(({ href, text }, index) => {
                return (
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "flex justify-center items-center font-bold text-xl text-neutral-400"
                                : "flex justify-center items-center font-bold text-xl text-neutral-600"
                        }
                        to={href}
                        key={index}>
                        {text}
                    </NavLink>
                )
            })}
        </div>
    )
}

export default Navbar

