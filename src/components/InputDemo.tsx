import { cn } from "@/lib/utils"
import * as React from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export interface InputDemoProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    startIcon?: string,
    endIcon?: string,
    error?: string,
}

const InputDemo = React.forwardRef<HTMLInputElement, InputDemoProps>(
    ({ className, startIcon, error, type, endIcon, label, ...props }, ref) => {
        const [isOpenPassword, setOpenPassword] = React.useState(false)
        const toggleEyeCallBack = () => setOpenPassword(prev => !prev)

        return (
            <div className="relative flex flex-col">
                {label && <Label className="mb-2" htmlFor={props.name}>{label}</Label>}
                <div className="relative">
                    <Input
                        className={cn(startIcon && "pl-8", endIcon && "pr-8", className)}
                        type={isOpenPassword ? "text" : type}
                        variant={error ? "error" : "default"}
                        ref={ref}
                        {...props}
                    />
                    {startIcon && <img className="absolute -translate-y-1/2 top-1/2 left-3" src={startIcon} alt="start-icon" />}
                    {endIcon && <img onClick={toggleEyeCallBack} className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-3" src={endIcon} alt="end-icon" />}
                </div>
                {error && <span className="mt-1 text-xs text-rose-500">{error}</span>}
            </div>
        );
    }
)
export default InputDemo