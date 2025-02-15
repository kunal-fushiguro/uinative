const TitleGradient = ({ title, fontSize = "text-9xl" }: { title: string; fontSize?: string }) => {
    return <h1 className={`py-3 px-6 bg-gradient-to-r to-gray-700 from-gray-100 bg-clip-text text-transparent ${fontSize} font-bold`}>{title}</h1>
}

export default TitleGradient

