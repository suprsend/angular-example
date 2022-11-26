const disableHeaderProperties = {
  headerBackgroundTextField: {
    enabled: false,
  },
  headerBackgroundColor: {
    enabled: false,
  },
  headerBottomBarTextField: {
    enabled: false,
  },
  headerBottomBarColor: {
    enabled: false,
  },
  headerBarHeight: {
    enabled: false,
  },
  alignHeaderLogo: {
    enabled: false,
  },
};

const disableFooterProperties = {
  footerBackgroundTextField: {
    enabled: false,
  },
  footerBackgroundColor: {
    enabled: false,
  },
  footerBottomBarTextField: {
    enabled: false,
  },
  footerBottomBarColor: {
    enabled: false,
  },
  footerBarHeight: {
    enabled: false,
  },
  alignFooterLogo: {
    enabled: false,
  },
  showIcon: {
    enabled: false,
  },
  address: {
    enabled: false,
  },
  showCopyRights: {
    enabled: false,
  },
};

const disableButtonProperties = {
  buttonText: {
    enabled: false,
  },
  actionType: {
    enabled: false,
  },
  buttonBackgroundTextField: {
    enabled: false,
  },
  buttonBackgroundColor: {
    enabled: false,
  },
  buttonTextField: {
    enabled: false,
  },
  buttonTextColor: {
    enabled: false,
  },
  alignButton: {
    enabled: false,
  },
  buttonLeftPadding: {
    enabled: false,
  },
  buttonRightPadding: {
    enabled: false,
  },
  buttonTopPadding: {
    enabled: false,
  },
  buttonBottomPadding: {
    enabled: false,
  },
  buttonBorder: {
    enabled: false,
  },
};

const textBetweenBraces = (values, name) => {
  const brandConfig = values?.data?.$brand;
  let textFieldValue = values[name];
  if (values?.[name] && values?.[name]?.includes("{{")) {
    const text = textFieldValue?.replace(/\{|\}/gi, "");
    const lalala = text.split(".");
    textFieldValue = brandConfig[lalala?.[1]] || values?.[name];
  }
  return textFieldValue;
};

const headerBody = (values) => {
  const brandConfig = values?.data?.$brand;
  const inputBackgroundColor = textBetweenBraces(
    values,
    "headerBackgroundTextField"
  );
  const inputBottomBarColor = textBetweenBraces(
    values,
    "headerBottomBarTextField"
  );
  const brandLogo =
    brandConfig?.logo &&
    !brandConfig?.logo?.startsWith("http://") &&
    !brandConfig?.logo?.startsWith("https://")
      ? `https://ik.imagekit.io/l0quatz6utm/${brandConfig?.logo}`
      : brandConfig?.logo;

  return `<div style="background-color: ${
    values?.headerBackgroundTextField
      ? inputBackgroundColor
      : values?.headerBackgroundColor
      ? values?.headerBackgroundColor
      : "#ffffff"
  }; padding-bottom: 10px; text-align:${
    values?.alignHeaderLogo
  };"><img src=${brandLogo} style="height:80px; width:80px; margin: 20px 25px 10px 25px;"/>
    <div style="height: ${
      values?.headerBarHeight ? values?.headerBarHeight : "1"
    }px; width: 95%; background-color: ${
    values?.headerBottomBarTextField
      ? inputBottomBarColor
      : values?.headerBottomBarColor
      ? values?.headerBottomBarColor
      : brandConfig?.primary_color
  }; margin-top: 10px; margin-left: 12px;"/>
    </div>`;
};

const footerBody = (values) => {
  const brandConfig = values?.data?.$brand;
  const inputBackgroundColor = textBetweenBraces(
    values,
    "footerBackgroundTextField"
  );
  const inputBottomBarColor = textBetweenBraces(
    values,
    "footerBottomBarTextField"
  );
  const socialLinks = [
    {
      image:
        "https://ik.imagekit.io/l0quatz6utm/social/discord_grey_on1FfteE8.png",
      url: brandConfig?.social_links?.discord || "",
      alt: "discord",
    },
    {
      image:
        "https://ik.imagekit.io/l0quatz6utm/social/facebook_grey_xQtNx1QVF.png",
      url: brandConfig?.social_links?.facebook || "",
      alt: "facebook",
    },
    {
      image:
        "https://ik.imagekit.io/l0quatz6utm/social/instagram_grey_MPE2UfV6zt.png",
      url: brandConfig?.social_links?.instagram || "",
      alt: "instagram",
    },
    {
      image:
        "https://ik.imagekit.io/l0quatz6utm/social/linkedin_grey_NQeqZyLHH.png",
      url: brandConfig?.social_links?.linkedin || "",
      alt: "linkedin",
    },
    {
      image:
        "https://ik.imagekit.io/l0quatz6utm/social/medium_grey_9e9oFuQni.png",
      url: brandConfig?.social_links?.medium || "",
      alt: "medium",
    },
    {
      image:
        "https://ik.imagekit.io/l0quatz6utm/social/telegram_grey_Fp707kjoT9.png",
      url: brandConfig?.social_links?.telegram || "",
      alt: "telegram",
    },
    {
      image:
        "https://ik.imagekit.io/l0quatz6utm/social/twitter_grey_9IE1GER3LJ.png",
      url: brandConfig?.social_links?.twitter || "",
      alt: "twitter",
    },
    {
      image:
        "https://ik.imagekit.io/l0quatz6utm/social/youtube_grey_L7yZSlqa0r.png",
      url: brandConfig?.social_links?.youtube || "",
      alt: "youtube",
    },
  ];
  return `<div style="border-bottom: ${
    values?.footerBarHeight ? values?.footerBarHeight : "5"
  }px solid ${
    values?.footerBottomBarTextField
      ? inputBottomBarColor
      : values?.footerBottomBarColor
      ? values?.footerBottomBarColor
      : brandConfig?.primary_color
  }; background-color:${
    values?.footerBackgroundTextField
      ? inputBackgroundColor
      : values?.footerBackgroundColor
      ? values?.footerBackgroundColor
      : "#FAFAFA"
  };"> 
    <span style="display: block;text-align: ${
      values?.alignFooterLogo || "center"
    }; padding: 30px 10px 10px 10px;">
       ${
         values && values.showIcon
           ? socialLinks
               .map((val) => {
                 return (
                   val.url &&
                   `
               <a href=${val?.url} style="text-decoration: none">
                <img
                  src=${val?.image}
                  alt=${val?.alt}
                  width="25px" height="25px"
                  style="margin-left: 8px; vertical-align: middle"
                />
              </a> 
            `
                 );
               })
               .join("")
           : ""
       }
       </span>
       ${
         values?.address
           ? `<p style="color: #717171; text-align: ${
               values?.alignFooterLogo || "center"
             }; font-size: 13px; padding:20px 10px 10px 18px;">${
               values?.address
             }<p>`
           : ""
       }
       ${
         values?.showCopyRights
           ? `<p style="color: #717171; text-align: ${
               values?.alignFooterLogo || "center"
             }; font-size: 13px; padding: 0px 10px 20px 18px">Copyright ©${new Date().getFullYear()} ${
               brandConfig?.brand_name
             }, All rights reserved.</p>`
           : ""
       }
      </div>`;
};

const buttonBody = (values) => {
  const brandConfig = values?.data?.$brand;
  const buttonTextFieldColor = textBetweenBraces(values, "buttonTextField");
  const buttonBackgroundColor = textBetweenBraces(
    values,
    "buttonBackgroundTextField"
  );
  return `
    <div style="text-align: ${values?.alignButton || "center"};">
    <a href=${values?.actionType?.url} target=${values?.actionType?.target}>
      <button style="color: ${
        values?.buttonTextField
          ? buttonTextFieldColor
          : values?.buttonTextColor
          ? values?.buttonTextColor
          : "#ffffff"
      }; background-color: ${
    values?.buttonBackgroundTextField
      ? buttonBackgroundColor
      : values?.buttonBackgroundColor
      ? values?.buttonBackgroundColor
      : brandConfig?.primary_color
  }; padding: ${values?.buttonTopPadding || "10"}px ${
    values?.buttonRightPadding || "20"
  }px ${values?.buttonBottomPadding || "10"}px ${
    values?.buttonLeftPadding || "20"
  }px; border-radius: ${
    values?.buttonBorder || "4"
  }px; border: none; font-size: 14px;">${values?.buttonText} </button>
      </a>
      </div>`;
};

const brandBlock = (values) => {
  console.log("values------------", values);
  return values?.blockType === "brand_footer"
    ? footerBody(values)
    : values?.blockType === "brand_button"
    ? buttonBody(values)
    : headerBody(values);
};

unlayer.registerTool({
  name: "brand_block",
  label: "Brand",
  icon: '<svg width="644" height="639" viewBox="0 0 644 639" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M545.754 112.08L533.194 99.2961L450.636 180.404L285.982 171.557C271.209 170.373 255.314 176.563 245.187 187.562L39.5917 389.546C28.94 400.011 23.0057 414.215 22.8845 427.944C22.7535 442.727 28.444 455.981 38.9085 466.633L170.258 599.269C180.723 609.92 194.405 615.323 208.657 615.976C223.439 616.107 236.693 610.416 247.345 599.952L452.941 397.968C462.526 388.551 468.473 373.29 468.61 357.451L463.211 192.14L545.234 111.55L545.754 112.08ZM183.041 586.701L51.6912 454.065C44.8875 447.14 40.7509 437.601 40.8314 428.096C40.9156 418.594 45.2236 409.127 52.1498 402.323L257.745 200.339C263.614 193.529 273.153 189.386 282.126 189.996C283.179 190.006 283.179 190.006 284.24 190.015L432.011 197.663L382.478 246.326C373.555 240.439 364.081 237.187 353.52 237.094C339.791 236.973 326.544 242.663 316.955 252.084C307.37 261.501 301.445 274.652 301.846 288.912C301.724 302.641 306.879 316.414 316.3 326.003C325.717 335.588 338.347 340.982 353.129 341.112C367.911 341.243 380.63 336.079 390.219 326.658C407.796 309.39 410.159 280.9 396.608 260.715L446.14 212.053L450.645 358.34C450.552 368.903 446.769 378.898 440.375 385.18L234.779 587.163C220.401 601.289 197.17 601.084 183.041 586.702L183.041 586.701ZM343.588 284.526L356.148 297.311L382.247 271.669C389.527 284.407 387.266 301.28 376.614 311.745C363.83 324.304 341.656 324.104 329.1 311.324C316.541 298.54 316.741 276.366 329.521 263.81C335.912 257.532 344.388 254.44 353.371 253.989C358.652 254.036 364.442 255.671 369.173 258.354L343.066 283.995L343.588 284.526Z" fill="#515659" stroke="#515659" stroke-width="4"/></svg>',
  supportedDisplayModes: ["email"],
  propertyStates: (values) => {
    if (values?.blockType === "brand_button") {
      return { ...disableHeaderProperties, ...disableFooterProperties };
    } else if (values?.blockType === "brand_footer") {
      return { ...disableHeaderProperties, ...disableButtonProperties };
    } else {
      return { ...disableFooterProperties, ...disableButtonProperties };
    }
  },
  options: {
    blockType: {
      title: "BRAND BLOCK",
      options: {
        blockType: {
          label: "Block Type",
          defaultValue: "brand_header",
          widget: "dropdown",
        },
      },
    },
    HeaderSettings: {
      title: "HEADER SETTINGS",
      options: {
        headerBackgroundTextField: {
          label: "Background Color Code",
          widget: "text",
        },
        headerBackgroundColor: {
          label: "Background Color Picker",
          widget: "color_picker",
        },
        headerBottomBarTextField: {
          label: "BottomBar Color Code",
          widget: "text",
        },
        headerBottomBarColor: {
          label: "BottomBar Color Picker",
          widget: "color_picker",
        },
        headerBarHeight: {
          label: "Bottom Bar Height",
          defaultValue: "1",
          widget: "counter",
        },
        alignHeaderLogo: {
          label: "Logo Alignment",
          defaultValue: "center",
          widget: "alignment",
        },
      },
    },
    FooterSettings: {
      title: "FOOTER SETTINGS",
      options: {
        footerBackgroundTextField: {
          label: "Background Color Code",
          widget: "text",
        },
        footerBackgroundColor: {
          label: "Background Color Picker",
          widget: "color_picker",
        },
        footerBottomBarTextField: {
          label: "BottomBar Color Code",
          widget: "text",
        },
        footerBottomBarColor: {
          label: "BottomBar Color Picker",
          widget: "color_picker",
        },
        footerBarHeight: {
          label: "Bottom Bar Height",
          defaultValue: "5",
          widget: "counter",
        },
        alignFooterLogo: {
          label: "Social Logos Alignment",
          defaultValue: "center",
          widget: "alignment",
        },
        showIcon: {
          label: "Show Social Icons",
          defaultValue: true,
          widget: "toggle",
        },
        address: {
          label: "Address",
          widget: "text",
        },
        showCopyRights: {
          label: "Show Copy Rights Text",
          defaultValue: true,
          widget: "toggle",
        },
      },
    },
    ButtonSettings: {
      title: "BUTTON SETTINGS",
      options: {
        buttonText: {
          label: "Button Name",
          defaultValue: "Button Name",
          widget: "text",
        },
        actionType: {
          label: "Action Type",
          widget: "link",
        },
        buttonBackgroundTextField: {
          label: "Background Color Code",
          widget: "text",
        },
        buttonBackgroundColor: {
          label: "Background Color Picker",
          widget: "color_picker",
        },
        buttonTextField: {
          label: "Text Color Code",
          widget: "text",
        },
        buttonTextColor: {
          label: "Text Color Picker",
          widget: "color_picker",
        },
        alignButton: {
          label: "Alignment",
          defaultValue: "center",
          widget: "alignment",
        },
        buttonLeftPadding: {
          label: "Left Padding",
          defaultValue: "20",
          widget: "counter",
        },
        buttonRightPadding: {
          label: "Right Padding",
          defaultValue: "20",
          widget: "counter",
        },
        buttonTopPadding: {
          label: "Top Padding",
          defaultValue: "10",
          widget: "counter",
        },
        buttonBottomPadding: {
          label: "Bottom Padding",
          defaultValue: "10",
          widget: "counter",
        },
        buttonBorder: {
          label: "Rounded Border",
          defaultValue: "4",
          widget: "counter",
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return brandBlock(values);
      },
    }),
    exporters: {
      email: function (values) {
        return brandBlock(values);
      },
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
  validator(data) {
    return [];
  },
});

// unlayer.registerTool({
//   name: 'brand_footer',
//   label: 'Footer',
//   icon: '<svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 21.2222H8.5H17.5H25L22.8926 19.1929C22.3211 18.6425 22 17.8961 22 17.1178V12.5556C22 8.78204 19.4956 5.57179 16 4.38204V3.88889C16 2.2934 14.6569 1 13 1C11.3431 1 10 2.2934 10 3.88889V4.38204C6.50442 5.57179 4 8.78204 4 12.5556V17.1178C4 17.8961 3.67892 18.6425 3.1074 19.1929L1 21.2222Z" fill="#0644B5"/> <path d="M17.5 21.2222H25L22.8926 19.1929C22.3211 18.6425 22 17.8961 22 17.1178V12.5556C22 8.78204 19.4956 5.57179 16 4.38204V3.88889C16 2.2934 14.6569 1 13 1C11.3431 1 10 2.2934 10 3.88889V4.38204C6.50442 5.57179 4 8.78204 4 12.5556V17.1178C4 17.8961 3.67892 18.6425 3.1074 19.1929L1 21.2222H8.5M17.5 21.2222V22.6667C17.5 25.0599 15.4853 27 13 27C10.5147 27 8.5 25.0599 8.5 22.6667V21.2222M17.5 21.2222H8.5" stroke="#0644B5" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
//   supportedDisplayModes: ['email'],
//   options: {
//     backgroundColor: {
//       title: 'Background Color',
//       options: {
//         backgroundTextField: {
//           label: 'Color Code',
//           widget: 'text',
//         },
//         backgroundColor: {
//           label: 'Color Picker',
//           widget: 'color_picker',
//         },
//       },
//     },
//     bottomBorderColor: {
//       title: 'Bottom Border Color',
//       options: {
//         bottomBarTextField: {
//           label: 'Color Code',
//           widget: 'text',
//         },
//         bottomBarColor: {
//           label: 'Color Picker',
//           widget: 'color_picker',
//         },
//         barHeight: {
//           label: 'Bottom Bar Height',
//           defaultValue: '8',
//           widget: 'counter',
//         },
//       },
//     },
//     alignLogo: {
//       title: 'Align Logo',
//       options: {
//         alignLogo: {
//           label: 'Icon Align',
//           defaultValue: 'center',
//           widget: 'alignment',
//         },
//       },
//     },
//     showIcon: {
//       title: 'Icons',
//       options: {
//         showIcon: {
//           label: 'Show Social Icons',
//           defaultValue: true,
//           widget: 'toggle',
//         },
//       },
//     },
//   },

//   values: {},
//   renderer: {
//     Viewer: unlayer.createViewer({
//       render(values) {
//         return footerBody(values);
//       },
//     }),
//     exporters: {
//       email: function (values) {
//         return footerBody(values);
//       },
//     },
//     head: {
//       css: function (values) {},
//       js: function (values) {},
//     },
//   },
//   validator(data) {
//     const { defaultErrors, values } = data;
//     console.log('defaultErrors', defaultErrors, values);
//     return [];
//   },
// });

// unlayer.registerTool({
//   name: 'brand_button',
//   label: 'CTA',
//   icon: '<svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 21.2222H8.5H17.5H25L22.8926 19.1929C22.3211 18.6425 22 17.8961 22 17.1178V12.5556C22 8.78204 19.4956 5.57179 16 4.38204V3.88889C16 2.2934 14.6569 1 13 1C11.3431 1 10 2.2934 10 3.88889V4.38204C6.50442 5.57179 4 8.78204 4 12.5556V17.1178C4 17.8961 3.67892 18.6425 3.1074 19.1929L1 21.2222Z" fill="#0644B5"/> <path d="M17.5 21.2222H25L22.8926 19.1929C22.3211 18.6425 22 17.8961 22 17.1178V12.5556C22 8.78204 19.4956 5.57179 16 4.38204V3.88889C16 2.2934 14.6569 1 13 1C11.3431 1 10 2.2934 10 3.88889V4.38204C6.50442 5.57179 4 8.78204 4 12.5556V17.1178C4 17.8961 3.67892 18.6425 3.1074 19.1929L1 21.2222H8.5M17.5 21.2222V22.6667C17.5 25.0599 15.4853 27 13 27C10.5147 27 8.5 25.0599 8.5 22.6667V21.2222M17.5 21.2222H8.5" stroke="#0644B5" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
//   supportedDisplayModes: ['email'],
//   options: {
//     buttonText: {
//       title: 'Button Text',
//       options: {
//         buttonText: {
//           label: 'Name',
//           defaultValue: 'Button',
//           widget: 'text',
//         },
//       },
//     },
//     actionType: {
//       title: 'Action',
//       options: {
//         actionType: {
//           label: 'Action Type',
//           widget: 'link',
//         },
//       },
//     },
//     backgroundColor: {
//       title: 'Button Background Color',
//       options: {
//         backgroundColor: {
//           label: 'Color Picker',
//           widget: 'color_picker',
//         },
//         backgroundTextField: {
//           label: 'Color Code',
//           widget: 'text',
//         },
//       },
//     },
//     textColor: {
//       title: 'Button Text Color',
//       options: {
//         buttonTextColor: {
//           label: 'Color Picker',
//           widget: 'color_picker',
//         },
//         buttonTextField: {
//           label: 'Color Code',
//           widget: 'text',
//         },
//       },
//     },
//     alignButton: {
//       title: 'Align Button',
//       options: {
//         alignButton: {
//           label: 'Alignment',
//           defaultValue: 'center',
//           widget: 'alignment',
//         },
//       },
//     },
//     spacing: {
//       title: 'Spacing',
//       options: {
//         buttonLeftPadding: {
//           label: 'Left Padding',
//           defaultValue: '20',
//           widget: 'counter',
//         },
//         buttonRightPadding: {
//           label: 'Right Padding',
//           defaultValue: '20',
//           widget: 'counter',
//         },
//         buttonTopPadding: {
//           label: 'Top Padding',
//           defaultValue: '10',
//           widget: 'counter',
//         },
//         buttonBottomPadding: {
//           label: 'Bottom Padding',
//           defaultValue: '10',
//           widget: 'counter',
//         },
//         buttonBorder: {
//           label: 'Rounded Border',
//           defaultValue: '0',
//           widget: 'counter',
//         },
//       },
//     },
//   },
//   values: {},
//   renderer: {
//     Viewer: unlayer.createViewer({
//       render(values) {
//         console.log('values', values);
//         return buttonBody(values);
//       },
//     }),
//     exporters: {
//       email: function (values) {
//         return buttonBody(values);
//       },
//     },
//     head: {
//       css: function (values) {},
//       js: function (values) {},
//     },
//   },
//   validator(data) {
//     const { defaultErrors, values } = data;
//     console.log('defaultErrors', defaultErrors, values);
//     return [];
//   },
// });
