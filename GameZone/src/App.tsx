import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import NavBar from "./components/navBar";
import GamesGrid from "./components/Games/GamesGrid";
function App() {
  return (
    <>
      <Grid
        // h="100vh"
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`,
        }}
        gap={4}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">aside</GridItem>
        </Show>
        <GridItem area="main">
          <GamesGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
