import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";

import { ScreenVariantProvider } from "../components/plasmic/blank_project/PlasmicGlobalVariant__Screen";
import { PlasmicHomepage } from "../components/plasmic/blank_project/PlasmicHomepage";


function Homepage() {



  return(
  <>
    <ChakraProvider>
      <PlasmicHomepage />
    </ChakraProvider>
  </>)
}

export default Homepage;
