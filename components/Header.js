"use client"
import { AppBar, Typography, Box } from '@mui/material'
import '@fontsource/poppins'

import Link from 'next/link'

export default function Header() {
    return (
        <AppBar position="relative" sx={{ backgroundColor: "#FFA500" }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" px={3} py={2} my="5px">
                <Link href="/">
                    <Typography mx="50px" sx={{color: "#000000",fontSize: "35px", fontFamily: "Poppins", fontWeight: "bold"}} >
                        PantryList
                    </Typography>
                </Link>

            </Box>
        </AppBar>
    )
}
