import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <MantineProvider defaultColorScheme="dark">
      <MainLayout />
    </MantineProvider>
  );
};

export default App;
