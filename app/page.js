import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-2 justify-center items-center text-white md:h-[44vh] h-[30vh] max-md:mt-2">
      <div className="md:text-5xl md:p-0 pl-3 text-2xl font-bold flex items-center justify-center "><span className="pt-7">Buy me a chai</span>
        <span><img className="max-md:w-14" src="/tea.gif" width={80} alt="" /></span>
      </div>
      <p className="md:p-0 p-2 text-center md:text-lg text-md">A crowdfunding platform for creators. Get funded by your fans and followers. Start now!</p>
      <div>
      <Link href={"/create"}>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here </button></Link>
      <Link href={"/about"}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More </button>
      </Link>  
      </div>

    </div>
    <div className="bg-white h-1 opacity-10 md:mt-0 mt-10"></div>
    <div className="text-white container mx-auto">
      <h2 className="md:text-3xl text-2xl font-bold text-center my-10">Your fans can buy you a chai </h2>
      <div className="flex gap-5 justify-around">
      <div className="item space-y-3 flex flex-col items-center justify-center">
          <img src="/man.gif" className="md:w-[100px] w-[70px] rounded-full"alt="" />
          <p className="md:font-extrabold text-center font-semibold font-serif  text-purple-200">Fans want to help you</p>
          <p className="font-thin text-center text-sm">Your fans are available for you to help you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img src="/dollar.gif" className="rounded-full md:w-[100px] w-[70px] " alt="" />
          <p className="md:font-extrabold font-semibold text-center font-serif  text-purple-200">Fans want to help you</p>
          <p className="font-thin text-center text-sm">Your fans are available for you to help you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img src="/group.gif" className="rounded-full md:w-[100px] w-[70px] " alt="" />
          <p className="md:font-extrabold text-center font-semibold font-serif  text-purple-200">Fans want to help you</p>
          <p className="font-thin text-center text-sm">Your fans are available for you to help you</p>
        </div>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10 my-10"></div>

    <div className="text-white flex flex-col items-center justify-center container mx-auto pb-10 gap-5">
      <h2 className="md:text-3xl text-2xl font-bold text-center">Learn More About Us</h2>
      <iframe className="md:w-1/3 md:h-64" src="https://www.youtube.com/embed/OWjef57CMXg?si=fy5rQ_cZ9xN-dAx0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>

    
    </>
  );
}
