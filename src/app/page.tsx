"use client";

import Image from "next/image";
import Link from "next/link";
import { env } from "~/env";
import { Section } from "./section";

export default function HomePage() {

  const SwapDisplay = () => (
    <div className="bg-gradient-to-b swap-display from-[#3CD2FB] to-transparent rounded-2xl p-[2px]">
      <div className="w-full flex flex-col items-center justify-start">
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
                <Image src="https://static.simpleswap.io/images/currencies-logo/ethbsc.svg" alt="" height={20} width={20}/>
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
                <Image src="https://static.simpleswap.io/images/currencies-logo/usdcepoly.svg" alt="" height={20} width={20}/>
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
  );

  return (
    <main className="flex flex-col items-center justify-start text-white">
      <header className="w-full absolute max-w-[1400px] mx-auto flex flex-row justify-between items-stretch h-20 py-5 xl:px-10 lg:px-10 px-3 z-50 m-auto">
        <nav className="flex flex-row h-full items-center gap-5">
          <Link href="/" target="_self" className="h-8 w-8 relative">
            <Image src="/logo/logo.svg" alt="" fill />
          </Link>
          <div className="flex-row items-center gap-5 xl:flex lg:flex hidden">
            <Link href="" ><p className="text-lg font-sofia font-light">Zagswap</p></Link>
            <Link href="" ><p className="text-lg font-sofia font-light">Documentation</p></Link>
            <Link href="" ><p className="text-lg font-sofia font-light">Support</p></Link>
          </div>
        </nav>
        <Link href={env.NEXT_PUBLIC_DAPP_URL} target="_blank" className="rounded-md p-[3px] relative primary-button-wrapper">
          <div className="primary-button px-3 flex items-center justify-center z-10 relative bg-[#253f47] rounded-md h-full w-full">
            <p className="text-lg font-share_mono">Launch App</p>
          </div>
        </Link>
      </header>

      <div id="hero" className="max-w-[1400px] mx-auto flex flex-row items-stretch gap-5 w-full relative xl:px-10 lg:px-10 px-3">
        <div className="flex-1 flex-row xl:flex lg:flex hidden">
          <div className="h-full flex-1 flex justify-center items-center relative">
            <div className="absolute top-48 bubble-container p-[1px]">
              <div className="p-2 bubble">
                <p className="text-4xl text-zinc-400 font-share_sans">300+</p>
                <p className="text-zinc-400 text-sm font-share_mono">Chains</p>
              </div>
            </div>
          </div>
          <div className="hero-token h-full flex-1 flex justify-center items-center relative">
            <Image src="/tokens/sol.svg" className="absolute top-40" alt="" height={70} width={70} />
          </div>
          <div className="h-full flex-1 flex justify-center items-center relative">
            <div className="absolute bottom-60 bubble-container -left-14 p-[1px]">
              <div className="p-2 bubble">
                <p className="text-4xl text-zinc-400 font-share_sans">1000+</p>
                <p className="text-zinc-400 text-sm font-share_mono">Tokens</p>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-1/3 lg:w-1/3 w-full flex flex-col items-center justify-center gap-5">
          <div id="hero-text" className="flex-1 gap-3 flex flex-col justify-end items-center z-10">
            <p className="text-[#c2dadf] text-center font-sofia font-light text-2xl">The only privacy bridge committed to</p>
            <h1 id="banner-text" className="xl:text-7xl lg:text-6xl text-5xl xl:text-nowrap md:text-nowrap text-wrap text-center font-sofia font-semibold">providing low fees and rewarding holders</h1>
          </div>
          <Link href={env.NEXT_PUBLIC_DAPP_URL} target="_blank" id="swap-now-button" className="rounded-md p-[3px] relative primary-button-wrapper">
            <div className="primary-button px-16 py-2 flex items-center justify-center z-10 relative rounded-md h-full w-full">
              <p className="text-lg font-share_mono">Swap Now</p>
            </div>
          </Link>
          <div className="flex-1">
            <SwapDisplay/>
          </div>
        </div>
        <div className="flex-1 flex-row xl:flex lg:flex hidden">
          <div className="hero-token h-full flex-1 flex justify-center items-center relative">
            <Image src="/tokens/eth.svg" className="absolute top-28" alt="" height={70} width={70} />
          </div>
          <div className="hero-token h-full flex-1 flex justify-center items-center relative">
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
        <div id="mesh" className="absolute inset-0 -z-10 overflow-clip">
          <Image src="/graphics/mesh.svg" alt="" fill className="object-cover object-center" />
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

      <div className="bg-[#18181B] w-full pt-40">
        <Section>
          {(visible: boolean) => (
            <section className={`w-full relative xl:px-10 lg:px-10 px-3`}>
              <div className={`w-full h-[400px] max-w-[1400px] mx-auto flex flex-col relative`}>
                <div className="wind-container px-5 flex-1 flex flex-col justify-end xl:pb-5 lg:pb-5 relative">
                  <h2 id="wind" className={`${visible ? "" : "translate-y-10 opacity-0"} transition-all duration-700 font-wind xl:text-6xl lg:text-6xl text-4xl text-wrap text-blue-300 py-2 z-10`}>Welcome to Zagreus</h2>
                  <Image src="/graphics/welcome-mesh.svg" alt="" className="object-cover" fill />
                  <div className="h-40 w-40 absolute xl:bottom-0 lg:bottom-0 -bottom-12 left-20">
                    <p className="font-bold xl:text-9xl lg:text-9xl text-8xl font-teko section-marker">01</p>
                  </div>
                </div>
                <div className={`${visible ? "" : "translate-y-10 opacity-0"} transition-all duration-700 delay-200 justify-items-start pt-2`}>
                  <p className="font-sofia font-thin text-xl text-center p-5 xl:px-20 lg:px-20">The first ever privacy bridge dedicated entirely to reducing fees while rewarding holders. With Zagreus you can swap and send tokens privately through our Zagswap token swap or participate in rev share opportunities with our Zagshare NFT&apos;s and Zagpoint rewards network.</p>
                </div>
              </div>
            </section>
          )}
        </Section>
      </div>

      <div className="bg-[#18181B] w-full pt-80">
        <Section>
          {(visible: boolean) => (
            <div className={`bg-[#18181B] w-full half-tone transition-all duration-700`}>
              <div className="flex flex-row">
                <div className="flex-1 border-b-[2px] border-b-[#2F3D46] h-[400px] xl:block lg:block hidden" />
                <section className="w-full max-w-[1400px] xl:px-0 lg:px-0 px-5">
                  <div className="w-full xl:h-[400px] lg:h-[400px] flex xl:flex-row lg:flex-row flex-col-reverse relative">
                    <div className="xl:w-1/2 lg:w-1/2 w-full h-full xl:bg-[#18181B] lg:bg-[#18181B] relative flex items-center justify-center">
                      <Image src="/graphics/lock-draft.png" className={`${visible ? "" : "translate-y-10 opacity-0"} transition-all duration-500 delay-300`} alt="" height={400} width={400} />
                      <div className="absolute bottom-0 top-1/2 left-0 right-0 rounded-br-2xl border-b-[2px] border-b-[#2F3D46] border-r-[2px] border-r-[#2F3D46]" />
                    </div>
                    <div className="xl:w-1/2 lg:w-1/2 w-full h-full relative py-12">
                      <div className="flex flex-col px-10 justify-center items-center gap-5 h-full w-full overflow-clip rounded-tl-xl xl:bg-[#0F0F11] lg:bg-[#0F0F11] z-10 relative">
                        <h2 className={`${visible ? "" : "translate-y-10 opacity-0"} transition-all duration-500 text-5xl font-share_mono text-[#59AED9] w-full`}>ZAGSWAP</h2>
                        <p className={`${visible ? "" : "translate-y-10 opacity-0"} transition-all duration-500 delay-100 text-center px-10 font-sofia font-thin text-xl`}>Conceal your token swap and bridge actions safely with our reverse proxy token swap system</p>
                        <div className={`${visible ? "" : "translate-y-10 opacity-0"} transition-all duration-500 delay-200 flex xl:flex-row lg:flex-row flex-col gap-5 w-full px-10`}>
                          <Link href={env.NEXT_PUBLIC_DAPP_URL} target="_blank" className="rounded-md flex-1 p-[3px] relative primary-button-wrapper">
                            <div className="primary-button py-2 flex items-center justify-center z-10 relative rounded-md h-full w-full">
                              <p className="text-lg font-share_mono">Swap Now</p>
                            </div>
                          </Link>
                          <Link className={`flex-1 secondary-button-wrapper p-[3px] rounded-lg`} href={env.NEXT_PUBLIC_DAPP_URL}>
                            <div className="secondary-button py-2 flex items-center justify-center z-10 relative rounded-md h-full w-full">
                              <p className="text-lg font-share_mono">Find out more</p>
                            </div>
                          </Link>
                        </div>
                        <p className="w-full text-right text-md font-kode text-[#ffffff50]">9921-0028-1266-2164</p>
                      </div>
                      <div className="absolute bottom-1/2 -translate-x-[2px] top-0 left-0 right-0 rounded-tl-2xl border-t-[2px] border-t-[#2F3D46] border-l-[2px] border-l-[#2F3D46]" />
                      <div className="px-40 py-5 absolute xl:-top-20 lg:-top-20 -top-16 right-20 xl:border-[2px] lg:border-[1px] xl:border-[#ffffff50] lg:border-[#ffffff50] flex">
                        <p className="font-bold xl:text-9xl lg:text-9xl text-8xl font-teko section-marker">02</p>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="flex-1 border-t-[2px] border-t-[#2F3D46] h-[400px] xl:block lg:block hidden" />
              </div>
            </div>
          )}
        </Section>
      </div>

      <div className="bg-[#0F0F11] w-full pt-80">
        <Section>
          {(visible: boolean) => (
            <section className={`w-full relative xl:px-10 lg:px-10 px-3`}>
              <div className={`${visible ? "" : "translate-y-10 opacity-0"} w-full max-w-[1400px] mx-auto flex flex-col relative transition-all duration-700`}>
                
              </div>
            </section>
          )}
        </Section>
      </div>
      
      <footer className="w-full xl:px-10 lg:px-10 px-3 max-w-[1400px] mx-auto min-h-80 border-t-[1px] border-t-[#2F3D46]">
        <div className="w-full min-h-80 max-w-[1400px] mx-auto flex flex-col relative border-b-[1px] border-b-[#2F3D46]">
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
        <div className="flex xl:flex-row lg:flex-row flex-col max-w-[1400px] justify-between mx-auto py-6">
          <p className="font-sofia font-thin xl:text-md lg:text-md text-sm">(c) 2025 Zagreus</p>
          <p className="font-sofia font-thin xl:text-md lg:text-md text-sm">CA: 0x000000000000000000000000000000000000dead </p>
        </div>
      </footer>
    </main>
  );
}