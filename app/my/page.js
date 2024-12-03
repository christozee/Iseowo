import { auth } from "@/auth";
import { Authorization } from "@/config/authorization.config";
import My from "./my";

export default async function pages() {
    const session = await auth();

    return (
        <>
        <Authorization/>
        <My userId={session?.user.id/>
        </>
    )
}
