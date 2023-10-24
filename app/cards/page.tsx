import Menu from "../components/Menu/menu";
import cardMenuConfig from "../configs/menus/cards";

const CardManager = () => {
  return <Menu title={"Card Manager"} config={cardMenuConfig} />;
};

export default CardManager;
