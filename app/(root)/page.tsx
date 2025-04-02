import BookOverview from '@/components/home/BookOverview'
import BookList from '@/components/home/BookList'
import { sampleBooks } from '@/constants'

export default function Home() {
  return (
    <>
      <BookOverview {... sampleBooks[0]} />

      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  )
}
