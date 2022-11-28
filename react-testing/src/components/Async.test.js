import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  //  not good because we are sending real request, better use moc as below
  //   test("renders posts if request succeeds", async () => {
  //     render(<Async />);
  //     const listItemElements = await screen.findAllByRole(
  //       "listitem",
  //       {},
  //       { timeout: 1000 }
  //     ); // by default it is 1000
  //     expect(listItemElements).not.toHaveLength(0);
  //   });

  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn(); // mock fetch function
    window.fetch.mockResolvedValueOnce({
      // moch the result of calling fetch
      json: async () => {
        return [
          {
            id: "p1",
            title: "First Post",
          },
        ];
      },
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 1000 }
    ); // by default it is 1000
    expect(listItemElements).not.toHaveLength(0);
  });
});
