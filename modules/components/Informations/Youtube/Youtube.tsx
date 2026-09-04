import useNavBarViewModel from "../../NavBar/Navbar.viewmodel";
import YoutubeView from "./Youtube.view";
import useYoutubeViewModel from "./Youtube.viewmodel";

export default function Youtube() {
  const viewLogic = useYoutubeViewModel();
  return <YoutubeView {...viewLogic} />;
}
