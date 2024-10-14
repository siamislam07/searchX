"use server"

import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const addClaimRequest = async (
  claimRequest: FieldValues
): Promise<any> => {
  try {
    const res = await axiosInstance.post("/claim-request",claimRequest);

    return res.data
  } catch (err: any) {
    throw new Error(err);
  }
};
