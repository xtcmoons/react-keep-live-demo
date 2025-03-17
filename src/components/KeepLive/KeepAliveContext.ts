import React, { useContext, useEffect } from "react";

export const KeepAliveContext = React.createContext<{
  registerActiveEffect: (effectCallback: any) => void;
  registerDeactiveEffect: (effectCallback: any) => void;
}>({
  registerActiveEffect: () => { },
  registerDeactiveEffect: () => { },
})


export const useActiveEffect = (callback: () => void) => {
  const { registerActiveEffect } = useContext(KeepAliveContext)

  useEffect(() => {
    registerActiveEffect(callback)
  }, [])
}

export const useDeactiveEffect = (callback: () => void) => {
  const { registerDeactiveEffect } = useContext(KeepAliveContext)

  useEffect(() => {
    registerDeactiveEffect(callback)
  }, [])
}
