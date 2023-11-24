import { italianMenu } from '../../../lib/data.js';
import { error } from "@sveltejs/kit";

export function load({ params }) {
  const menuItem = italianMenu.find((menuItem) => menuItem.slug === params.slug);

  if (!menuItem) {
    throw error(404);
  }

  return {
    menuItem
  };
}

