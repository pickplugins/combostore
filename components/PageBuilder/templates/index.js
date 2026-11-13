/**
 * Every template in this folder, as one list. Each template lives in its own
 * folder (Name/index.js, plus any extra files it needs later), so the
 * imports below resolve to Name/index.js.
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

// import Organic from './Organic';
// import HomeKitchen from './HomeKitchen';
// import BeautyCosmetics from './BeautyCosmetics';
// import Grocery from './Grocery';
// import KitchenAccessories from './KitchenAccessories';
// import IslamicLifestyle from './IslamicLifestyle';
// import GhorerBazar from './GhorerBazar';
import BikeParts from './BikeParts';
// import OrganicFruits from './OrganicFruits';
// import ComboStore from './ComboStore';
// import AuraGem from './AuraGem';
import WonderJoy from './WonderJoy';
import Nexora from './Nexora';
import Noorani from './Noorani';
import Aanchal from './Aanchal';
import Aurelle from './Aurelle';
import Glowbie from './Glowbie';
import Fashora from './Fashora';
import Voltix from './Voltix';
import Haatbox from './Haatbox';
import Kaath from './Kaath';
import Oushodh from './Oushodh';
import Pathok from './Pathok';
import Tuntuni from './Tuntuni';
import Kodom from './Kodom';
import Ghori from './Ghori';
import Sugondhi from './Sugondhi';
import Jhola from './Jhola';
import Muthofon from './Muthofon';
import Upohar from './Upohar';
import Nolen from './Nolen';
import Dutipata from './Dutipata';
import Adda from './Adda';
import Pauruti from './Pauruti';
import Ashbab from './Ashbab';
import Posha from './Posha';
import Khelaghor from './Khelaghor';
import Angina from './Angina';
import Dolna from './Dolna';
import Juta from './Juta';
import Handi from './Handi';
// import EhansMart from './EhansMart';
// import EhansMartV2 from './EhansMartV2';

var templates = [...BikeParts, ...WonderJoy, ...Nexora, ...Noorani, ...Aanchal, ...Aurelle, ...Glowbie, ...Fashora, ...Voltix, ...Haatbox, ...Kaath, ...Oushodh, ...Pathok, ...Tuntuni, ...Kodom, ...Ghori, ...Sugondhi, ...Jhola, ...Muthofon, ...Upohar, ...Nolen, ...Dutipata, ...Adda, ...Pauruti, ...Ashbab, ...Posha, ...Khelaghor, ...Dolna, ...Juta, ...Handi, ...Angina];

export default templates;
