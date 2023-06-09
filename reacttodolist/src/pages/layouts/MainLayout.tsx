import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ToDoList } from "../../components/TodoList";
import { HomePage } from "../HomePage";
import { AllTasks } from "../AllTasks";

export function MainLayout() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/alltasks" element={<AllTasks />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
