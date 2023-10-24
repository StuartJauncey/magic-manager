import Menu from "./components/Menu/menu";
import mainMenuConfig from "./configs/menus/main";

const Home = () => {
  return <Menu title={"Magic Manager"} config={mainMenuConfig} />;
};

export default Home;
