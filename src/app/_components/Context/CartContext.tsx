"use client"
import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
} from "react"
import ShowProducs from "@/CarAction/ShowProducts"

// 🟢 type بتاع الـ Product
type Product = {
  id: number
  count: number
  [key: string]: unknown // لو في properties زيادة من الـ API
}

// 🟢 type بتاع الـ context value
type CartContextType = {
  counter: number
  setcounter: React.Dispatch<React.SetStateAction<number>>
}

// 🟢 إنشاء الـ context مع النوع
export const Cartcontsxt = createContext<CartContextType | undefined>(undefined)

// 🟢 Props للـ Provider
type CartProviderProps = {
  children: ReactNode
}



export default function CartcontsxtProvider({ children }: CartProviderProps) {
  const [counter, setcounter] = useState<number>(0)

  async function Getusercount() {
    const res = await ShowProducs()

    if (res.status === "success") {
      let sum = 0
      if (Array.isArray(res.data.products)) {
        res.data.products.forEach((item: Product) => {
          sum += item.count
        })
      }
      setcounter(sum)
    }
  }

  useEffect(() => {
    Getusercount()
  }, [])

  return (
    <Cartcontsxt.Provider value={{ counter, setcounter }}>
      {children}
    </Cartcontsxt.Provider>
  )
}
