import { Navbar, Footer } from "src/components";
import { LayoutProps } from "./layout.props";
import { Box } from "@mui/material";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box minHeight={"90vh"}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
