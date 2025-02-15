// import { useState } from "react"
import ComponentPreviews from "../components/ComponentPreviews"
import Description from "../components/Description"
import TitleGradient from "../components/TitleGradient"
import Data from "../data/components.json"

const ComponentScreen = () => {
    // const [data,setData] = useState(Data)
    return (
        <>
            <div className="bg-neutral-900">
                <div className="flex justify-center items-center gap-8 h-screen flex-col w-screen">
                    <TitleGradient title="Components" />
                    <Description description="A collection of reusable, responsive UI elements designed for seamless integration and a consistent user experience. 🚀" />
                </div>
                {/* Components Collection */}
                <div className="grid min-h-screen grid-cols-3 grid-rows-3 p-12 w-screen grid-flow-dense">
                    {Data.map((items, index) => {
                        return (
                            <ComponentPreviews
                                videoPath={items.videoPath}
                                linkPath={index.toString()}
                                title={items.title}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ComponentScreen

