import fs from 'fs';
import path from 'path';

const yallaMedia = [
  // 1. Brand Logo & Main Web Banner
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/592790437_830975759686713_3429722550411321272_n.jpg?v=1786614758&width=300',
    dest: 'public/images/yalla-drinks/yalla_drinks_primary_logo.jpg'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/yalla_web_banner.png?v=1786626405&width=1920',
    dest: 'public/images/yalla-drinks/banners/yalla_main_web_hero_banner.png'
  },

  // 2. Collection Category Heroes
  {
    url: 'https://yalla-drinks.com/cdn/shop/collections/ChatGPT_Image_13_2026_07_41_27.png?v=1786639363&width=800',
    dest: 'public/images/yalla-drinks/categories/category_frapp_it_hero_cover.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/collections/ChatGPT_Image_13_2026_07_38_08.png?v=1786639353&width=800',
    dest: 'public/images/yalla-drinks/categories/category_smoozy_hero_cover.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/collections/ChatGPT_Image_13_2026_07_37_55.png?v=1786639341&width=800',
    dest: 'public/images/yalla-drinks/categories/category_koffi_hero_cover.png'
  },

  // 3. Frapp it Product Boxes (10 Sachets Each)
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard2-8_9235f6fd-2647-4777-81ab-063e0b3b3140.png?v=1786623133&width=800',
    dest: 'public/images/yalla-drinks/frappit/frappit_spanish_latte_box_10_sachets.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard1-8_6ecfe017-cf0d-4398-b10a-45bc06658b21.png?v=1786623133&width=800',
    dest: 'public/images/yalla-drinks/frappit/frappit_vanilla_frappe_box_10_sachets.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard7-8.png?v=1786623134&width=800',
    dest: 'public/images/yalla-drinks/frappit/frappit_coffee_toffee_box_10_sachets.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard8-8.png?v=1786623134&width=800',
    dest: 'public/images/yalla-drinks/frappit/frappit_pistachio_latte_box_10_sachets.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard6copy2-8.png?v=1786623134&width=800',
    dest: 'public/images/yalla-drinks/frappit/frappit_hazelnut_chocolate_box_10_sachets.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard3-8.png?v=1786623134&width=800',
    dest: 'public/images/yalla-drinks/frappit/frappit_white_mocha_box_10_sachets.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard9-8.png?v=1786623134&width=800',
    dest: 'public/images/yalla-drinks/frappit/frappit_classic_mocha_box_10_sachets.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard6-8.png?v=1786623134&width=800',
    dest: 'public/images/yalla-drinks/frappit/frappit_coffee_sugar_free_box_10_sachets.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard5-8.png?v=1786623134&width=800',
    dest: 'public/images/yalla-drinks/frappit/frappit_caramel_sugar_free_box_10_sachets.png'
  },

  // 4. Smoozy Product Boxes (10 Sachets Each)
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard6copy-8.png?v=1786623134&width=800',
    dest: 'public/images/yalla-drinks/smoozy/smoozy_pink_lemonade_box_10_sachets.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard7copy-8.png?v=1786623134&width=800',
    dest: 'public/images/yalla-drinks/smoozy/smoozy_pina_colada_box_10_sachets.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard8copy-8.png?v=1786623134&width=800',
    dest: 'public/images/yalla-drinks/smoozy/smoozy_mojito_lime_box_10_sachets.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard9copy-8.png?v=1786623134&width=800',
    dest: 'public/images/yalla-drinks/smoozy/smoozy_mixed_berries_box_10_sachets.png'
  },

  // 5. Koffi Product Boxes (10 Sachets Each)
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard7copy3-8.png?v=1786623134&width=800',
    dest: 'public/images/yalla-drinks/koffi/koffi_rich_mocha_box_10_sachets.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard8copy3-8.png?v=1786623134&width=800',
    dest: 'public/images/yalla-drinks/koffi/koffi_roasted_hazelnut_box_10_sachets.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard9copy3-8.png?v=1786623134&width=800',
    dest: 'public/images/yalla-drinks/koffi/koffi_golden_caramel_box_10_sachets.png'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Artboard6copy3-8.png?v=1786623134&width=800',
    dest: 'public/images/yalla-drinks/koffi/koffi_caffe_latte_box_10_sachets.png'
  },

  // 6. Sachet Cup Lifestyle / Preparation Images
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Sachet_Cup-13.jpg?v=1786624499&width=700',
    dest: 'public/images/yalla-drinks/frappit/lifestyle_spanish_latte_iced_glass.jpg'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Sachet_Cup-14.jpg?v=1786624499&width=700',
    dest: 'public/images/yalla-drinks/frappit/lifestyle_vanilla_frappe_iced_glass.jpg'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Sachet_Cup-19.jpg?v=1786624521&width=700',
    dest: 'public/images/yalla-drinks/frappit/lifestyle_coffee_toffee_iced_glass.jpg'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Sachet_Cup-16.jpg?v=1786624511&width=700',
    dest: 'public/images/yalla-drinks/frappit/lifestyle_pistachio_latte_iced_glass.jpg'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Sachet_Cup-03.jpg?v=1786624533&width=700',
    dest: 'public/images/yalla-drinks/frappit/lifestyle_hazelnut_chocolate_iced_glass.jpg'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Sachet_Cup-15.jpg?v=1786624518&width=700',
    dest: 'public/images/yalla-drinks/smoozy/lifestyle_pink_lemonade_cold_glass.jpg'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Sachet_Cup-17.jpg?v=1786624521&width=700',
    dest: 'public/images/yalla-drinks/smoozy/lifestyle_pina_colada_cold_glass.jpg'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Sachet_Cup-02.jpg?v=1786624525&width=700',
    dest: 'public/images/yalla-drinks/smoozy/lifestyle_mojito_lime_cold_glass.jpg'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Sachet_Cup-18.jpg?v=1786624520&width=700',
    dest: 'public/images/yalla-drinks/smoozy/lifestyle_mixed_berries_cold_glass.jpg'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Sachet_Cup-21.jpg?v=1786624505&width=700',
    dest: 'public/images/yalla-drinks/koffi/lifestyle_mocha_hot_mug.jpg'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Sachet_Cup-07.jpg?v=1786624532&width=700',
    dest: 'public/images/yalla-drinks/koffi/lifestyle_hazelnut_hot_mug.jpg'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Sachet_Cup-05.jpg?v=1786624531&width=700',
    dest: 'public/images/yalla-drinks/koffi/lifestyle_caramel_hot_mug.jpg'
  },
  {
    url: 'https://yalla-drinks.com/cdn/shop/files/Sachet_Cup-06.jpg?v=1786624530&width=700',
    dest: 'public/images/yalla-drinks/koffi/lifestyle_caffe_latte_hot_mug.jpg'
  },

  // 7. Video Commercial
  {
    url: 'https://yalla-drinks.com/cdn/shop/videos/c/vp/cf93b7ee98314698a51ed7cd03a7b2fd/cf93b7ee98314698a51ed7cd03a7b2fd.HD-1080p-7.2Mbps-91508955.mp4?v=0',
    dest: 'public/images/yalla-drinks/video/yalla_drinks_official_hero_video.mp4'
  }
];

async function run() {
  const baseDir = 'c:/Users/medoc/OneDrive/Desktop/AWA/Website/awa-group.net/awa-react';
  console.log(`Starting download of ${yallaMedia.length} real Yalla Drinks media assets...`);
  
  let successCount = 0;
  for (const item of yallaMedia) {
    const fullDest = path.join(baseDir, item.dest);
    const destFolder = path.dirname(fullDest);
    if (!fs.existsSync(destFolder)) {
      fs.mkdirSync(destFolder, { recursive: true });
    }

    try {
      console.log(`Downloading: ${path.basename(item.dest)}`);
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(fullDest, Buffer.from(buffer));
      console.log(`  ✓ Saved: ${item.dest} (${(buffer.byteLength / 1024).toFixed(1)} KB)`);
      successCount++;
    } catch (err) {
      console.error(`  ✗ Failed ${item.url}: ${err.message}`);
    }
  }

  console.log(`\n🎉 COMPLETED! Downloaded ${successCount}/${yallaMedia.length} assets with meaningful names.`);
}

run();
