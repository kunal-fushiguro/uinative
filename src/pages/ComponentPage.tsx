import ComponentCode from "../components/ComponentCode"
import LibraryComponents from "../components/LibraryComponents"
import { useParams } from "react-router-dom"
import data from "../data/components.json"
import { useLayoutEffect } from "react"

const ComponentPage = () => {
    const { id } = useParams()
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="bg-neutral-900 min-h-screen w-screen flex justify-center items-center gap-16 pt-[20vh]">
            <div className=" w-[50%] my-auto flex justify-start items-start gap-10 flex-col pl-4 pb-16">
                {/* Component name */}
                <span className="text-white text-5xl font-bold">{data[Number(id)].title}</span>
                <LibraryComponents cmd={data[Number(id)].installation_cmd} />
                <ComponentCode
                    code={data[Number(id)].code}
                    fileName={data[Number(id)].file_name}
                />
            </div>
        </div>
    )
}

export default ComponentPage

