"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {toast} from "sonner";
export default function Home() {
  return (
    <div className="flex items-center justify-center mt-20"> 
<Button variant="outline" onClick={()=> toast.success("hello")}>click me </Button>      
    </div>
  );
}
