import Container from "@/src/components/UI/Container";
import Post from "@/src/components/UI/Post";
import axiosInstance from "@/src/lib/AxiosInstance";
import { IPost } from "@/src/types";

export default async function FoundItems({
  searchParams,
}: {
  searchParams: any;
}) {
  const params = new URLSearchParams(searchParams);
  const { data } = await axiosInstance.get(`/items`, {
    params: { searchTerm: params.get("query")},
  });
  // if (data) {
  //   return <h1 className="text-center text-2xl font-bold flex items-center justify-center h-screen">data is not available</h1>
  // }
  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: IPost) => <Post key={post?._id} post={post} />)}
      </div>
    </Container>
  );
}
