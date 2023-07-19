interface RatingProps {
    rating: number | null;
}

const Rating = ({ rating }: RatingProps) => {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1);
    return (
        <div className="flex gap-x-1">
            {stars.map((_, index) => (
                <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.66667 9.95016L2.54644 12L3.33334 7.65836L2.91098e-06 4.58359L4.60656 3.95016L6.66667 0L8.72678 3.95016L13.3333 4.58359L10 7.65836L10.7869 12L6.66667 9.95016Z"
                        className={`${
                            rating && index < rating
                                ? "fill-sh-red"
                                : "fill-transparent stroke-sh-red"
                        }`}
                    />
                </svg>
            ))}
        </div>
    );
};

export default Rating;
