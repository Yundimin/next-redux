import { cookies } from "next/headers";
import HomeClient from "./homeClient";

export default async function HomePage() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  // 토큰이 있다면 임의 유저 정보 설정 (실제 프로젝트에선 API 호출 필요)
  const user = token
    ? { id: "1", name: "테스트유저", email: "test@test.com" }
    : null;

  return <HomeClient user={user} token={token!} />;
}
