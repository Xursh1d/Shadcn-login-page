import { CardContent as Content } from "@/components/ui/card";
import HeaderButtons from "./HeaderButtons";
import LinearTitle from "./LinearTitle";
import LoginForm from "./LoginForm";

export default function CardContent() {
    return (
        <Content className="space-y-4">
            <HeaderButtons />
            <LinearTitle />
            <LoginForm />
        </Content>
    )
}
