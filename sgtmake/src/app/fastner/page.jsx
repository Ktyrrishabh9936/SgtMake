"use client"
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/navigation";


export default function Fastner(){
    const router=useRouter();
    useEffect(()=>{
        router.push("/fastner/bolts");
    },[])
    return <>
        <Sidebar/>
    </>
}