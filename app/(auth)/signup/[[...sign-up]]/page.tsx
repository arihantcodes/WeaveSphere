import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <div className="md:mt-32 mt-2">

      <SignUp />;
    </div>
  )
}