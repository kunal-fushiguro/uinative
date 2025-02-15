const LibraryComponents = ({ cmd }: { cmd: string }) => {
    return (
        <>
            <span className="font-bold text-xl text-white">Step 1: Install the package</span>
            <div className="bg-neutral-800 min-w-[70%] h-13 flex justify-start items-center pl-4 rounded-lg overflowy-scroll">
                <span className="font-bold text-white overflowy-scroll">{cmd}</span>
            </div>
        </>
    )
}

export default LibraryComponents

