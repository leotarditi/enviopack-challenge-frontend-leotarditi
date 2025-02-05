import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Product } from "./Product";

const mockProduct = {
  id: 21,
  title: "Celular Samsung A01 Core 16GB Azul",
  brand: "Samsung",
  sku: "MDRL1V4CBAHB7LBK",
  price: 15999,
  discount: 0,
};

describe("<Product />", () => {
  it("Should render product", () => {
    render(<Product product={mockProduct} />);

    expect(screen.getByText("Celular Samsung A01 Core 16GB Azul")).toBeInTheDocument();
    expect(screen.getByText("$ 15.999,00")).toBeInTheDocument();
  });

  it("Should render product image with correct alt text", () => {
    render(<Product product={mockProduct} />);

    const imgElement = screen.getByAltText(mockProduct.title);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "/assets/images/image-product.jpg");
  });

  it("Should format price correctly", () => {
    render(<Product product={mockProduct} />);

    const priceElement = screen.getByText("$ 15.999,00");
    expect(priceElement).toBeInTheDocument();
  });

  it("Should render product with discount", () => {
    const discountedProduct = { ...mockProduct, price: 15999, discount: 10 };
    render(<Product product={discountedProduct} />);

    expect(screen.getByText(discountedProduct.title)).toBeInTheDocument();
    expect(screen.getByText("$ 14.399,10")).toBeInTheDocument();
  });

  it("Should apply discount class when product has discount", () => {
    const discountedProduct = { ...mockProduct, price: 15999, discount: 10 };
    render(<Product product={discountedProduct} />);

    const priceElement = screen.getByText("$ 14.399,10");
    expect(priceElement).toHaveClass("discount");
  });

  it("Should not apply discount class when product has no discount", () => {
    render(<Product product={mockProduct} />);

    const priceElement = screen.getByText("$ 15.999,00");
    expect(priceElement).not.toHaveClass("discount");
  });

  it("Should render original price and discounted price when product has discount", () => {
    const discountedProduct = { ...mockProduct, price: 15999, discount: 10 };
    render(<Product product={discountedProduct} />);

    expect(screen.getByText("$ 14.399,10")).toBeInTheDocument();
  });
});