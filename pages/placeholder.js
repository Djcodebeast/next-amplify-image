import { useRouter } from "next/router"
import Link from "next/link";
import Image from "next/image";

const Placeholder = () => {
    const router = useRouter();
    const image = Object.keys(router.query);
    return (
        <div className="p-2">
            <section>
                <h2 className='text-4xl font-extrabold dark:text-gray-900'> Image Component with Placeholder Blur </h2>
                <p className='my-4 text-lg text-gray-500'> This Image has a blur placeholder while loading.</p>
                <Image
                    alt="Mountains"
                    src={`https://nextimageproject365120311-dev.s3.amazonaws.com/public/${image}`}
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