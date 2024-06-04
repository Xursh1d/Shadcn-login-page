import { CardFooter as Footer } from "@/components/ui/card";

export default function CardFooter() {
    return (
        <Footer className="justify-center gap-2 text-sm font-normal">
            <span className="text-primary">No account?</span>
            <a href="" className="text-accent">Create an account</a>
        </Footer>
    )
}
