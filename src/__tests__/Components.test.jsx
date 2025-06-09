import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import { About } from "../features/About/About";

describe("Components", () => {
  describe("Navbar", () => {
    it("should render logo", () => {
      render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>,
      );
      expect(screen.getByAltText("logo Ihsan")).toBeInTheDocument();
    });

    it("should render navigation menu", () => {
      render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>,
      );
      expect(screen.getByText("Montres")).toBeInTheDocument();
      expect(screen.getByText("Accueil")).toBeInTheDocument();
      expect(screen.getByText("Collections")).toBeInTheDocument();
    });
  });

  describe("Header", () => {
    it("should render video element", () => {
      render(<Header />);
      const video = screen.getByText(
        /Votre navigateur ne prend pas en charge la vidéo/,
      );
      expect(video).toBeInTheDocument();
    });
  });

  describe("About", () => {
    it("should render about page content", () => {
      render(<About />);
      expect(screen.getByText("À Propos d'Ihsan")).toBeInTheDocument();
      expect(
        screen.getByText("Page À Propos - En cours de développement"),
      ).toBeInTheDocument();
    });
  });
});
