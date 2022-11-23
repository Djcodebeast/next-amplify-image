import Link from "next/link"

const Layout = ({ children }) => {


    return (
        <main className="min-h-screen max-w-screen-lg mx-auto sm:p-16 flex flex-1 flex-col font-karla">
            <header>
                <h1 className='mb-4 text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'> Nextjs Image Optimization Demo with Amplify Storage</h1>

                <p className='mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'> This demonstrates the usage of the <code className='text-orange-500'>next/image</code> component with Amplify Storage as image source.</p>
                <p className='mb-6 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400'> This demo assumes you use Amplify Storage for images. We will also be implementing the examples in this Nextjs Image
                    <Link href={'https://image-component.nextjs.gallery/'} className='font-medium text-blue-600 dark:text-blue-500 hover:underline' passHref> example. </Link>
                </p>
            </header>
            {children}

        </main>
    )
}

export default Layout