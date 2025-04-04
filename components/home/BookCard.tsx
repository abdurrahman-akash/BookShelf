import BookCover from "@/components/home/BookCover"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BookCard({
    id,
    title,
    genre,
    color,
    coverUrl,
    isLoanedBook = false,
}: Book) {
    return (
        <li className={cn(isLoanedBook && "sm:w-52 w-full")}>
            <Link
            href={`/books/${id}`}
            className={cn(isLoanedBook && "w-full flex flex-col items-center")}
            >
            <BookCover coverColor={color} coverImage={coverUrl} />

            <div className={cn("mt-4", !isLoanedBook && "sm:max-w-40 max-w-28")}>
                <p className="book-title">{title}</p>
                <p className="book-genre">{genre}</p>
            </div>

            {isLoanedBook && (
                <div className="mt-3 w-full">
                <div className="book-loaned">
                    <Image
                    src="/icons/calendar.svg"
                    alt="calendar"
                    width={18}
                    height={18}
                    className="object-contain"
                    />
                    <p className="text-light-100">11 days left to return</p>
                </div>

                <Button className="book-btn bg-dark-600 text-white">Download receipt</Button>
                </div>
            )}
            </Link>
        </li>
    )
}