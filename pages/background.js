import { useRouter } from "next/router"
import Link from "next/link";
import Image from "next/image";

const Background = () => {
    const router = useRouter();
    const image = Object.keys(router.query);
    // console.log(data)
    return (
        <div className="p-2">
            <section>
                <Image
                    alt={image}
                    src={`https://nextimageproject365120311-dev.s3.amazonaws.com/public/${image}`}
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

