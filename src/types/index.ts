import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface ICategory {
  _id: string;
  name: string;
  postCount: number;
  isDeleted: boolean;
  createdAt: string; // ISO 8601 date format
  updatedAt: string; // ISO 8601 date format
  __v: number;
}

export interface IUser {
  _id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  mobileNumber: string;
  profilePhoto: string;
  createdAt?: string; 
  updatedAt?: string;  
  __v?: number;
}

export interface IPost {
  _id: string;
  title: string;
  description: string;
  images: string[]; // Array of image URLs (strings)
  location: string;
  city: string;
  dateFound: string; // ISO 8601 date format
  status: string; // Example: "AVAILABLE"
  isReported: boolean;
  reportCount: number;
  category: ICategory;
  user: IUser;
  questions: string[];  
  createdAt: string; // ISO 8601 date format
  updatedAt: string; // ISO 8601 date format
  __v: number;
}

