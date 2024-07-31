"use client"

import { Box, Container, Typography } from '@mui/material'
import { Card } from '@mui/material'
import '@fontsource/poppins'

import { useState } from 'react'
import Link from 'next/link'



export default function Home() {
    const [isSelected, setSelected] = useState(false)

    return(
        <Container>
            <Box display={"flex"} justifyContent={"center"} my="10px">
                <Typography sx={{fontSize: "50px", fontFamily: "Poppins", textDecoration: "underline", fontWeight: "bold"}} >
                    Choose Your Storage Option:
                </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"Center"} gap="10px">
                <Link href="/storage/shelf" passHref>
                    <Card 
                        variant="outlined"
                        my="10px" 
                        sx={{backgroundColor: "#FFDC00", fontFamily: "Poppins", textDecoration: "none", border:"2px solid black", padding: "20px", width: "200px", display: "flex", justifyContent :"center"}}
                        >
                            Shelf
                    </Card>
                </Link>
                <Link href="/storage/refrigerator">
                    <Card 
                        variant="outlined" 
                        my="10px" 
                        sx={{backgroundColor: "#00B2FF", fontFamily: "Poppins", textDecoration: "none", border:"2px solid black", padding: "20px", width: "200px", display: "flex", justifyContent :"center"}}
                        >
                            Refrigerator
                    </Card>
                </Link>
                <Link href="/storage/freezer">
                    <Card 
                    variant="outlined" 
                    my="10px" 
                    sx={{backgroundColor: "#00FFEC", fontFamily: "Poppins",  textDecoration: "none", border:"2px solid black", padding: "20px", width: "200px", display: "flex", justifyContent :"center"}}
                    >
                        Freezer
                    </Card>
                </Link>
            </Box>
        </Container>
    )
}