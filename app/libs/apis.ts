import { Room } from "../models/room";
import sanityClient from "./sanity";
import * as queries from "./sanityQueries";

export async function getFeaturedRoom() {
  try {
    const result = await sanityClient.fetch<Room>(
      queries.getFeaturedRoomQuery,
      {},
      { cache: "no-cache" }
    );
    return result;
  } catch (error) {
    console.error("Error fetching featured room:", error);
    throw error;
  }
}
