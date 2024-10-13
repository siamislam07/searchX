import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import createPost from "../services/post";

const useCreatePost = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData) => await createPost(postData),
    onSuccess: () => {
      toast.success("Post Created successful");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
};

export default useCreatePost;
