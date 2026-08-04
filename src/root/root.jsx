import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/home";
import Exhibitions from "../pages/Exhibitions/exhibitions";
import News from "../pages/News/news";
import NewsDetail from "../pages/NewsDetail/newsDetail";
import OurStory from "../pages/OurStory/OurStory";
import ExhibitionDetail from "../pages/ExhibitionDetail/exhibitiondetail";
import PlanVisit from "../pages/PlanVisit";
import Teams from "@/pages/Teams";
import Collections from "@/pages/CarpetManagement/Collections/Collections";
import CollectionDetail from "@/pages/CarpetManagement/Collections/collection-detail";
import Carpets from "@/pages/CarpetManagement/Carpets";
import CarpetDetail from "@/pages/CarpetManagement/Carpets/carpet-detail";
import TeamDetail from "@/pages/Teams/Teams-detail";
import Artists from "@/pages/Artists";
import ArtistDetail from "@/pages/Artists/Artists-detail";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/exhibitions"} element={<Exhibitions />} />
          <Route path="/exhibitions/:id" element={<ExhibitionDetail />} />
          <Route path={"/news"} element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />

          <Route path="/our-story" element={<OurStory />} />

          <Route path={"/collections"} element={<Collections />} />
          <Route path={"/collections/:id"} element={<CollectionDetail />} />

          <Route path={"/carpets/:id"} element={<Carpets />} />
          <Route path={"/carpet-detail/:id"} element={<CarpetDetail />} />

          <Route path={"/plan-your-visit"} element={<PlanVisit />}></Route>
          <Route path={"/teams"} element={<Teams />}></Route>
          <Route path={"/teams/:id"} element={<TeamDetail />}></Route>

          <Route path={"/artists"} element={<Artists />}></Route>
          <Route path={"/artists/:id"} element={<ArtistDetail />}></Route>

          <Route element={<PrivateRoute />}></Route>
        </Route>

        {/* <Route path={`*`} element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};
export default Root;
