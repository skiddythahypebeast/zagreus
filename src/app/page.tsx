import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-start text-white">
      <header className="w-full fixed flex flex-row justify-between items-stretch p-2 z-50 pb-10 m-auto bg-gradient-to-b from-[#0000006c] to-transparent">
        <div className="absolute left-0 h-full top-0 -z-10 overflow-clip right-0">
          <svg width="4667" height="46" viewBox="0 0 4667 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M333 45.5H0V0H4667V29H349.5L333 45.5Z" fill="#18181B"/>
            <path d="M4667 30L349.71 29.5L333.21 46H0V45H332.79L349.29 28.5L4667 29V30Z" fill="#2F3D46"/>
          </svg>
        </div>
        <nav className="flex flex-row h-full items-center gap-5">
          <Link href="/" target="_self" className="h-8 w-8 relative">
            <Image src="/logo/logo.svg" alt="" fill />
          </Link>
          <Link href="" ><p className="text-sm font-share_mono">ZagSwap</p></Link>
          <Link href="" ><p className="text-sm font-share_mono">Documentation</p></Link>
          <Link href="" ><p className="text-sm font-share_mono">Support</p></Link>
        </nav>
        <Link href="" className="rounded-md p-[1px] relative secondary-button-wrapper">
          <div className="px-3 flex items-center justify-center z-10 relative bg-[#18181B] rounded-md h-full w-full">
            <p className="text-sm font-share_mono">Launch App</p>
          </div>
        </Link>
        <div className="absolute right-0 h-full top-0 -z-10">
        <svg width="173" height="46" viewBox="0 0 173 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.87 45.5H173.37V0H0V29H32.37L48.87 45.5Z" fill="#18181B"/>
          <path d="M173.37 46H48.66L32.16 29.5H0V28.5H32.58L49.08 45H173.37V46Z" fill="#2F3D46"/>
        </svg>
        </div>
      </header>

      <div id="hero" className="flex flex-row items-stretch gap-5 w-full min-h-[800px] px-2 mx-auto">
        <div className="flex-1 flex-row xl:flex lg:flex hidden">
          <div className="h-full flex-1 flex justify-center items-center relative">
            <div className="absolute top-48 bubble-container p-[1px]">
              <div className="p-2 bubble">
                <p className="text-4xl text-zinc-400 font-share_sans">300+</p>
                <p className="text-zinc-400 text-sm font-share_mono">Chains</p>
              </div>
            </div>
          </div>
          <div className="h-full flex-1 flex justify-center items-center relative">
            <Image src="/tokens/sol.svg" className="absolute top-40" alt="" height={70} width={70} />
          </div>
          <div className="h-full flex-1 flex justify-center items-center relative">
            <div className="absolute bottom-60 bubble-container p-[1px]">
              <div className="p-2 bubble">
                <p className="text-4xl text-zinc-400 font-share_sans">1000+</p>
                <p className="text-zinc-400 text-sm font-share_mono">Tokens</p>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-1/3 lg:w-1/3 w-full flex flex-col items-center justify-center gap-5">
          <div className="flex-1 gap-3 flex flex-col justify-end items-center">
            <p className="text-[#89999C] text-center font-sofia font-light text-xl">The only privacy bridge committed to</p>
            <h1 id="banner-text" className="xl:text-6xl lg:text-6xl text-5xl xl:text-nowrap md:text-nowrap text-wrap text-center font-share_sans">providing low fees and rewarding holders</h1>
          </div>
          <button className="swap-button-container rounded-full p-[1px]">
            <div className="swap-button rounded-full px-5 py-2">
              <p className="font-sofia text-xl font-extralight">Swap Now</p>
            </div>
          </button>
          <div className="flex-1 w-full flex flex-col items-center justify-start">
            <div className="max-w-[450px] w-full h-fit p-2 bg-[#18181b] ui-border relative">
              <div className="w-full h-full rounded-xl gap-2 bg-[#27272a] shadow-inner shadow-[#00000050] py-3 px-4 flex flex-col">
                <div className="py-1 px-2 rounded-lg bg-[#18181b] shadow-sm shadow-[#00000050]">
                  <p className="text-xs">Configure Swap</p>
                </div>
                <div className="flex flex-row items-center bg-[#3f3f46] h-12 rounded-lg">
                  <div className="flex flex-row justify-evenly items-center flex-1">
                    <p className="text-xs opacity-50">send</p>
                    <p className="text-md opacity-50">Enter amount</p>
                  </div>
                  <div className="bg-[#18181b] h-full flex flex-row w-40 justify-evenly items-center px-2 gap-2 rounded-r-lg shadow-sm shadow-[#00000050]">
                    <Image src="/tokens/eth.svg" alt="" height={25} width={25}/>
                    <p className="font-bold text-sm">ETH</p>
                    <div className="bg-indigo-400 py-[2px] px-2 rounded-full">
                      <p className="text-[10px] text-black font-bold">ETH</p>
                    </div>
                    <Image src="/icons/chevron.svg" alt="" height={15} width={15}/>
                  </div>
                </div>
                <div className="flex flex-row items-center bg-[#3f3f46] h-12 rounded-lg shadow-sm shadow-[#00000050]">
                  <div className="flex flex-row justify-evenly items-center flex-1">
                    <p className="text-xs opacity-50">send</p>
                    <p className="text-md opacity-50">Enter amount</p>
                  </div>
                  <div className="bg-[#18181b] h-full flex flex-row w-40 justify-evenly items-center px-2 gap-2 rounded-r-lg">
                    <Image src="/tokens/bsc.svg" alt="" height={25} width={25}/>
                    <p className="font-bold text-sm">USDC</p>
                    <div className="bg-indigo-400 py-[2px] px-2 rounded-full">
                      <p className="text-[10px] text-black font-bold">ETH</p>
                    </div>
                    <Image src="/icons/chevron.svg" alt="" height={15} width={15}/>
                  </div>
                </div>
                <div className="py-1 px-2 rounded-lg bg-[#18181b] shadow-sm shadow-[#00000050]">
                  <p className="text-xs">Receiver Address</p>
                </div>
                <div className="flex flex-row items-center bg-[#3f3f46] h-12 rounded-lg">
                  <div className="flex flex-row justify-evenly items-center flex-1 w-full">
                    <p className="text-md opacity-50 w-full px-5 truncate">0x000000000000000000000000000000000</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-blue-400 h-12 rounded-lg shadow-md shadow-[#00000050]">
                  <p className="">Create order</p>
                </div>
              </div>
            <div className="bg-gradient-to-b from-transparent to-[#0F0F11] inset-0 absolute"/>
            </div>
          </div>
        </div>
        <div className="flex-1 flex-row xl:flex lg:flex hidden">
          <div className="h-full flex-1 flex justify-center items-center relative">
            <Image src="/tokens/eth.svg" className="absolute top-20" alt="" height={70} width={70} />
          </div>
          <div className="h-full flex-1 flex justify-center items-center relative">
            <Image src="/tokens/bsc.svg" className="absolute bottom-40" alt="" height={70} width={70} />
          </div>
          <div className="h-full flex-1 flex justify-center items-center relative">
            <div className="absolute bottom-80 bubble-container p-[1px]">
              <div className="p-2 bubble">
                <p className="text-4xl text-zinc-400 font-share_sans">1%</p>
                <p className="text-zinc-400 text-sm font-share_mono">Lowest Fee</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center -z-10 overflow-clip">
          <Image src="/graphics/mesh.svg" alt="" fill className="object-contain" />
        </div>
      </div>

      <div className="w-full mx-auto h-16 overflow-hidden flex items-center justify-center bg-gradient-to-t from-[#0000006c] to-transparent relative">
        <Image src="/icons/chevron.svg" className="z-10 opacity-20" alt="" height={20} width={20} />
        <div className="absolute bottom-0">
          <svg width="4667" height="47" viewBox="0 0 4667 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 47V18H2151.31L2167.81 1.5H2500.81L2517.81 18.5H4667V47H0Z" fill="#18181B"/>
            <path d="M2150.83 17.01L2167.35 0.48999H2501.24L2518.24 17.49H4667V18.49H2517.82L2500.83 1.48999H2167.84L2151.32 18.01L0 18V17L2150.83 17.01Z" fill="#2F3D46"/>
          </svg>
        </div>
      </div>

      <section className="w-full bg-[#18181B] relative">
        <div className="w-full h-[500px] max-w-[1200px] mx-auto flex flex-col relative">
          <div className="wind-container px-5 flex-1 flex flex-col justify-end xl:pb-5 lg:pb-5 relative">
            <h2 id="wind" className="font-wind xl:text-6xl lg:text-6xl text-4xl text-wrap text-blue-300 py-2">Welcome to Zagreus</h2>
            <Image src="/graphics/welcome-mesh.svg" alt="" className="object-cover" fill />
            <div className="h-40 w-40 absolute xl:bottom-0 lg:bottom-0 -bottom-12 left-20">
              <p className="font-bold xl:text-9xl lg:text-9xl text-8xl scale-125 opacity-10 font-teko">01</p>
            </div>
          </div>
          <div className="justify-items-start pt-2">
            <p className="font-sofia font-thin text-xl text-center p-5 xl:px-20 lg:px-20">The first ever privacy bridge dedicated entirely to reducing fees while rewarding holders. With Zagreus you can swap and send tokens privately through our Zagswap token swap or participate in rev share opportunities with our Zagshare NFT&apos;s and Zagpoint rewards network.</p>
          </div>
        </div>
      </section>
      
      <footer className="w-full px-5 min-h-80 border-t-[1px] border-t-[#2F3D46]">
        <div className="w-full min-h-80 max-w-[1200px] mx-auto flex flex-col relative border-b-[1px] border-b-[#2F3D46]">
          <div className="flex flex-row w-full gap-5 py-14">
            <Image src="/logo/logo.svg" alt="" height={35} width={35} />
            <p className="font-share_mono text-2xl">ZAGREUS</p>
          </div>
          <div className="flex xl:flex-row lg:flex-row gap-10 pb-10 xl:px-10 lg:px-10 flex-col justify-between items-start">
            <div className="flex flex-col">
              <h3 className="font-share_mono text-xl text-[#424242] pb-5">SOCIAL</h3>
              <Link href="">
                <p className="font-sofia text-[#BFBFBF] font-light">Telegram</p>
              </Link>
              <Link href="">
                <p className="font-sofia text-[#BFBFBF] font-light">Twitter</p>
              </Link>
            </div>
            <div className="flex flex-col">
              <h3 className="font-share_mono text-xl text-[#424242] pb-5">ZAGREUS TOKEN</h3>
              <Link href="">
                <p className="font-sofia text-[#BFBFBF] font-light">Dextools</p>
              </Link>
              <Link href="">
                <p className="font-sofia text-[#BFBFBF] font-light">Uniswap</p>
              </Link>
              <Link href="">
                <p className="font-sofia text-[#BFBFBF] font-light">Etherscan</p>
              </Link>
            </div>
            <div className="flex flex-col">
              <h3 className="font-share_mono text-xl text-[#424242] pb-5">Resources</h3>
              <Link href="">
                <p className="font-sofia text-[#BFBFBF] font-light">Documentation</p>
              </Link>
              <Link href="">
                <p className="font-sofia text-[#BFBFBF] font-light">Roadmap</p>
              </Link>
              <Link href="">
                <p className="font-sofia text-[#BFBFBF] font-light">Whitepaper</p>
              </Link>
              <Link href="">
                <p className="font-sofia text-[#BFBFBF] font-light">Support</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex xl:flex-row lg:flex-row flex-col max-w-[1200px] justify-between mx-auto py-6">
          <p className="font-sofia font-thin xl:text-md lg:text-md text-sm">(c) 2025 Zagreus</p>
          <p className="font-sofia font-thin xl:text-md lg:text-md text-sm">CA: 0x000000000000000000000000000000000000dead </p>
        </div>
      </footer>
    </main>
  );
}