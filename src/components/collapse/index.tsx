import { Collapse, List, ListItem, ListItemText } from "@mui/material"

const Collapsed = ({ open, handleClose }: any) => {

    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List>
                <ListItem onClick={handleClose}>
                    <ListItemText primary="Item 1" />
                </ListItem>
                <ListItem onClick={handleClose}>
                    <ListItemText primary="Item 2" />
                </ListItem>
                <ListItem onClick={handleClose}>
                    <ListItemText primary="Item 3" />
                </ListItem>
                <ListItem onClick={handleClose}>
                    <ListItemText primary="Item 4" />
                </ListItem>
            </List>
        </Collapse>
    )
}

export default Collapsed