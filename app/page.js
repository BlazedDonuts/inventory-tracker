'use client'
import Image from "next/image";
import {useState, useEffect} from 'react'
import {firestore} from '@/firebase'
import {Box, Typography} from '@mui/material'
import { collection, getDocs, query } from "firebase/firestore";

export default function Home() {
  const [inventory, setInventory] = useState({})
  const [open, setOpen] = useState([])
  const [itemName, setItemName] = useState('')

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'))
    const doc = await getDocs(snapshot)
    const inventoryList = []
    DocumentSnapshot.forEach((doc) => {
      inventory:List.push({
        name: doc.id,
        ...doc.data(),
      })
    })
    setInventory(inventoryList)
  }

  useEffect(() => {
    updateInventory()
  }, []
)

  return (
    <Box>
      <Typography variant = "h1">Inventory Management</Typography>

      {inventory.forEach((item) => {
          return ( 
          <>
          {item.name}
          {item.count}
          </>
          )
        })}



    </Box>
  )
}

