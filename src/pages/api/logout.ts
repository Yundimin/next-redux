import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 쿠키 초기화 (빈 값 + 만료시간 과거로)
  res.setHeader(
    "Set-Cookie",
    serialize("token", "", {
      path: "/",
      httpOnly: true,
      expires: new Date(0), // 즉시 만료
    })
  );

  return res.status(200).json({ message: "로그아웃 완료" });
}
