import { Button } from "@/components/ui/button";

export default function HeaderButtons() {
    return (
        <div className="space-y-2">
            <Button variant={"outline"} className="gap-2">
                <img src="/facebook.svg" alt="facebook" />
                <span className="font-semibold">Connect with Facebook</span>
            </Button>
            <Button variant={"outline"} className="gap-2">
                <img src="/twitter.svg" alt="facebook" />
                <span className="font-semibold">Connect with Twitter</span>
            </Button>
        </div>
    )
}
