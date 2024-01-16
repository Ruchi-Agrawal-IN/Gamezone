import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Grid
        h="100vh"
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`,
        }}
        gap={4}
      >
        <GridItem area="nav" bg="tomato">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="papayawhip">
            aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="tomato">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
