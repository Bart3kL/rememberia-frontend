import { createClient } from "contentful";

export const client = createClient({
  space: "2ccu87dh2bfy",
  accessToken: "vVLtWqN2PG7tXwqTUDoRJNsfucgqWFSFQNygzlKzf8c",
});

export async function getPage(content: string) {
  const query = {
    content_type: content,
  };
  const { items } = await client.getEntries(query);
  const { fields } = items[0];
  return fields;
}
