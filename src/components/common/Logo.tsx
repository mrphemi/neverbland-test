import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="flex gap-x-2 items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="27"
                viewBox="0 0 33 27"
                fill="none"
            >
                <path
                    d="M26.463 0.408386L29.663 6.80839H24.863L21.663 0.408386H18.463L21.663 6.80839H16.863L13.663 0.408386H10.463L13.663 6.80839H8.86304L5.66304 0.408386H4.06304C2.29504 0.408386 0.879037 1.84039 0.879037 3.60839L0.863037 22.8084C0.863037 24.5764 2.29504 26.0084 4.06304 26.0084H29.663C31.431 26.0084 32.863 24.5764 32.863 22.8084V0.408386H26.463Z"
                    fill="#FC4747"
                />
            </svg>

            <p className="font-medium">TV Blnd</p>
        </Link>
    );
};

export default Logo;