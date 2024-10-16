import { useMutation, useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/Categories";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { addClaimRequest, getReceivedClaimRequest } from "../services/ClaimRequest";

export const useAddClaimRequest = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["ADD_CLAIM_REQUEST"],
    mutationFn: async (postData) => await addClaimRequest(postData),
    onSuccess: () => {
      toast.success("Claim Request Created successful");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
};

export const useGetReceivedClaimRequest = () => {
  return useQuery({
    queryKey: ["RECEIVED_CLAIM_REQUEST"],
    queryFn: async () => await getReceivedClaimRequest(),
  });
};