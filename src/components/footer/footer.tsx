import Telegram from "@mui/icons-material/Telegram"
import Instagram from "@mui/icons-material/Instagram"
import Youtube from "@mui/icons-material/YouTube"
import { Box, ButtonGroup, Typography } from "@mui/material"
import { format } from 'date-fns'

const Footer = () => {
  return (
    <Box padding={'20px'} sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', bgcolor: 'primary.main', color: 'white' }}>
      <Typography>© {format(new Date(), 'yyyy')} INote. All Right Reserved.</Typography>

      <Box sx={{ display: 'flex', gap: '15px', cursor: 'pointer' }}>
        <Telegram />
        <Instagram />
        <Youtube />
      </Box>
    </Box>
  )
}

export default Footer