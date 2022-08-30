import { Routes, Route } from "react-router-dom";
import {
  ChooseTaesan,
  Community,
  DailyTikkeeul,
  DetailPost,
  FindPassword,
  LoginPage,
  MyPage,
  Ranking,
  RealtimeChatting,
} from "./page";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DailyTikkeeul />} />
      <Route path="/choosetaesan" element={<ChooseTaesan />} />
      <Route path="/community" element={<Community />} />
      <Route path="/detailpost" element={<DetailPost />} />
      <Route path="/findpassword" element={<FindPassword />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/realtimechatting" element={<RealtimeChatting />} />
    </Routes>
  );
};
export default Router;
