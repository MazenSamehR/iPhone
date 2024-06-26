import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from "../utils"
import { useState } from "react"
import { useEffect } from "react"

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  const handelResize = () => {
    if(window.innerWidth < 760){
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handelResize)
    return () => {
      window.removeEventListener("resize", handelResize)
    }
  }, [])
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    })

    gsap.to("#cta", {
      opacity: 1,
      translateY: 0,
      delay: 2,
      stagger: 0.5,
    })
  },[])
  return (
    <section className="w-full nav-height bg-black relative">
          <div className="h=5/6 w-full flex-center flex-col">
            <p id= "hero" className="hero-title">iphone 15 Pro</p>
            <div className="md:w-10/12 w-9/12">
              <video className="pointer-events-none" autoPlay muted playsInline={true} key= {videoSrc}>
                <source src={videoSrc} type="video/mp4"/>
              </video>
            </div>
          </div>
          <div id= "cta" className="flex flex-col items-center opacity-0 translate-y-20">
            <a href="#highlights" className="btn">Buy</a>
            <p className="font-semibold text-xl">From $999 or $41.62/mo. for 24 mo</p>
          </div>
        </section>
  )
}

export default Hero