import { createClient } from "contentful";
import { toast } from "react-toastify";

export const client = createClient({
  space: "2ccu87dh2bfy",
  accessToken: "vVLtWqN2PG7tXwqTUDoRJNsfucgqWFSFQNygzlKzf8c",
});

export async function getPage(content: string) {
  try {
    const query = {
      content_type: content,
    };
    const { items } = await client.getEntries(query);
    const { fields } = items[0];
    return fields;
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    }
    throw new Error(`An error occurred while fetching the page - ${content}`);
  }
}
