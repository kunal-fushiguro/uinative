import CustomButton from "./CustomButton"

const ComponentPreviews = ({ videoPath, linkPath, title }: { videoPath: string; linkPath: string; title: string }) => {
    return (
        <div className=" rounded-4xl flex justify-center items-center gap-4 flex-col">
            <video
                src={videoPath}
                autoPlay
                loop
                muted></video>
            <span className="flex justify-center items-center gap-4 flex-col">
                <h2 className="text-neutral-400 font-bold text-xl">{title}</h2>
                <CustomButton
                    text="Get the Code"
                    linkPath={"/component/" + linkPath}
                />
            </span>
        </div>
    )
}

export default ComponentPreviews

