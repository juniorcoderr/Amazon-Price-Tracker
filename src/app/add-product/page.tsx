import { Input } from "@/components/ui/input";
import { addProduct } from "@/actions/productActions";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SubmitButton from "@/components/SubmitButton";

const page = () => {
  return (
    <div className="col-span-9 flex items-center">
      <div className="grow max-w-xs mx-auto flex flex-col mb-50">
        <h1 className="font-bold mt-4 text-center">Add Product</h1>
        <form
          action={async (formData) => {
            "use server";
            const productId = formData.get("productId") as string;
            const session = await auth();
            const userEmail = session?.user?.email;
            if (!userEmail) throw new Error("User not authenticated");
            await addProduct(productId, userEmail);
            if (productId) {
              redirect("/");
            }
          }}
        >
          <label className="text-sm" htmlFor="productId">
            Product Id
          </label>
          <Input
            id="productId"
            name="productId"
            placeholder="Enter product ID, example: B081F1Z9Z7"
          />
          <div className="flex justify-center mt-4">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
