import BackofficeLayout from "@/components/layout/Layout";
import { useRouter } from "next/router";

const UpdateMenuPage = () => {
    const router = useRouter().query.id;
    console.log(router)
    return (
        <BackofficeLayout>
        <h1>Update Menu Page</h1>
        </BackofficeLayout>
    )
}
export default UpdateMenuPage;