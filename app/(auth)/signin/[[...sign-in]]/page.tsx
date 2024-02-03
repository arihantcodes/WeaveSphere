
import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <div className="md:mt-32 mt-5">
       <SignIn/>;
    </div>
  )
}