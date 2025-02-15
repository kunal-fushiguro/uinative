import { Link } from "react-router-dom"

const CustomButton = ({ text, linkPath }: { text: string; linkPath: string }) => {
    return (
        <Link
            to={linkPath}
            className="bg-gradient-to-r to-[#697565] from-[#ECDFCC]  text-2xl font-bold py-2 px-4 rounded-xl cursor-pointer">
            {text}
        </Link>
    )
}

export default CustomButton

