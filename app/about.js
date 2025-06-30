import Image from "next/image";

const About = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-5 bg-gray-700">
        <div className="flex flex-row">
            
            <div className="flex flex-col justify-center items-center w-5/12 p-2">
                <Image src="/aboutrobot.jpg" alt="heroImage" width={1920} height={1320} className="rounded-2xl"/>
            </div>

            <div className="flex flex-col justify-center w-7/12 p-10">
                <span className=" text-5xl font-bold ml-3 text-amber-50">About</span>
                <span className="text-base text-gray-400 font-bold ml-3 mb-3">About This Blog</span>
                <p className="text-base m-3 text-gray-200"> 
                    ComputeX is your guide to the world of future technology. Whether you’re just getting curious or want to understand what’s coming next, we make complex ideas simple and exciting.
                </p>
                <p className="text-base m-3 text-gray-200"> 
                    We explore the newest breakthroughs in AI, robotics, space tech, clean energy, and more — all explained in a way that’s easy to follow. You don’t need a tech background to keep up. Just bring your curiosity.
                </p>
                <p className="text-base m-3 text-gray-200"> 
                    This blog is all about learning, exploring, and staying ahead of what’s coming. Because the future isn’t far away — it’s already starting to take shape.
                </p>
            </div>
        
        </div>
        
    </div>
  )
}

export default About