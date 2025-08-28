import Post from '@/components/modules/home/post'
import { useGetAllPostQuery } from '@/redux/features/jsonplaceholder.api';




export default function Home() {
     const { data, isLoading, isError } = useGetAllPostQuery(undefined);

  return (
    <div className='w-full'>


    {/* <Post data={data} isLoading={isLoading} isError={isError}/> */}

    </div>
  )
}
