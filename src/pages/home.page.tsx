import Post from '@/components/modules/home/post'
import { useGetAllPostQuery } from '@/redux/features/jsonplaceholder.api';




export default function Home() {
     const { data, isLoading, isError } = useGetAllPostQuery(undefined);
     console.log(data)
     console.log(isLoading)
     console.log(isError)
     console.log("home")

  return (
    <div>


    <Post data={data} isLoading={isLoading} isError={isError}/>

    </div>
  )
}
