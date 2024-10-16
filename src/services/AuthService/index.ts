"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const logout = async()=>{
  cookies().delete("accessToken")
  cookies().delete("refreshToken")
}

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return {
      _id: decodedToken?._id,
      name: decodedToken?.name,
      email: decodedToken?.email,
      mobileNumber: decodedToken?.mobileNumber,
      role: decodedToken?.role,
      status: decodedToken?.status,
      profilePhoto:decodedToken?.profilePhoto
    };
  }
  return decodedToken;
};


export const getNewAccessToken = async()=>{
  try{
    const refreshToken= cookies().get("refreshToken")?.value
    const res =await axiosInstance({
      url:"/auth/refresh-token",
      method:"POST",
      withCredentials:true,
      headers:{
        cookies: `refreshToken=${refreshToken}`
      }
    })

    return res.data
  }catch(err){
throw new Error("Failed to get new access token")
  }
}