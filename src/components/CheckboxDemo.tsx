import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "./ui/label"

interface CheckboxDemoProps {
    label: string,
    id: string
}
export function CheckboxDemo({ label, id }: CheckboxDemoProps) {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id={id} />
            <Label htmlFor={id} className={"font-normal"}>{label}</Label>
        </div>
    )
}
