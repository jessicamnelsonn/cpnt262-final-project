import { italianMenu } from '../../../lib/data.js';

export function load({ params }) {
  const menuItem = italianMenu.find((menuItem) => menuItem.slug === params.slug);
  
	return {
      menuItem
  };
}


