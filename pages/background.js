import { useState, useEffect } from 'react'
import { Storage } from "aws-amplify"
import Image from "next/image";

const Background = () => {
    const [imageUrl, getImageUrl] = useState([])

    const getUploadedImage = async () => {
        const file = await Storage.get("pexels-marina-leonova-9465701.png", {
            level: "public"
        });
        console.log(file)
        getImageUrl(file)
    }

    useEffect(() => {
        getUploadedImage()
    }, [])
    return (
        <div className="p-2">
            <section>
                <Image
                    alt="Blur Background"
                    src={imageUrl}
                    placeholder="blur"
                    blurDataURL={`data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48RXJyb3I+PENvZGU+SHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ8L0NvZGU+PE1lc3NhZ2U+VGhlIEhUVFAgdmVyc2lvbiBzcGVjaWZpZWQgaXMgbm90IHN1cHBvcnRlZC48L01lc3NhZ2U+PFJlcXVlc3RJZD43MkQ4NUVCQkMxQjg3QUVGPC9SZXF1ZXN0SWQ+PEhvc3RJZD5FdWxFc05sTWVLYnBHNStSVlc1bWFFTWlENzJNQ1pCTW8zbytGWmJuVnBYVVJrV1RQZkxoZC9iSWpoa0pUWDJ3czBOSVJQQVcyNGY1U3BwdUNEVkQwK25qQVkvbDNsVDQ8L0hvc3RJZD48L0Vycm9yPg==`}
                    className="fixed min-h-screen max-w-[100vw] overflow-hidden z-[-1]"
                    quality={100}
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                />

                <p className="m-0 text-2xl leading-10 text-center pt-[40vh] text-white drop-shadow-lg">
                    Image Component
                    <br />
                    as a Background
                </p>
            </section>



            {/* <img src */}
        </div >
    )
}

export default Background

