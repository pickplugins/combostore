/**
 * Every template in this folder, as one list.
 *
 * Each file default-exports an array holding a single template object, so this
 * barrel concatenates them: a picker can map over `templates` and read `name`,
 * `description`, `thumbnail` and `pages` off each entry.
 *
 * TemplatesLibrary.jsx seeds its picker from this list. A page's `content` is an
 * array of builder blocks here, while the API stores it as a JSON string, so
 * whoever applies a template must `JSON.stringify(page.content)` per page on
 * the way out.
 */

import Organic from './Organic';
import HomeKitchen from './HomeKitchen';
import BeautyCosmetics from './BeautyCosmetics';
import Grocery from './Grocery';
import KitchenAccessories from './KitchenAccessories';
import IslamicLifestyle from './IslamicLifestyle';
import GhorerBazar from './GhorerBazar';

var templates = [...Organic, ...HomeKitchen, ...BeautyCosmetics, ...Grocery, ...KitchenAccessories, ...IslamicLifestyle, ...GhorerBazar];

export default templates;
