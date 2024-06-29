import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
interface iFormData{
    type:string;
    htmlFor:string;
    id:string;
    name:string;
    placeholder?:string;
    str:string;
}

export function FormData(data:iFormData){
    return(
        <>
            <div className="block mt-4">
                <Label htmlFor={data.htmlFor} className="inline-block w-[10%] text-left">
                {data.str} </Label><Input type={data.type} id={data.id} name={data.name} placeholder={data.placeholder} className="w-[40%] ml-4 inline-block border-black  rounded border"/>
            </div>

        </>
    )
}