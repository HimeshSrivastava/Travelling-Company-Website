import {NextResponse} from "next/server";
import {connectDB} from "@/src/lib/mongodb";
import Enquiry from "@/src/modals/Enquiry"

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        await Enquiry.create(body);

        return NextResponse.json({ sucess: true});
    } catch (error) {
        return NextResponse.json(
            { sucess:false, message: "failed" },
            { status: 500 }
        );
    }
}