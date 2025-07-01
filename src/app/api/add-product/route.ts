import { NextResponse } from "next/server";
import { addProduct } from "@/actions/productActions";

export async function POST(req: Request) {
  const { productId, userEmail } = await req.json();

  try {
    const product = await addProduct(productId, userEmail);
    return NextResponse.json(product);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
