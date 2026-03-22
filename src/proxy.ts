import {clerkMiddleware , createRouteMatcher} from "@clerk/nextjs/server"
import { NextResponse } from "next/server";
const isPublicRoute = createRouteMatcher(["/sign-in(.*" ,"/sign-up(.*)"])

const isOrgSelectionRoute = createRouteMatcher(["/org-selection(.*)"]);


export default clerkMiddleware(async(auth,req)=>{
    const {userId , orgId} = await auth();
//allow public routes 
    if (isPublicRoute(req)){
        return NextResponse.next()
    }

    //protect non-public routes

    if (!userId){
        await auth.protect();
    }

    //allow org selection page
    if (isOrgSelectionRoute(req)){
        return NextResponse.next()
    }


    //for all protected routes ensure org is selected 






})



