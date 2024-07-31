import { Drawer, Box, Typography, Menu, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

export default function Sidebar() {
    const [isOpen, setOpen] = useState(false)

    return(
        <>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={() => setOpen(true)}>
            <MenuIcon/>
        </IconButton>

        <Drawer anchor="right" open={isOpen} onClose={() => setOpen(false)}>
            <Box p={2} width="250px" textAlign="center" role="presentation">
                <Typography variant="h6" component="div">
                    PantryList
                </Typography>
            </Box>
        </Drawer>
        </>
    )
}