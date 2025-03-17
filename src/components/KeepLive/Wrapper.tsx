import { useRef } from "react"

function Wrapper({ children, active }: { children: React.ReactNode, active: boolean }) {
    const resolveRef = useRef<any>(null)

    if (active) {
        resolveRef.current && resolveRef.current()
    } else {
        throw new Promise((resolve) => {
            resolveRef.current = resolve
        })
    }
    return children
}

export default Wrapper