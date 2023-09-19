import BackofficeLayout from "@/components/layout/Layout";
import { useRouter } from "next/router";

const UpdateMenuCategories = () => {
    const router = useRouter().query.id;

    return (
        <BackofficeLayout>
            <h1>menu category{router}</h1>
        </BackofficeLayout>
    )
}
export default UpdateMenuCategories;