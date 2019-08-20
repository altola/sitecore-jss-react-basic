// eslint-disable-next-line no-unused-vars
import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest
} from "@sitecore-jss/sitecore-jss-manifest";

/**
 * Adds the ProductList component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: "ProductList",
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: "heading", type: CommonFieldTypes.SingleLineText },
      {
        name: "products",
        type: "multilist",
        source:
          "query:./*[@@templateid='{C5919B99-F112-51F1-B177-6DCDC57A88DD}']"
      }
    ],
    params: [{ name: "top", type: CommonFieldTypes.Number }]
  });

  manifest.addTemplate({
    name: "product-item",
    displayName: "Product Item",
    icon: SitecoreIcon.ShoppingBag,
    fields: [{ name: "productName", type: CommonFieldTypes.SingleLineText }]
  });
}
