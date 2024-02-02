"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Uservalidation } from "@/lib/validation/user";
import { z } from "zod";
import Image from "next/image";
import { ChangeEvent } from "react";
interface props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    image: string;
    bio: string;
  };
  btnTitle: string;
}

const Accountprofile = ({ user, btnTitle }: props) => {
  const form = useForm({
    resolver: zodResolver(Uservalidation),
    defaultValues: {
      profile_photo: "",
      name: "",
      bio: "",
      username: "",
    },
  });

  const handleImage = (
    e: ChangeEvent,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
  };
  function onSubmit(values: z.infer<typeof Uservalidation>) {
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-start gap-10"
        >
          <FormField
            control={form.control}
            name="profile_photo"
            render={({ field }) => (
              <FormItem className="flex items-center gap-4">
                <FormLabel className="account-form_image-label">
                  {field.value ? (
                    <Image
                      src={field.value}
                      height={96}
                      width={96}
                      alt="user-profile"
                      priority
                      className="rounded-full object-contain"
                    />
                  ) : (
                    <Image
                      src="/profile.svg"
                      height={50}
                      width={50}
                      alt="user have not profile"
                      className="object-contain"
                    />
                  )}
                </FormLabel>
                <FormControl className="flex-1 text-base-semibold text-gray-200">
                  <Input
                    type="file"
                    accept="image/*"
                    placeholder="Uplaod a photo"
                    className="account-form_image-input"
                    onChange={(e) => handleImage(e,field.onChange)}
                  />
                </FormControl>
            
               
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex items-center gap-4">
                <FormLabel className="text-base-semibold text-light-2">
                  Name
                </FormLabel>
                <FormControl className="flex-1 text-base-semibold text-gray-200">
                  <Input
                    type="text"
                   
                    placeholder="Enter your name"
                    className="account-form_input no-focus"
                    
                  />
                </FormControl>
            
               
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex items-center gap-4">
                <FormLabel className="account-form_image-label">
                 
                  Username
                </FormLabel>
                <FormControl className="flex-1 text-base-semibold text-gray-200">
                  <Input
                    type="text"
                    accept="image/*"
                    placeholder="Enter your username"
                    className="account-form_input no-focus"
                    onChange={(e) => handleImage(e,field.onChange)}
                  />
                </FormControl>
            
               
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Accountprofile;
