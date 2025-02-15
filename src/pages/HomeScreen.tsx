import CustomButton from "../components/CustomButton"
import Description from "../components/Description"
// import Navbar from "../components/Navbar"
import TitleGradient from "../components/TitleGradient"

const HomeScreen = () => {
    return (
        <div className={`w-screen h-screen flex justify-center items-center gap-4 p-8 bg-neutral-900 flex-col relative`}>
            <TitleGradient title="Ui-Native" />
            <Description description="A sleek and user-friendly React Native components website where you can effortlessly copy and paste high-quality, beautifully designed components into your project. No setup hassle—just grab the code and bring your app to life instantly! Resources" />
            <CustomButton
                text="Get Started"
                linkPath="/components"
            />
        </div>
    )
}

export default HomeScreen

