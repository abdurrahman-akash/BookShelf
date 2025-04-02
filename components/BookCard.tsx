import BookCover from "@/components/BookCover"
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
        <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
            <Link 
                href={`/book/${id}`}
                className={cn(isLoanedBook && "w-full flex flex-col items-center")}>
                <BookCover
                    coverColor={color}
                    coverImage={coverUrl}
                />
            </Link>

            <div className={cn("mt-4", !isLoanedBook && "xs:max-w-40 mx-w-28")}>
                <p className="book-title">{title}</p>
                <p className="book-genre">{genre}</p>
            </div>

            {isLoanedBook && (
                <div className="mt-4 w-full">
                    <div className="book-loaned">
                        <Image
                            src="/icons/calender.svg"
                            alt="calender"
                            width={22}
                            height={22}
                            className="object-contain"
                        />
                    </div>

                    <p className="text-light-100">11 days left to return</p>

                    <Button className="book-btn">
                    Download Receipt
                    </Button>
                </div>
            )}

        </li>
    )
}