import Image from "next/image";
import { Button } from "@/components/ui/button";
import BookCover from "@/components/home/BookCover";

export default function BookOverview({ 
    title, 
    author, 
    genre, 
    rating, 
    total_copies, 
    available_copies, 
    description, 
    color, 
    coverUrl, 
}: Book) {
    return (
        <section className="book-overview">
            <div className="flex flex-col flex-1 gap-5">
                <h1>{title}</h1>

                <div className="book-info">
                    <p>
                        By <span className="font-semibold text-light-200">{author}</span>
                    </p>
                    
                    <p>
                        Category{" "}
                        <span className="font-semibold text-light-200">{genre}</span>
                    </p>

                    <div className="flex flex-row gap-1">
                        <Image src="/icons/star.svg" alt="star" width={22} height={22}></Image>
                        <p>{rating}</p>
                    </div>
                </div>

                <div className="book-copies">
                    <p>
                        Total Books: <span>{total_copies}</span>
                    </p>

                    <p>
                        Available Books: <span>{available_copies}</span>
                    </p>
                </div>

                <p className="book-description">{description} </p>

                <Button>
                    <Image src="/icons/book.svg" alt="book" width={22} height={22} />
                    <p className="font-bebas-neue text-xl text-dark-100">Borrow</p>
                </Button>
            </div>

            <div className="relative flex flex-1 justify-center">
                <div className="relative">
                    <BookCover
                        variant="wide"
                        className="z-10"
                        coverColor={color}
                        coverImage={coverUrl}
                    />

                    <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
                    <BookCover
                        variant="wide"
                        className=""
                        coverColor={color}
                        coverImage={coverUrl}
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}