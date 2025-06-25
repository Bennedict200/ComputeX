import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="heroImage">

        <div className="flex flex-col justify-center items-center w-7/12 p-2">
          <Image src="/heroPic.jpg" alt="heroImage" width={1920} height={1320} className="rounded-2xl"/>
        </div>

        <div className="flex flex-col justify-center items-center w-5/12 p-2">
          <span className="headingBody">Where The Future Begins</span>
          <p className="text-base m-5">
            Explore the edge of possibility. From intelligent machines to interstellar dreams, we decode the technologies shaping tomorrow’s world — before they hit the mainstream.
          </p>
          <div className="flex flex-row justify-center w-full">
            <button className="buttonOrange">Explore</button>
          </div>
        </div>
      </div>
    </div>
    // ------------------------------------------------------About section-----------------------------------------------------------------------
    
  );
}
