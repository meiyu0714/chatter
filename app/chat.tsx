import RealtimeChat from "./realtime-chat";
import supabase from "./supabase";

export default async function Chat({
  inputSource,
  defaultResponseSource,
}: {
  inputSource: string;
  defaultResponseSource: string;
}) {
  const { data: messages } = await supabase
  .from("messages")
  .select("id,text,source,created_at,references")
  .order("created_at", { ascending: true }) // 顺序正过来
  .limit(100);

return (
  <RealtimeChat
    serverMessages={messages ?? []}
    inputSource={inputSource}
    defaultResponseSource={defaultResponseSource}
  />
);

}
