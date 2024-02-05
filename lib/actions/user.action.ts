"use server";
import { connectDB } from "@/lib/mongoose";
import User from "../models/user.model";
import { revalidatePath } from "next/cache";

interface Params{
    userId: string,
    username: string,
    name: string,
    bio: string,
    image: string,
    path: string
}


export async function updateUser(
{userId,username,name,bio,image,path

}:Params
): Promise<void> {
   connectDB();

try {
    await User.findOneAndUpdate(
        {
          id: userId,
        },
        {
          username: username.toLowerCase(),
          name,
          bio,
          image,
          onboarded: true,
        },
        {
          upsert: true,
        }
      );
    
      if (path === "/profile/edit") {
        revalidatePath(path)
      }
} catch (error:any) {
    throw new Error(`filed to create/update user ${error.message}`)
}
}


export async function featchuser(
  userId: string){

  try {
    connectDB();
    return await User.findOne({ id: userId });
    // .populate({
    //   path:"communities",
    //   model:"Community"
    // })
  } catch (error:any) {
    throw new Error(`filed to featch user ${error.message}`)
  }
  }