import { auth } from "@/auth";
import Add from "./add";
import { Authorization } from "@/config/authorization.config";

export default  async function Page () {

    return (
       <>
       <Authorization/>
       <Add userID={session?.user?.id}/>
       </>
    )
}