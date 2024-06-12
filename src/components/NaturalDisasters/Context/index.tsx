import { FloodsParams } from 'models/Floods'
import { Dispatch, SetStateAction, createContext, useCallback, useState } from 'react'
export interface ChargeContextProviderProps {
  children: React.ReactNode
}

export interface ChargeContextProviderState {
  updateTable: () => void
  reloadTable: boolean
  updateNfse: () => void
  reloadNfse: boolean
  modal: ControlledModalCharge
  updateModal: Dispatch<SetStateAction<ControlledModalCharge>>
  toogleModal: (key: keyof ControlledModalCharge, uuid?: string) => void
}

export interface ControlledModalCharge {
  floodDetail: boolean
  floodData: FloodsParams 
  subscribeForm: boolean
  dialogConfirmationSubscribe: boolean
  proModal: boolean
}

export const ChargeContext = createContext({}as ChargeContextProviderState )

export function ChargeContextProvider({
  children
}: ChargeContextProviderProps) {
  const [reloadNfse, setReloadNfse] = useState(false)
  const [reloadTable, setReloadTable] = useState(false)

  const [modal, setModal] = useState<ControlledModalCharge>({
    floodData: {},
  } as ControlledModalCharge)

  const updateTable = () => {
    setReloadTable((prevState) => !prevState)
  }

  const updateNfse = () => {
    setReloadNfse((prevState) => !prevState)
  }

  const toogleModal = useCallback(
    (key: keyof typeof modal, uuid = '') =>
      setModal((prevState) => ({ ...prevState, [key]: !prevState[key], uuid })),
    []
  )

  return (
    <ChargeContext.Provider
      value={{
        reloadTable,
        updateTable,
        reloadNfse,
        updateNfse,
        modal,
        updateModal: setModal,
        toogleModal
      }}
    >
      {children}
    </ChargeContext.Provider>
  )
}
