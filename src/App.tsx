
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/home";
import Personal from "./pages/Personal";
import PersonalOwnRoom from "./pages/PersonalOwnRoom";
import PersonalUserList from "./pages/PersonalUserList";
import PersonalInvite from "./pages/PersonalInvite";
import Chat from "./pages/Chat";
import Registration from "./pages/Registration";
import SignIn from "./pages/SignIn";
import Advertisement from "./pages/Advertisement";
import News from "./pages/News";
import NewsAdd from "./pages/NewsAdd";
import Events from "./pages/Events";
import EventsAdd from "./pages/EventsAdd";
import Projects from "./pages/Projects";
import ProjectsAdd from "./pages/ProjectsAdd";
import ProjectsApplication from "./pages/ProjectsApplication";
import Universiti from "./pages/Universiti";
import UniversitiAdd from "./pages/UniversitiAdd";
import CommandAdd from "./pages/CommandAdd";
import AddCommandProject from "./pages/AddCommandProject";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/commandadd" element={<CommandAdd />} />
          <Route path="/addcommandproject" element={<AddCommandProject />} />
          <Route path="/personalArea" element={<Personal />}>
            <Route index element={<PersonalOwnRoom />} />
            <Route path="/personalArea/usersList" element={<PersonalUserList />} />
            <Route path="/personalArea/ivite" element={<PersonalInvite />} />
          </Route>
          <Route path="/universiti" element={<Universiti />} />
          <Route path="/universiti/add" element={<UniversitiAdd />} />
          <Route path="/advertisement" element={<Advertisement />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/addnews" element={<NewsAdd />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/addevans" element={<EventsAdd />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/projectsadd" element={<ProjectsAdd />} />
          <Route path="/projects/application" element={<ProjectsApplication />} />
        </Route>
        <Route path="/registration" element={<Registration />} />
        <Route path="/sign_in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
