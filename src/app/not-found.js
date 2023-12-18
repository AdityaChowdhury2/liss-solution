import Link from 'next/link'
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className='container text-center'>

            <Image src='not-found.svg' width={300} height={300} alt='error' className='mx-auto my-12'></Image>

            <Link href="/" className='mt-12 text-[var(--primary-color)]'>Return Home</Link>
        </div>
    )
}