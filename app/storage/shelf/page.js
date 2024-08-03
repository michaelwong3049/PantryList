"use client"
import { Box, Card, Typography, Button, TextField, Modal } from '@mui/material'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import db from '../../../firestore'
import { query, collection, getDocs, doc, deleteDoc, setDoc, getDoc } from 'firebase/firestore'

export default function Refrigerator() {
    const [items, setItems] = useState([])
    const [itemName, setItemName] = useState('')
    const [addOpen, setAddOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)

    const getPantry = async () => {
        const snapshot = query(collection(db, "shelf"))
        const docs = await getDocs(snapshot)
        const tempItems = []
        docs.forEach((doc) => {
            const data = doc.data();
            tempItems.push({ id: doc.id, ...data })
        })
        setItems(tempItems)
    }

    useEffect(() => {
        getPantry();
    }, [])

    const addItem = async (item) => {
        const docRef = doc(collection(db, 'shelf'), item)
        const docSnap = await getDoc(docRef)
        console.log(docSnap)
        if(docSnap.exists()){
            const { quantity } = docSnap.data()
            console.log("hi")
            await setDoc(docRef, {quantity: quantity + 1})
        }
        else {
            await setDoc(docRef, {quantity: 1})
        }
        await getPantry();
    }

    const removeItem = async (item) => {
        const docRef = doc(collection(db, 'shelf'), item)
        const docSnap = await getDoc(docRef)
        console.log(docSnap)
        if(docSnap.exists()){
            const {quantity} = docSnap.data()
            if(quantity === 1) {
                await deleteDoc(docRef)
            }
            else{
                await setDoc(docRef, {quantity: quantity - 1})
            }
            
            await getPantry();
        }
    }

    const handleAddOpen = () => {
        setAddOpen(true)
    }

    const handleDeleteOpen = () => {
        setDeleteOpen(true)
    }

    const handleAddClose = () => {
        setAddOpen(false)
    }

    const handleDeleteClose = () => {
        setDeleteOpen(false)
    }

    return (
        <Box sx={{ backgroundColor: "#00FFEC", height: "100vh" }}>
            <Typography sx={{ display: "flex", justifyContent: "center", fontSize: "50px", fontWeight: "bold", fontFamily: "Poppins", textDecoration: "underline" }}>
                Shelf Items:
            </Typography>

            <Box display="flex" justifyContent="center">
                <Button variant="contained" sx={{marginRight: "10px", backgroundColor: "#00ff00"}} onClick={handleAddOpen}>
                    +Add Item   
                </Button>
                <Button variant="contained" sx={{marginRight: "10px", backgroundColor: "#ff0000"}} onClick={handleDeleteOpen}>
                    -Delete Item
                </Button>
            </Box>

            <Box>
                <Modal open={addOpen} onClose={handleAddClose} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Box>
                        <Card sx={{display: "flex", flexDirection: "column", padding: "50px", marginTo: "20px"}}>
                            <TextField id="outlined-basic" label="Item Name" variant="outlined" onChange={(e) => setItemName(e.target.value)}/>
                            <Button variant="contained" sx={{backgroundColor: "#00FF00", fontSize: "20px"}} onClick={() => {
                                addItem(itemName);
                                setItemName('')
                                handleAddClose();
                            }}>
                                +Add
                            </Button>
                        </Card>
                    </Box>
                </Modal>
                <Modal open={deleteOpen} onClose={handleDeleteClose} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Box>
                        <Card sx={{display: "flex", flexDirection: "column", padding: "50px", marginTop: "20px"}}>
                            <TextField id="outlined-basic" label="Item Name" variant="outlined" onChange={(e) => setItemName(e.target.value)} />
                            <Button variant="contained" sx={{backgroundColor: "#FF0000", fontSize: "20px"}} onClick={() => {
                                removeItem(itemName);
                                setItemName('');
                                handleDeleteClose();
                            }} >
                                -Delete
                            </Button>
                        </Card>
                    </Box>
                </Modal>
            </Box>


            <Box m="10px" sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                {items.map((item) => (
                    <Card sx={{ padding: "50px", maxWidth: "300px" }} key={item.id}>
                        <Typography sx={{ fontFamily: "Poppins", fontSize: "30px", mb: "10px" }}>
                            {item.id}
                        </Typography>
                        <Typography sx={{ fontFamily: "Poppins", fontSize: "20px", mb: "10px" }}>
                            Quantity: {item.quantity} 
                        </Typography>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}
