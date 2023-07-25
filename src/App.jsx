import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage";
import IncomeTransactions from "./components/IncomeTransactions";
import ExpenseTransactions from "./components/ExpenseTransactions";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/income" element={<IncomeTransactions />} />
        <Route path="/expense" element={<ExpenseTransactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
