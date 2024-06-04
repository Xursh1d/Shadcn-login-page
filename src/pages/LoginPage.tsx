import { Card } from "@/components/ui/card";
import CardContent from "./components/CardContent";
import CardFooter from "./components/CardFooter";
import CardHeader from "./components/CardHeader";

export function LoginPage() {
    return (
        <Card className="w-[344px] font-inter space-y-5">
            <CardHeader />
            <CardContent />
            <CardFooter />
        </Card>
    )
}
