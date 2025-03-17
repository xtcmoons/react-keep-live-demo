import { Suspense, useEffect, useRef } from "react";
import Wrapper from "./Wrapper";
import { KeepAliveContext } from "./KeepAliveContext";


function KeepAlive({ children, active }: { children: React.ReactNode, active: boolean }) {

  const activeEffects = useRef([])
  const deactiveEffects = useRef([])

  const registerActiveEffect = (callback: () => void) => {
    activeEffects.current.push(() => {
      callback()
    })
  }

  const registerDeactiveEffect = (callback: () => void) => {
    deactiveEffects.current.push(() => {
      callback()
    })
  }

  useEffect(() => {
    if (active) {
      activeEffects.current.forEach((effect: () => void) => {
        effect()
      })
    } else {
      deactiveEffects.current.forEach((effect: () => void) => {
        effect()
      })
    }
  }, [active])

  return (
    <KeepAliveContext.Provider value={{ registerActiveEffect, registerDeactiveEffect }}>
      <Suspense>
        <Wrapper active={active}>{children}</Wrapper>
      </Suspense>
    </KeepAliveContext.Provider>
  )
}

export default KeepAlive 