import Accountprofile from '@/components/forms/Accountprofile'
import React from 'react'
import { currentUser } from '@clerk/nextjs'
const  page = async () => {
  const user = await currentUser()
  const userInfo={};
  const userData={
    id:user?.id,
    objectId:userInfo?._id,
    username:userInfo?.username || user?.username,
    name:userInfo?.name || user?.firstName ||"",
   image:userInfo?.image || user?.imageUrl,
    bio:userInfo?.bio || "",
  }

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 ">
    <h1 className='head-text'>Onbording </h1>
     <p className="mt-3 text-base-regular text-light-2">
      Complete your profile now to use WeaveSphere
     </p>
    

     <section className="mt-9 bg-dark-2 p-10 ">
      <Accountprofile user={userData} btnTitle="Continue"/>
     </section>

    </main>
  )
}

export default page
