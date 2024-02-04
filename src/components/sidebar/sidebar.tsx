import { Box, Button, Typography } from "@mui/material";
import { Fragment } from "react";
import { navLinks } from 'src/config/constants'

const Sidebar = () => {
  return <Box sx={{ width: "30%", padding: '20px', border: '1px solid gray', borderRadius: '8px', boxShadow: ''}}>
    <Typography variant="h5">Category</Typography>
    <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
        {navLinks.map(nav => (
            <Fragment key={nav.route}>
                <Button fullWidth sx={{justifyContent: 'flex-start', height: '50px'}}>
                    {nav.label}
                </Button>
            </Fragment>
        ))}
    </Box>
  </Box>;
};

export default Sidebar;
