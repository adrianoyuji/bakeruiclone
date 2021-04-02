import { NextApiResponse, NextApiRequest } from "next";
import categories from "mock/category";

const menuHandler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { method } = request;

  try {
    switch (method) {
      case "GET":
        getMenu(response);
        break;

      default:
        response
          .status(400)
          .json({ statusCode: 400, message: "invalid method" });
        break;
    }
  } catch (err) {
    response
      .status(err.statusCode || 500)
      .json({ statusCode: err.statusCode || 500, message: err.message });
  }
};

const getMenu = async (response: NextApiResponse) => {
  response.status(200).json({ menu: [...categories] });
};

export default menuHandler;
