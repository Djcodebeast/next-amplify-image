import Image from "next/image";
import { useState, useEffect } from 'react'
import { Storage } from "aws-amplify"


const Placeholder = () => {
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
                <h2 className='text-4xl font-extrabold dark:text-gray-900'> Image Component with Placeholder Blur </h2>
                <p className='my-4 text-lg text-gray-500'> This Image has a blur placeholder while loading.</p>
                <Image
                    alt="Placeholder Blur"
                    src={imageUrl}
                    placeholder="blur"
                    blurDataURL={`data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48RXJyb3I+PENvZGU+SHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ8L0NvZGU+PE1lc3NhZ2U+VGhlIEhUVFAgdmVyc2lvbiBzcGVjaWZpZWQgaXMgbm90IHN1cHBvcnRlZC48L01lc3NhZ2U+PFJlcXVlc3RJZD43MkQ4NUVCQkMxQjg3QUVGPC9SZXF1ZXN0SWQ+PEhvc3RJZD5FdWxFc05sTWVLYnBHNStSVlc1bWFFTWlENzJNQ1pCTW8zbytGWmJuVnBYVVJrV1RQZkxoZC9iSWpoa0pUWDJ3czBOSVJQQVcyNGY1U3BwdUNEVkQwK25qQVkvbDNsVDQ8L0hvc3RJZD48L0Vycm9yPg==`}
                    width={700}
                    height={475}
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                />
            </section>

        </div>
    )
}

export default Placeholder