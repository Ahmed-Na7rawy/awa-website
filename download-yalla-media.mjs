import fs from 'fs';
import path from 'path';

const downloads = [
  // Logos & Core Brand
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/yallalogo-01-300x127.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/yalla_drinks_primary_logo.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/frappit-01.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/banners/frappit_brand_banner_logo.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/smoozy-01.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/banners/smoozy_brand_banner_logo.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/koffi-01.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/banners/koffi_brand_banner_logo.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/frape1-1.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/banners/frappit_iced_cup_lifestyle.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/smoozy1-1.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/banners/smoozy_fruit_cup_lifestyle.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/koffi1-1.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/banners/koffi_hot_mug_lifestyle.png'
  },

  // Category Cards & Badges
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/Frappit-300x127.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/categories/category_frappit_logo.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/Smoozy-300x127.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/categories/category_smoozy_logo.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/koffi-300x127.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/categories/category_koffi_logo.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/other-300x127.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/categories/category_specialty_others_logo.png'
  },

  // Frapp It Products
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/caramel-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/frappit/frappit_caramel_frappe_pouch.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/coffee-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/frappit/frappit_classic_coffee_frappe_pouch.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/chocolate-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/frappit/frappit_chocolate_fudge_frappe_pouch.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/cookies-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/frappit/frappit_cookies_and_cream_frappe_pouch.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/frappe-base-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/frappit/frappit_neutral_frappe_base_pouch.png'
  },

  // Smoozy Products
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/smoozy-frappe-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/smoozy/smoozy_fruit_smoothie_base_pouch.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/vanilla-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/smoozy/smoozy_french_vanilla_smoothie_pouch.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/yogurt-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/smoozy/smoozy_greek_yogurt_smoothie_pouch.png'
  },

  // Koffi & Hot Beverages Products
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/2in1-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/koffi/koffi_2in1_unsweetened_coffee_mix_pouch.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/3in1-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/koffi/koffi_3in1_rich_specialty_coffee_mix_pouch.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/cappuccino-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/koffi/koffi_creamy_cappuccino_mix_pouch.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/latte-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/koffi/koffi_french_vanilla_latte_pouch.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/hot-chocolate-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/koffi/koffi_swiss_hot_chocolate_pouch.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/white-hot-chocolate-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/koffi/koffi_white_hot_chocolate_pouch.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/sahlab-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/koffi/koffi_traditional_oriental_sahlab_pouch.png'
  },
  {
    url: 'https://yalla-drinks.com/wp-content/uploads/2021/04/chai-latte-300x300.png',
    dest: 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react/public/images/yalla-drinks/koffi/koffi_spiced_chai_latte_pouch.png'
  }
];

async function run() {
  for (const item of downloads) {
    try {
      console.log(`Downloading: ${item.url}`);
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(item.dest, Buffer.from(buffer));
      console.log(`Saved: ${path.basename(item.dest)}`);
    } catch (err) {
      console.error(`Failed ${item.url}: ${err.message}`);
    }
  }
  console.log('ALL DOWNLOADS COMPLETE!');
}

run();
