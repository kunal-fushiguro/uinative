import SyntaxHighlighter from "react-syntax-highlighter"
import { nnfxDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

const ComponentCode = ({ code, fileName }: { code: string; fileName: string }) => {
    return (
        <>
            <span className="font-bold text-xl text-white">
                Step 2: Copy paste the code in file name <span className="text-blue-400">{fileName}</span>
            </span>
            <div className="bg-neutral-800 h-auto w-[90%] flex justify-start items-center p-8 rounded-lg">
                <SyntaxHighlighter
                    language="typescript"
                    customStyle={{ ...nnfxDark, backgroundColor: "#262626", width: "100%" }}
                    style={{ ...nnfxDark }}>
                    {code}
                </SyntaxHighlighter>
            </div>
        </>
    )
}

export default ComponentCode

