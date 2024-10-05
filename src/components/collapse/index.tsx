import { Collapse, List, ListItem, ListItemText } from "@mui/material"
import i18n from "../../i18n"

const Collapsed = ({ open, handleClose }: any) => {

    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List>
                {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((item, index) => (
                    <ListItem
                        key={index}
                        onClick={handleClose}
                        style={{
                            textAlign: i18n.dir() === 'rtl' ? 'right' : 'left',
                        }}
                    >
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </Collapse>
    )
}

export default Collapsed