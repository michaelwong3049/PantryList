"use client"
import { Box, Card, Typography, Dialog} from '@mui/material'
import { useState, useEffect } from 'react'
import db from '../../../firestore'
import { query, collection, getDocs, addDoc } from 'firebase/firestore'

import FoodSelect from '../../../components/FoodSelect'

export default function Freezer() {
    const [items, setItems] = useState([])

    useEffect(() => {
        const getPantry = async () => {
            const snapshot = query(collection(db, "pantry"))
            const docs = await getDocs(snapshot)
            const tempItems = []
            docs.forEach((doc) => {
                tempItems.push(doc.id)
            })
            setItems(tempItems)
        }
        getPantry();
    }, [])

    const handleCardOpen = () => {
        return(
            <FoodSelect/>
        )
    }

    return(
        <Box sx={{backgroundColor: "#00FFEC", height: "100vh"}}>
            <Box m="10px" sx={{display: "flex" ,justifyContent: "center", alignItems: "center", gap: "10px"}}>
                {items.map((item) => (
                    <Card sx={{padding: "50px"}} key={item} onClick={handleCardOpen}>
                        <Typography sx={{fontFamily: "Poppins", fontSize: "50px"}}>
                            {item}
                        </Typography>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}