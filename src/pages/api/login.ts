import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email = "", password = "" } = req.body;
  if (email === "test@test.com" && password === "1234") {
    const token = "mock-token-123";

    res.setHeader(
      "Set-Cookie",
      serialize("token", token, {
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 1일
      })
    );

    return res.status(200).json({
      token,
      user: { id: "1", name: "테스트유저", email },
    });
  }

  return res.status(401).json({ message: "인증 실패" });
}
